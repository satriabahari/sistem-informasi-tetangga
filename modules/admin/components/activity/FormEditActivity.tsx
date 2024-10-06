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

const FormEditActivity = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSWR(`/api/activity/${params.slug}`, fetcher);
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: null as File | null,
    currentImage: "",
    date: "",
    time: "",
    location: "",
    status: "",
    isShow: true,
  });
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setInput({
        name: data.name || "",
        description: data.description || "",
        image: null,
        currentImage: data.image || "",
        date: data.date || "",
        time: data.time || "",
        location: data.location || "",
        status: data.status || "",
        isShow: data.isShow,
      });
    }
  }, [data]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    if (input.image) {
      formData.append("image", input.image);
    }
    formData.append("date", input.date);
    formData.append("time", input.time);
    formData.append("location", input.location);
    formData.append("status", input.status);
    formData.append("isShow", String(input.isShow));

    try {
      await axios.patch(`/api/activity/${params.slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/activity");
      toast.success("Data successfully updated");
    } catch (error) {
      console.error("Error updating activity:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, image: file });
    }
  };

  const handleStatusChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, status: value }));
  };

  const handleIsShowChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value === "true" }));
  };

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Edit Activity" />
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          value={input.name}
        />
        <Input
          placeholder="Location"
          onChange={(e) => setInput({ ...input, location: e.target.value })}
          value={input.location}
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
          type="date"
          placeholder="Date"
          onChange={(e) => setInput({ ...input, date: e.target.value })}
          value={input.date}
        />
        <Input
          type="time"
          placeholder="Time"
          onChange={(e) => setInput({ ...input, time: e.target.value })}
          value={input.time}
        />
        <Select onValueChange={handleStatusChange} value={input.status}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
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
              <SelectItem value="false">false</SelectItem>
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

export default FormEditActivity;
