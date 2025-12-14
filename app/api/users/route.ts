import { NextResponse } from "next/server";
import { ConnectToDB } from "@/lib/db";
import { AdminUser } from "@/models/AdminUser";

export async function GET() {
  await ConnectToDB();

  const users = await AdminUser.find().select("username email");

  return NextResponse.json({ users });
}
