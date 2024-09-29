"use client";

import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { fetcher } from "@/services/fetcher";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import useSWR from "swr";

const EditPromotionPage = ({ params }: { params: { slug: string } }) => {
  const { data } = useSWR(`/api/promotion/${params.slug}`, fetcher);

  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    building_area: 0,
    block: "",
    price: 0,
    isShow: true,
  });

  useEffect(() => {
    if (data) {
      setInput({
        title: data.title || "",
        description: data.description || "",
        category: data.category || "",
        image: data.image || "",
        building_area: data.building_area || 0,
        block: data.block || "",
        price: data.price || 0,
        isShow: true,
      });
    }
  }, [data]);

  const router = useRouter();

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    await axios.patch(`/api/promotion/${params.slug}`, input);
    router.push("/admin/promotion");
  };

  return (
    <div>
      <Input
        placeholder="Title"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
        value={input.title}
      />
      <Input
        placeholder="Description"
        onChange={(e) => setInput({ ...input, description: e.target.value })}
        value={input.description}
      />
      <Input
        placeholder="Category"
        onChange={(e) => setInput({ ...input, category: e.target.value })}
        value={input.category}
      />
      <Input
        placeholder="Image"
        onChange={(e) => setInput({ ...input, image: e.target.value })}
        value={input.image}
      />
      <Input
        placeholder="Building Area"
        type="number"
        onChange={(e) =>
          setInput({ ...input, building_area: parseFloat(e.target.value) || 0 })
        }
        value={input.building_area}
      />
      <Input
        placeholder="Block"
        onChange={(e) => setInput({ ...input, block: e.target.value })}
        value={input.block}
      />
      <Input
        placeholder="Price"
        type="number"
        onChange={(e) =>
          setInput({ ...input, price: parseFloat(e.target.value) || 0 })
        }
        value={input.price}
      />
      <Button onClick={handleUpdate}>Update</Button>
    </div>
  );
};

export default EditPromotionPage;
