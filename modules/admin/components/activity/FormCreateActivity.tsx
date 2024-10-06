import Container from "@/common/components/elements/Container";
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
import { createClient } from "@/common/utils/client";
import { toast } from "sonner";
import FormHeading from "@/common/components/elements/FormHeading";

const FormCreateActivity = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: null as File | null,
    date: new Date().toISOString(),
    time: "",
    location: "",
    status: "",
    isShow: true,
  });

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
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
      await axios.post("/api/activity", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/activity");
      toast.success("Data successfully added")
    } catch (error) {
      console.error("Error creating activity:", error);
    }
  };

  const handleStatusChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, status: value }));
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
      <FormHeading title="Form Create Activity"/>
      <form onSubmit={handleCreate} className="grid grid-cols-2 items-center justify-center gap-4">
        <Input
          placeholder="Name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <Input
          placeholder="Location"
          onChange={(e) => setInput({ ...input, location: e.target.value })}
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
        />
        <Input
          type="date"
          placeholder="Date"
          onChange={(e) => setInput({ ...input, date: e.target.value })}
        />
        <Input
          type="time"
          placeholder="Time"
          onChange={(e) => setInput({ ...input, time: e.target.value })}
        />
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactiveve</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handleIsShowChange}>
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
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormCreateActivity;