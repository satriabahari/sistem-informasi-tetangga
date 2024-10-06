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

const FormEditNeighborhoodFund = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSWR(
    `/api/neighborhood-fund/${params.slug}`,
    fetcher,
  );
  const [input, setInput] = useState({
    recipient_name: "",
    address: "",
    aid_type: "",
    aid_amount: 0,
    distribution_date: new Date().toISOString(),
    notes: "",
    isShow: true,
  });

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setInput({
        recipient_name: data.recipient_name || "",
        address: data.address || "",
        aid_type: data.aid_type || "",
        aid_amount: data.aid_amount || 0,
        distribution_date: data.distribution_date || "",
        notes: data.notes || "",
        isShow: data.isShow,
      });
    }
  }, [data]);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recipient_name", input.recipient_name);
    formData.append("address", input.address);
    formData.append("aid_type", input.aid_type);
    formData.append("aid_amount", String(input.aid_amount));
    formData.append("distribution_date", input.distribution_date);
    formData.append("notes", input.notes);
    formData.append("isShow", String(input.isShow));

    try {
      await axios.patch(`/api/neighborhood-fund/${params.slug}`, formData);
      router.push("/admin/neighborhood-fund");
      toast.success("Data successfully updated");
    } catch (error) {
      console.error("Error updating neighborhood fund:", error);
    }
  };

  const handleIsShowChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, isShow: value === "true" }));
  };

  const handleAidTypeChange = (value: string) => {
    setInput((prevInput) => ({ ...prevInput, aid_type: value }));
  };

  return (
    <Container className="space-y-8 py-0">
      <FormHeading title="Form Edit Neighborhood Fund"/>
      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Recipient Name"
          value={input.recipient_name}
          onChange={(e) =>
            setInput({ ...input, recipient_name: e.target.value })
          }
        />
        <Input
          placeholder="Address"
          value={input.address}
          onChange={(e) => setInput({ ...input, address: e.target.value })}
        />
        <Select onValueChange={handleAidTypeChange} value={input.aid_type}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Aid Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="PKH">PKH</SelectItem>
              <SelectItem value="BPNT">BPNT</SelectItem>
              <SelectItem value="BLT">BLT</SelectItem>
              <SelectItem value="BSB">BSB</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder="Aid Amount"
          type="number"
          value={input.aid_amount}
          onChange={(e) =>
            setInput({ ...input, aid_amount: Number(e.target.value) })
          }
        />
        <Input
          placeholder="Distribution Date"
          type="date"
          onChange={(e) =>
            setInput({ ...input, distribution_date: e.target.value })
          }
          value={input.distribution_date}
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

export default FormEditNeighborhoodFund;
