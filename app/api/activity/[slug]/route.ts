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
      .from("activities")
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
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;
    const location = formData.get('location') as string;
    const status = formData.get('status') as string;
    const isShow = formData.get('isShow') === 'true';
    const image = formData.get('image') as File | null;

    let imagePath = null;
    if (image) {
      const fileExt = image.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from('activity')
        .upload(fileName, image);

      if (error) {
        throw error;
      }

      imagePath = data.path;
    }

    const updateData: any = {
      name,
      description,
      date,
      time,
      location,
      status,
      isShow,
    };

    if (imagePath) {
      updateData.image = imagePath;
    }

    const { data, error } = await supabase
      .from("activities")
      .update(updateData)
      .eq("id", params.slug);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: "Data Updated Successfully", data }, { status: 200 });
  } catch (error) {
    console.error("Error in PATCH /api/activity/[slug]:", error);
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
    await supabase.from("activities").delete().eq("id", params.slug);
    return NextResponse.json("Data Deleted Successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};