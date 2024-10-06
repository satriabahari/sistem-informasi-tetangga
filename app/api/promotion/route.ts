import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const GET = async () => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("promotions").select();
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
    const block = formData.get("block") as string;
    const price = parseFloat(formData.get("price") as string);
    const buildingArea = parseFloat(formData.get("building_area") as string);
    const category = formData.get("category") as string;
    const isShow = formData.get("isShow") === "true";
    const image = formData.get("image") as File | null;

    let imagePath = null;
    if (image) {
      const fileExt = image.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("promotion")
        .upload(fileName, image);

      if (error) {
        throw error;
      }

      imagePath = data.path;
    }

    const { data, error } = await supabase.from("promotions").insert([
      {
        title,
        description,
        image: imagePath,
        block,
        price,
        category,
        building_area: buildingArea,
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
