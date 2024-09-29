import { createClient } from "@/common/utils/server";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    const { data } = await supabase
      .from("organizations")
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
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    const requestData = await req.json();
    await supabase.from("organizations").update(requestData).eq("id", params.slug);
    return NextResponse.json("Data Updated Successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    await supabase.from("organizations").delete().eq("id", params.slug).single();
    return NextResponse.json("Data Deleted Successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
