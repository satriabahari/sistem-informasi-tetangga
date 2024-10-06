import Container from "@/common/components/elements/Container";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { fetcher } from "@/services/fetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import useSWR from "swr";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import Image from "next/image";
import { toast } from "sonner";
import { Textarea } from "@/common/components/ui/textarea";
import { Label } from "@/common/components/ui/label";
import FormHeading from "@/common/components/elements/FormHeading";

const FormEditService = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSWR(`/api/service/${params.slug}`, fetcher);
  const [input, setInput] = useState({
    title: "",
    description: "",
    letter_no: "",
    image: null as File | null,
    currentImage: "",
    pdf: null as File | null,
    currentPdf: "",
    isShow: true,
  });

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setInput({
        title: data.title || "",
        description: data.description || "",
        letter_no: data.letter_no || "",
        image: null,
        currentImage: data.image || "",
        pdf: null,
        currentPdf: data.pdf || "",
        isShow: data.isShow ?? true,
      });
    }
  }, [data]);

  const handleUpdate = async (e: FormEvent) => {
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
      await axios.patch(`/api/service/${params.slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/service");
      toast.success("Data successfully updated");
    } catch (error) {
      console.error("Error updating service:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, image: file });
    }
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, pdf: file });
    }
  };

  const handleIsShowChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value === "true" }));
  };

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Edit Service"/>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Title"
          onChange={(e) => setInput({ ...input, title: e.target.value })}
          value={input.title}
        />
        <Input
          placeholder="Letter No"
          onChange={(e) => setInput({ ...input, letter_no: e.target.value })}
          value={input.letter_no}
        />
        <Textarea
          placeholder="Description"
          className="col-span-2"
          rows={8}
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          value={input.description}
        />

        <div>
          <Label className="text-neutral-700 dark:text-neutral-300">PDF</Label>
          <Input
            type="file"
            accept="application/pdf"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <Label className="text-neutral-700 dark:text-neutral-300">
            Image
          </Label>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <Select onValueChange={handleIsShowChange} value={String(input.isShow)}>
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
          Update
        </Button>
      </form>
    </Container>
  );
};

export default FormEditService;
