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

const FormCreate = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    date: new Date().toISOString(),
    time: "",
    location: "",
    status: "",
    isShow: true,
  });

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("name", input.name);
    // formData.append("description", input.description);
    // formData.append("image", input.image);
    // formData.append("date", input.date);
    // formData.append("time", input.time);
    // formData.append("location", input.location);
    // formData.append("status", input.status);
    // formData.append("isShow", input.isShow);

    await axios.post("/api/activity", input);

    router.push("/admin/activity");
  };

  const handleStatusChange = (value: any) => {
    setInput((prevInput) => ({ ...prevInput, status: value }));
  };

  const handleIsShowChange = (value: any) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value }));
  };

  return (
    <Container className="py-0 space-y-8">
      <h1>Form Create Activity</h1>
      <div className="grid grid-cols-2 items-center justify-center gap-4">
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
          placeholder="Description"
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <Input
          className="col-span-2"
          type="file"
          placeholder="Image"
          onChange={(e) => setInput({ ...input, image: e.target.value })}
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
              <SelectItem value="active">active</SelectItem>
              <SelectItem value="inactive">inactive</SelectItem>
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
        <Button className="col-span-2" onClick={handleCreate}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default FormCreate;
