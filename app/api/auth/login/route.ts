import { NextRequest, NextResponse } from "next/server";

// POST /api/auth/login
// Replace mock logic with Supabase auth when ready:
// const { data, error } = await supabase.auth.signInWithPassword({ email, password })
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }

  // Mock validation — any valid email + password >= 6 chars passes
  if (password.length < 6) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const user = {
    id: `user_${Date.now()}`,
    name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase()),
    email,
  };

  return NextResponse.json({ user, token: `mock_jwt_${Date.now()}` });
}
