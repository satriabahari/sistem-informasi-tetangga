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

const FormCreateOrganization = () => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    position: "",
    email: "",
    phone_number: "",
    period: "",
    image: null as File | null,
    isShow: true,
  });

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("address", input.address);
    formData.append("position", input.position);
    formData.append("email", input.email);
    formData.append("phone_number", input.phone_number);
    formData.append("period", input.period);
    if (input.image) {
      formData.append("image", input.image);
    }
    formData.append("isShow", String(input.isShow));

    try {
      await axios.post("/api/organization", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/organization");
      toast.success("Data successfully added");
    } catch (error) {
      console.error("Error creating organization:", error);
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

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Create Organization" />
      <form
        onSubmit={handleCreate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Name"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <Input
          placeholder="Position"
          onChange={(e) => setInput({ ...input, position: e.target.value })}
        />
        <Textarea
          rows={8}
          placeholder="Address"
          className="col-span-2"
          onChange={(e) => setInput({ ...input, address: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <Input
          placeholder="Phone Number"
          type="tel"
          onChange={(e) => setInput({ ...input, phone_number: e.target.value })}
        />
        <Input
          placeholder="Period"
          onChange={(e) => setInput({ ...input, period: e.target.value })}
        />
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
        <Input
          className="col-span-2"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <Button type="submit" className="col-span-2">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormCreateOrganization;
