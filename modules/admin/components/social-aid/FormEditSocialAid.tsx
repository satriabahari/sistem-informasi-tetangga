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

const FormEditSocialAid = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSWR(`/api/social-aid/${params.slug}`, fetcher);
  const [input, setInput] = useState({
    transaction_type: "",
    amount: 0,
    transaction_date: new Date().toISOString(),
    notes: "",
    isShow: true,
  });

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setInput({
        transaction_type: data.transaction_type || "",
        amount: data.amount || 0,
        transaction_date: data.transaction_date || "",
        notes: data.notes || "",
        isShow: data.isShow,
      });
    }
  }, [data]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("transaction_type", input.transaction_type);
    formData.append("amount", String(input.amount));
    formData.append("transaction_date", input.transaction_date);
    formData.append("notes", input.notes);
    formData.append("isShow", String(input.isShow));

    try {
      await axios.patch(`/api/social-aid/${params.slug}`, formData);
      router.push("/admin/social-aid");
      toast.success("Data successfully updated");
    } catch (error) {
      console.error("Error updating social aid:", error);
    }
  };

  const handleIsShowChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value === "true" }));
  };

  const handleTransactionTypeChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, transaction_type: value }));
  };

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Edit Social Aid" />
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Amount"
          type="number"
          value={input.amount}
          onChange={(e) =>
            setInput({ ...input, amount: Number(e.target.value) })
          }
        />
        <Select
          onValueChange={handleTransactionTypeChange}
          value={input.transaction_type}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Transaction Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Masukan">Masukan</SelectItem>
              <SelectItem value="Keluaran">Keluaran</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder="Transaction Date"
          type="date"
          onChange={(e) =>
            setInput({ ...input, transaction_date: e.target.value })
          }
          value={input.transaction_date}
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
        <Textarea
          rows={4}
          placeholder="Notes (Optional)"
          className="col-span-2"
          value={input.notes}
          onChange={(e) => setInput({ ...input, notes: e.target.value })}
        />
        <Button type="submit" className="col-span-2">
          Update
        </Button>
      </form>
    </Container>
  );
};

export default FormEditSocialAid;
