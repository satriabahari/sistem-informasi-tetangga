import Container from "@/common/components/elements/Container";
import FormHeading from "@/common/components/elements/FormHeading";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { Textarea } from "@/common/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";

const FormCreateService = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    letter_no: "",
    image: null as File | null,
    pdf: null as File | null,
    isShow: true,
  });

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("description", input.description);
    formData.append("letter_no", input.letter_no);
    if (input.image) {
      formData.append("image", input.image);
    }
    if (input.pdf) {
      formData.append("pdf", input.pdf);
    }
    formData.append("isShow", String(input.isShow));

    try {
      await axios.post("/api/service", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/service");
      toast.success("Data successfully added");
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  const handleIsShowChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value === "true" }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setInput((prevInput) => ({ ...prevInput, image: files[0] }));
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setInput((prevInput) => ({ ...prevInput, pdf: files[0] }));
    }
  };

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Create Service" />
      <form
        onSubmit={handleCreate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Title"
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <Input
          placeholder="Letter No."
          onChange={(e) => setInput({ ...input, letter_no: e.target.value })}
        />
        <Textarea
          rows={8}
          placeholder="Description"
          className="col-span-2"
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <div className="space-y-2">
          <Label className="text-neutral-700 dark:text-neutral-300">
            Image
          </Label>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="space-y-2">
          <Label className="text-neutral-700 dark:text-neutral-300">PDF</Label>
          <Input
            type="file"
            accept="application/pdf"
            onChange={handlePdfChange}
          />
        </div>
        <Select onValueChange={handleIsShowChange}>
          <SelectTrigger className="col-span-2 w-full">
            <SelectValue placeholder="Is Show" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="true">True</SelectItem>
              <SelectItem value="false">False</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button type="submit" className="col-span-2">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormCreateService;
