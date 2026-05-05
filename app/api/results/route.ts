import { NextRequest, NextResponse } from "next/server";
import { DASHBOARD_STATS } from "@/lib/mockData";

// GET /api/results?userId=
// Supabase: supabase.from('attempts').select('*, categories(name)').eq('user_id', userId).order('created_at', { ascending: false })
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });

  // Return mock dashboard stats (replace with actual DB aggregation)
  return NextResponse.json({ stats: DASHBOARD_STATS });
}
