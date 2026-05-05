"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { LogOut, LayoutDashboard, Trophy, Zap } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => { logout(); router.push("/login"); };

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  return (
    <nav style={{ background: "rgba(10,10,15,0.85)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(20px)" }}
      className="sticky top-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 no-underline">
          <div style={{ background: "linear-gradient(135deg, var(--accent), #9b59f5)", borderRadius: 10, width: 34, height: 34 }}
            className="flex items-center justify-center">
            <Zap size={18} color="#fff" fill="#fff" />
          </div>
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: 20, color: "var(--text)", letterSpacing: "-0.03em" }}>
            Gyan<span style={{ color: "var(--accent)" }}>ee</span>
          </span>
        </Link>

        {/* Nav links */}
        {user && (
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href}
                style={{
                  padding: "8px 16px", borderRadius: 8, fontSize: 14, fontWeight: 500,
                  color: pathname.startsWith(href) ? "var(--accent2)" : "var(--text2)",
                  background: pathname.startsWith(href) ? "rgba(124,109,250,0.12)" : "transparent",
                  textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
                  transition: "all 0.15s",
                }}>
                <Icon size={15} />
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* User */}
        {user ? (
          <div className="flex items-center gap-3">
            <div style={{ background: "linear-gradient(135deg, var(--accent), #9b59f5)", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: "Syne, sans-serif" }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span style={{ fontSize: 14, color: "var(--text2)", display: "none" }} className="md:block">{user.name}</span>
            <button onClick={handleLogout}
              style={{ background: "transparent", border: "1px solid var(--border2)", borderRadius: 8, padding: "7px 14px", color: "var(--text2)", cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", gap: 6, transition: "all 0.15s" }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--red)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--red)"; }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.color = "var(--text2)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border2)"; }}>
              <LogOut size={14} /> Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" style={{ padding: "8px 18px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: "var(--text2)", textDecoration: "none", border: "1px solid var(--border2)", background: "transparent" }}>Log in</Link>
            <Link href="/signup" className="btn-primary" style={{ padding: "8px 18px", fontSize: 14, textDecoration: "none", borderRadius: 8 }}>Sign up</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
