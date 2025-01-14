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
import { Textarea } from "@/common/components/ui/textarea";
import Image from "next/image";
import { toast } from "sonner";
import FormHeading from "@/common/components/elements/FormHeading";

const FormEdit = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSWR(`/api/promotion/${params.slug}`, fetcher);
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: null as File | null,
    currentImage: "",
    category: "",
    building_area: 0,
    block: "",
    price: 0,
    isShow: true,
  });

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setInput({
        title: data.title || "",
        description: data.description || "",
        image: null,
        currentImage: data.image || "",
        category: data.category || "",
        building_area: data.building_area || 0,
        block: data.block || "",
        price: data.price || 0,
        isShow: data.isShow,
      });
    }
  }, [data]);

  const handleUpdate = async (e: FormEvent) => {
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
      await axios.patch(`/api/promotion/${params.slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/promotion");
      toast.success("Data successfully updated");
    } catch (error) {
      console.error("Error updating promotion:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, image: file });
    }
  };

  const handleCategoryChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, category: value }));
  };

  const handleIsShowChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value === "true" }));
  };

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Edit Promotion" />
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
          placeholder="Block"
          onChange={(e) => setInput({ ...input, block: e.target.value })}
          value={input.block}
        />
        <Textarea
          rows={8}
          placeholder="Description"
          className="col-span-2"
          onChange={(e) => setInput({ ...input, description: e.target.value })}
          value={input.description}
        />
        <div className="col-span-2">
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <Input
          type="number"
          placeholder="Building Area"
          onChange={(e) =>
            setInput({ ...input, building_area: Number(e.target.value) })
          }
          value={input.building_area}
        />

        <Input
          type="number"
          placeholder="Price"
          onChange={(e) =>
            setInput({ ...input, price: Number(e.target.value) })
          }
          value={input.price}
        />
        <Select onValueChange={handleCategoryChange} value={input.category}>
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
        <Select onValueChange={handleIsShowChange} value={String(input.isShow)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select is show" />
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

export default FormEdit;
