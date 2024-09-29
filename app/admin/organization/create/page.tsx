"use client";

import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreateOrganizationPage = () => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    position: "",
    email: "",
    phone_number: "",
    period: "",
    image: "",
    isShow: true,
  });

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("/api/organization", input);
    router.push("/admin/organization");
  };

  return (
    <div>
      <Input
        placeholder="Name"
        onChange={(e) => setInput({ ...input, name: e.target.value })}
      />
      <Input
        placeholder="Address"
        onChange={(e) => setInput({ ...input, address: e.target.value })}
      />
      <Input
        placeholder="Position"
        onChange={(e) => setInput({ ...input, position: e.target.value })}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <Input
        placeholder="Phone Number"
        onChange={(e) => setInput({ ...input, phone_number: e.target.value })}
      />
      <Input
        placeholder="Period"
        onChange={(e) => setInput({ ...input, period: e.target.value })}
      />
      <Input
        placeholder="Image"
        onChange={(e) => setInput({ ...input, image: e.target.value })}
      />
      <Button onClick={handleCreate}>Submit</Button>
    </div>
  );
};

export default CreateOrganizationPage;
