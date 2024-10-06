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

const FormCreateNeighborhoodFund = () => {
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

  const handleCreate = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("recipient_name", input.recipient_name);
    formData.append("address", input.address);
    formData.append("aid_type", input.aid_type);
    formData.append("aid_amount", input.aid_amount.toString());
    formData.append("distribution_date", input.distribution_date);
    formData.append("notes", input.notes);
    formData.append("isShow", String(input.isShow));

    try {
      await axios.post("/api/neighborhood-fund", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/admin/neighborhood-fund");
      toast.success("Data successfully added");
    } catch (error) {
      console.error("Error creating neighborhood fund:", error);
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
      <FormHeading title="Form Create Neighborhood Fund" />
      <form
        onSubmit={handleCreate}
        className="grid grid-cols-2 items-center justify-center gap-4"
      >
        <Input
          placeholder="Recipient Name"
          onChange={(e) =>
            setInput({ ...input, recipient_name: e.target.value })
          }
        />
        <Input
          placeholder="Address"
          onChange={(e) => setInput({ ...input, address: e.target.value })}
        />
        <Select onValueChange={handleAidTypeChange}>
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
          onChange={(e) =>
            setInput({ ...input, aid_amount: Number(e.target.value) })
          }
        />
        <Input
          type="date"
          onChange={(e) =>
            setInput({ ...input, distribution_date: e.target.value })
          }
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
        <Textarea
          rows={4}
          placeholder="Notes (Optional)"
          className="col-span-2"
          onChange={(e) => setInput({ ...input, notes: e.target.value })}
        />
        <Button type="submit" className="col-span-2">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormCreateNeighborhoodFund;
