"use client";

import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreatePromotionPage = () => {
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

  const router = useRouter();

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("/api/promotion", input);
    router.push("/admin/promotion");
  };

  return (
    <div>
      <Input
        placeholder="Title"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <Input
        placeholder="Description"
        onChange={(e) => setInput({ ...input, description: e.target.value })}
      />
      <Input
        placeholder="Category"
        onChange={(e) => setInput({ ...input, category: e.target.value })}
      />
      <Input
        placeholder="Image"
        onChange={(e) => setInput({ ...input, image: e.target.value })}
      />
      <Input
        placeholder="Building Area"
        type="number"
        onChange={(e) =>
          setInput({ ...input, building_area: parseFloat(e.target.value) || 0 })
        }
      />
      <Input
        placeholder="Block"
        onChange={(e) => setInput({ ...input, block: e.target.value })}
      />
      <Input
        placeholder="Price"
        type="number"
        onChange={(e) =>
          setInput({ ...input, price: parseFloat(e.target.value) || 0 })
        }
      />
      <Button onClick={handleCreate}>Submit</Button>
    </div>
  );
};

export default CreatePromotionPage;
