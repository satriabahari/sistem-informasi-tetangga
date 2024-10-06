import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    const { data } = await supabase
      .from("social_aids")
      .select()
      .eq("id", params.slug)
      .single();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    const formData = await req.formData();
    const transaction_type = formData.get("transaction_type") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const transaction_date = formData.get("transaction_date") as string;
    const notes = formData.get("notes") as string | undefined;
    const isShow = formData.get("isShow") === "true";

    const updateData: any = {
      transaction_type,
      amount,
      transaction_date,
      notes,
      isShow,
    };

    const { data, error } = await supabase
      .from("social_aids")
      .update(updateData)
      .eq("id", params.slug);

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { message: "Data Updated Successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in PATCH /api/organization/[slug]:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    await supabase.from("social_aids").delete().eq("id", params.slug);
    return NextResponse.json("Data Deleted Successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
