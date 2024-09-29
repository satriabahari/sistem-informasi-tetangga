"use client";

import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { fetcher } from "@/services/fetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import useSWR from "swr";

const EditOrganizationPage = ({ params }: { params: { slug: string } }) => {
  const { data } = useSWR(`/api/organization/${params.slug}`, fetcher);

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

  useEffect(() => {
    if (data) {
      setInput({
        name: data.name || "",
        address: data.address || "",
        position: data.position || "",
        email: data.email || "",
        phone_number: data.phone_number || "",
        period: data.period || "",
        image: data.image || "",
        isShow: true,
      });
    }
  }, [data]);

  const router = useRouter();

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    await axios.patch(`/api/organization/${params.slug}`, input);
    router.push("/admin/organization");
  };

  return (
    <div>
      <Input
        placeholder="Name"
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        value={input.name}
      />
      <Input
        placeholder="Address"
        onChange={(e) => setInput({ ...input, address: e.target.value })}
        value={input.address}
      />
      <Input
        placeholder="Position"
        onChange={(e) => setInput({ ...input, position: e.target.value })}
        value={input.position}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setInput({ ...input, email: e.target.value })}
        value={input.email}
      />
      <Input
        placeholder="Phone Number"
        onChange={(e) => setInput({ ...input, phone_number: e.target.value })}
        value={input.phone_number}
      />
      <Input
        placeholder="Period"
        onChange={(e) => setInput({ ...input, period: e.target.value })}
        value={input.period}
      />
      <Input
        placeholder="Image"
        onChange={(e) => setInput({ ...input, image: e.target.value })}
        value={input.image}
      />
      <Button onClick={handleUpdate}>Update</Button>
    </div>
  );
};

export default EditOrganizationPage;
