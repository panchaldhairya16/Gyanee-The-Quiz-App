import { NextResponse } from "next/server";
import { CATEGORIES } from "@/lib/mockData";

// GET /api/categories
// Supabase equivalent: supabase.from('categories').select('*')
export async function GET() {
  return NextResponse.json({ categories: CATEGORIES });
}
