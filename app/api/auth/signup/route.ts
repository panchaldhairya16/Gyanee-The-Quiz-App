import { NextRequest, NextResponse } from "next/server";

// POST /api/auth/signup
// Replace mock logic with Supabase:
// const { data, error } = await supabase.auth.signUp({ email, password })
// await supabase.from('users').insert({ id: data.user.id, name, email })
export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const user = { id: `user_${Date.now()}`, name, email };
  return NextResponse.json({ user, token: `mock_jwt_${Date.now()}` });
}
