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
      .from("services")
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
    const letter_no = formData.get("letter_no") as string;
    const isShow = formData.get("isShow") === "true";
    const image = formData.get("image") as File | null;
    const pdf = formData.get("pdf") as File | null;

    let imagePath = null;
    if (image) {
      const fileExt = image.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("service-image")
        .upload(fileName, image);

      if (error) {
        throw error;
      }

      imagePath = data.path;
    }
    let pdfPath = null;
    if (pdf) {
      const fileExt = pdf.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("service-pdf")
        .upload(fileName, pdf);

      if (error) {
        throw error;
      }

      pdfPath = data.path;
    }

    const updateData: any = {
      title,
      description,
      letter_no,
      isShow,
    };

    if (imagePath) {
      updateData.image = imagePath;
    }

    if (pdfPath) {
      updateData.pdf = pdfPath;
    }

    const { data, error } = await supabase
      .from("services")
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
    console.error("Error in PATCH /api/services/[slug]:", error);
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
    await supabase.from("services").delete().eq("id", params.slug); // Delete a service by ID
    return NextResponse.json("Data Deleted Successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
