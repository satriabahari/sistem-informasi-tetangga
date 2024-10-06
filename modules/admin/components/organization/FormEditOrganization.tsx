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
import FormHeading from "@/common/components/elements/FormHeading";

const FormEditOrganization = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSWR(`/api/organization/${params.slug}`, fetcher);
  const [input, setInput] = useState({
    name: "",
    address: "",
    position: "",
    email: "",
    phone_number: "",
    period: "",
    image: null as File | null,
    currentImage: "",
    isShow: true,
  });

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setInput({
        name: data.name || "",
        address: data.address || "",
        position: data.position || "",
        email: data.email || "",
        phone_number: data.phone_number || "",
        period: data.period || "",
        image: null,
        currentImage: data.image || "",
        isShow: data.isShow,
      });
    }
  }, [data]);

  const handleUpdate = async (e: FormEvent) => {
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
      await axios.patch(`/api/organization/${params.slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/organization");
      toast.success("Data successfully updated");
    } catch (error) {
      console.error("Error updating organization:", error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, image: file });
    }
  };

  const handleIsShowChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value === "true" }));
  };

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Edit Organization"/>
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
          placeholder="Position"
          onChange={(e) => setInput({ ...input, position: e.target.value })}
          value={input.position}
        />
        <Textarea
          placeholder="Address"
          className="col-span-2"
          rows={8}
          onChange={(e) => setInput({ ...input, address: e.target.value })}
          value={input.address}
        />
        <Input
          placeholder="Email"
          type="email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          value={input.email}
        />
        <Input
          placeholder="Phone Number"
          type="tel"
          onChange={(e) => setInput({ ...input, phone_number: e.target.value })}
          value={input.phone_number}
        />
        <Input
          placeholder="Period"
          onChange={(e) => setInput({ ...input, period: e.target.value })}
          value={input.period}
        />
        <Select onValueChange={handleIsShowChange} value={String(input.isShow)}>
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
        <div className="col-span-2">
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <Button type="submit" className="col-span-2">
          Update
        </Button>
      </form>
    </Container>
  );
};

export default FormEditOrganization;
