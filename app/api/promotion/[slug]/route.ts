import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const supabase = createClient();
  try {
    const { data } = await supabase
      .from("promotions")
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
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const block = formData.get("block") as string;
    const price = parseFloat(formData.get("price") as string);
    const buildingArea = parseFloat(formData.get("building_area") as string);
    const category = formData.get("category") as string;
    const isShow = formData.get("isShow") === "true";
    const image = formData.get("image") as File | null;

    let imagePath = null;
    if (image) {
      const fileExt = image.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from('promotion')
        .upload(fileName, image);

      if (error) {
        throw error;
      }

      imagePath = data.path;
    }

    const updateData: any = {
      title,
      description,
      image: imagePath,
      block,
      price,
      category,
      building_area: buildingArea,
      isShow,
    };

    if (imagePath) {
      updateData.image = imagePath;
    }

    const { data, error } = await supabase
      .from("promotions")
      .update(updateData)
      .eq("id", params.slug);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: "Data Updated Successfully", data }, { status: 200 });
  } catch (error) {
    console.error("Error in PATCH /api/promotion/[slug]:", error);
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
    await supabase.from("promotions").delete().eq("id", params.slug);
    return NextResponse.json("Data Deleted Successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};