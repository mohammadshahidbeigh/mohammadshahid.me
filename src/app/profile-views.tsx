import { NextResponse } from "next/server";

// Mock data for profile views
const profileViews = 1235;

export async function GET() {
  return NextResponse.json({ views: profileViews });
}
