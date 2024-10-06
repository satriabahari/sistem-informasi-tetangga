import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const GET = async () => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("organizations").select();
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
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const position = formData.get("position") as string;
    const email = formData.get("email") as string;
    const phone_number = formData.get("phone_number") as string;
    const period = formData.get("period") as string;
    const isShow = formData.get("isShow") === "true";
    const image = formData.get("image") as File | null;

    let imagePath = null;
    if (image) {
      const fileExt = image.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("organization")
        .upload(fileName, image);

      if (error) {
        throw error;
      }

      imagePath = data.path;
    }

    const { data, error } = await supabase.from("organizations").insert([
      {
        name,
        address,
        position,
        email,
        phone_number,
        period,
        image: imagePath,
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
    console.error("Error in POST /api/organization:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
