import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("social_aids").select();
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
    const transaction_type = formData.get("transaction_type") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const transaction_date = formData.get("transaction_date") as string;
    const notes = formData.get("notes") as string | undefined;
    const isShow = formData.get("isShow") === "true";

    const { data, error } = await supabase.from("social_aids").insert([
      {
        transaction_type,
        amount,
        transaction_date,
        notes,
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
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
