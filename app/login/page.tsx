"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Mail, Lock, ArrowRight, Zap } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) router.push("/dashboard");
    else setError("Invalid credentials. Try any email + 6+ char password.");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* Background blobs */}
      <div style={{ position: "absolute", width: 600, height: 600, background: "radial-gradient(circle, rgba(124,109,250,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

      <div className="fade-up" style={{ width: "100%", maxWidth: 420, opacity: 0 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 36 }}>
          <div style={{ background: "linear-gradient(135deg, var(--accent), #9b59f5)", borderRadius: 12, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={22} color="#fff" fill="#fff" />
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em" }}>
            Quiz<span style={{ color: "var(--accent)" }}>Ora</span>
          </span>
        </div>

        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "36px 32px" }}>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: 24, fontWeight: 700, margin: "0 0 6px" }}>Welcome back</h1>
          <p style={{ color: "var(--text2)", fontSize: 14, margin: "0 0 28px" }}>Sign in to continue your quiz journey</p>

          {error && (
            <div style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", borderRadius: 10, padding: "12px 16px", color: "var(--red)", fontSize: 13, marginBottom: 20 }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontSize: 12, color: "var(--text2)", fontWeight: 500, display: "block", marginBottom: 6 }}>Email</label>
              <div style={{ position: "relative" }}>
                <Mail size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text3)" }} />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com"
                  style={{ width: "100%", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: "12px 14px 12px 40px", color: "var(--text)", fontSize: 14, outline: "none" }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 12, color: "var(--text2)", fontWeight: 500, display: "block", marginBottom: 6 }}>Password</label>
              <div style={{ position: "relative" }}>
                <Lock size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text3)" }} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••"
                  style={{ width: "100%", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: "12px 14px 12px 40px", color: "var(--text)", fontSize: 14, outline: "none" }}
                  onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8, padding: "14px" }}>
              {loading ? <span className="spinner" style={{ width: 16, height: 16, border: "2px solid #fff4", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block" }} /> : <><span>Sign In</span><ArrowRight size={16} /></>}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "var(--text2)" }}>
            No account?{" "}
            <Link href="/signup" style={{ color: "var(--accent2)", fontWeight: 500, textDecoration: "none" }}>Create one →</Link>
          </p>
        </div>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "var(--text3)" }}>
          💡 Demo: use any email + any password (6+ chars)
        </p>
      </div>
    </div>
  );
}
