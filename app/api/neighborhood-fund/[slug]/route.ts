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
      .from("neighborhood_funds")
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
    const recipient_name = formData.get("recipient_name") as string;
    const address = formData.get("address") as string;
    const aid_type = formData.get("aid_type") as string;
    const aid_amount = parseFloat(formData.get("aid_amount") as string);
    const distribution_date = formData.get("distribution_date") as string;
    const notes = formData.get("notes") as string | undefined;
    const isShow = formData.get("isShow") === "true";

    const updateData: any = {
      recipient_name,
      address,
      aid_type,
      aid_amount,
      distribution_date,
      notes,
      isShow,
    };

    const { data, error } = await supabase
      .from("neighborhood_funds")
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
    console.error("Error in PATCH /api/neighborhood_funds/[slug]:", error);
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
    await supabase.from("neighborhood_funds").delete().eq("id", params.slug);
    return NextResponse.json("Data Deleted Successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
