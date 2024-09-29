import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { fetcher } from "@/services/fetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import useSWR from "swr";

const FormEdit = ({ params }: { params: { slug: string } }) => {
  const { data } = useSWR(`/api/activity/${params.slug}`, fetcher);

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

  useEffect(() => {
    if (data) {
      setInput({
        name: data?.name || "",
        description: data?.description || "",
        image: data?.image || "",
        date: new Date().toISOString(),
        time: data?.time || "",
        location: data?.location || "",
        status: data?.status || "",
        isShow: true,
      });
    }
  }, [data]);

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();
    await axios.patch(`/api/activity/${params.slug}`, input);
    router.push("/admin/activity");
  };
  return (
    <div>
      <Input
        placeholder="Name"
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        value={input.name}
      />
      <Input
        placeholder="Description"
        onChange={(e) => setInput({ ...input, description: e.target.value })}
        value={input.description}
      />
      <Input
        placeholder="Image"
        onChange={(e) => setInput({ ...input, image: e.target.value })}
        value={input.image}
      />
      {/* <Input
        placeholder="Date"
        onChange={(e) => setInput({ ...input, date: e.target.value })}
        value={input.date}
      /> */}
      <Input
        placeholder="Time"
        onChange={(e) => setInput({ ...input, time: e.target.value })}
        value={input.time}
      />
      <Input
        placeholder="Location"
        onChange={(e) => setInput({ ...input, location: e.target.value })}
        value={input.location}
      />
      <Input
        placeholder="Status"
        onChange={(e) => setInput({ ...input, status: e.target.value })}
        value={input.status}
      />
      {/* <Input placeholder="IsShow" onChange={(e) => setInput({...input, isShow: e.target.value})}/> */}
      <Button onClick={handleCreate}>Update</Button>
    </div>
  );
};

export default FormEdit;
