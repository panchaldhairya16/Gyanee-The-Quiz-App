import { NextRequest, NextResponse } from "next/server";
import { QUESTIONS } from "@/lib/mockData";

// GET /api/questions?categoryId=1
// Supabase: supabase.from('questions').select('*').eq('category_id', categoryId)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = parseInt(searchParams.get("categoryId") || "1");

  const questions = QUESTIONS[categoryId];
  if (!questions) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  return NextResponse.json({ questions });
}
