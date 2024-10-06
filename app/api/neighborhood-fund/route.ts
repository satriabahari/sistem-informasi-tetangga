import { createClient } from "@/common/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const supabase = createClient();
  try {
    const { data } = await supabase.from("neighborhood_funds").select();
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
    const recipient_name = formData.get("recipient_name") as string;
    const address = formData.get("address") as string;
    const aid_type = formData.get("aid_type") as string;
    const aid_amount = parseFloat(formData.get("aid_amount") as string);
    const distribution_date = formData.get("distribution_date") as string;
    const notes = formData.get("notes") as string | undefined;
    const isShow = formData.get("isShow") === "true";

    const { data, error } = await supabase
      .from("neighborhood_funds")
      .insert([
        {
          recipient_name,
          address,
          aid_type,
          aid_amount,
          distribution_date,
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
