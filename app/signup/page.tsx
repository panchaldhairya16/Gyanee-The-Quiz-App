"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Mail, Lock, User, ArrowRight, Zap } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setLoading(true);
    const ok = await signup(name, email, password);
    setLoading(false);
    if (ok) router.push("/dashboard");
    else setError("Sign up failed. Please try again.");
  };

  const fields = [
    { label: "Full Name", value: name, set: setName, type: "text", placeholder: "Priya Sharma", icon: User },
    { label: "Email", value: email, set: setEmail, type: "email", placeholder: "you@example.com", icon: Mail },
    { label: "Password", value: password, set: setPassword, type: "password", placeholder: "Min. 6 characters", icon: Lock },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 600, background: "radial-gradient(circle, rgba(124,109,250,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

      <div className="fade-up" style={{ width: "100%", maxWidth: 420, opacity: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 36 }}>
          <div style={{ background: "linear-gradient(135deg, var(--accent), #9b59f5)", borderRadius: 12, width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={22} color="#fff" fill="#fff" />
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em" }}>
            Quiz<span style={{ color: "var(--accent)" }}>Ora</span>
          </span>
        </div>

        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "36px 32px" }}>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: 24, fontWeight: 700, margin: "0 0 6px" }}>Create account</h1>
          <p style={{ color: "var(--text2)", fontSize: 14, margin: "0 0 28px" }}>Start your knowledge journey today</p>

          {error && (
            <div style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", borderRadius: 10, padding: "12px 16px", color: "var(--red)", fontSize: 13, marginBottom: 20 }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {fields.map(({ label, value, set, type, placeholder, icon: Icon }) => (
              <div key={label}>
                <label style={{ fontSize: 12, color: "var(--text2)", fontWeight: 500, display: "block", marginBottom: 6 }}>{label}</label>
                <div style={{ position: "relative" }}>
                  <Icon size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text3)" }} />
                  <input type={type} value={value} onChange={e => set(e.target.value)} required placeholder={placeholder}
                    style={{ width: "100%", background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: "12px 14px 12px 40px", color: "var(--text)", fontSize: 14, outline: "none" }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              </div>
            ))}

            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8, padding: "14px" }}>
              {loading ? <span className="spinner" style={{ width: 16, height: 16, border: "2px solid #fff4", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block" }} /> : <><span>Create Account</span><ArrowRight size={16} /></>}
            </button>
          </form>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "var(--text2)" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "var(--accent2)", fontWeight: 500, textDecoration: "none" }}>Sign in →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
