import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const GET = async () => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("services").select();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const POST = async (req: NextRequest) => {
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

    const { data, error } = await supabase.from("services").insert([
      {
        title,
        description,
        letter_no,
        image: imagePath,
        pdf: pdfPath,
        isShow,
      },
    ]);

    if (error) {
      throw error;
    }

    return NextResponse.json(
      { message: "Data saved successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in POST /api/services:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
