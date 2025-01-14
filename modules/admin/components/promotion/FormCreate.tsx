import Container from "@/common/components/elements/Container";
import FormHeading from "@/common/components/elements/FormHeading";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
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

const FormCreate = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: null as File | null,
    category: "",
    building_area: 0,
    block: "",
    price: 0,
    isShow: true,
  });

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("description", input.description);
    if (input.image) {
      formData.append("image", input.image);
    }
    formData.append("category", input.category);
    formData.append("building_area", String(input.building_area));
    formData.append("block", input.block);
    formData.append("price", String(input.price));
    formData.append("isShow", String(input.isShow));

    try {
      await axios.post("/api/promotion", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/promotion");
      toast.success("Data successfully added");
    } catch (error) {
      console.error("Error creating promotion:", error);
    }
  };

  const handleCategoryChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, category: value }));
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

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Create Promotion" />
      <form
        onSubmit={handleCreate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Title"
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <Input
          placeholder="Block"
          onChange={(e) => setInput({ ...input, block: e.target.value })}
        />
        <Textarea
          className="col-span-2"
          rows={8}
          placeholder="Description"
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <Input
          className="col-span-2"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />{" "}
        <Input
          type="number"
          placeholder="Building Area"
          onChange={(e) =>
            setInput({ ...input, building_area: Number(e.target.value) })
          }
        />
        <Input
          type="number"
          placeholder="Price"
          onChange={(e) =>
            setInput({ ...input, price: Number(e.target.value) })
          }
        />
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Real Estate">Real Estate</SelectItem>
              <SelectItem value="Commercial">Commercial</SelectItem>
              <SelectItem value="Residential">Residential</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handleIsShowChange}>
          <SelectTrigger className="w-full">
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

export default FormCreate;
