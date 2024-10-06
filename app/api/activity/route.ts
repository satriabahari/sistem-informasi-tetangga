import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const GET = async () => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("activities").select();
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
    const description = formData.get("description") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const location = formData.get("location") as string;
    const status = formData.get("status") as string;
    const isShow = formData.get("isShow") === "true";
    const image = formData.get("image") as File | null;

    let imagePath = null;
    if (image) {
      const fileExt = image.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("activity")
        .upload(fileName, image);

      if (error) {
        throw error;
      }

      imagePath = data.path;
    }

    const { data, error } = await supabase.from("activities").insert([
      {
        name,
        description,
        image: imagePath,
        date,
        time,
        location,
        status,
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
    console.error("Error in POST /api/activity:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
