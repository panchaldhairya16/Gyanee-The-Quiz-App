"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { LEADERBOARD } from "@/lib/mockData";
import { Trophy, Medal, Target, Percent } from "lucide-react";

const RANK_STYLES: Record<number, { bg: string; color: string; label: string }> = {
  1: { bg: "rgba(251,191,36,0.15)",  color: "#fbbf24", label: "🥇" },
  2: { bg: "rgba(156,163,175,0.12)", color: "#9ca3af", label: "🥈" },
  3: { bg: "rgba(234,137,80,0.12)",  color: "#ea8950", label: "🥉" },
};

export default function LeaderboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => { if (!loading && !user) router.replace("/login"); }, [user, loading, router]);
  if (loading || !user) return null;

  const top3 = LEADERBOARD.slice(0, 3);
  const rest = LEADERBOARD.slice(3);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px" }}>

        {/* Header */}
        <div className="fade-up" style={{ opacity: 0, textAlign: "center", marginBottom: 40 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg, #fbbf24, #f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <Trophy size={26} color="#fff" />
          </div>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: 30, fontWeight: 800, margin: "0 0 8px" }}>Leaderboard</h1>
          <p style={{ color: "var(--text2)", fontSize: 15, margin: 0 }}>Top knowledge champions this month</p>
        </div>

        {/* Podium — top 3 */}
        <div className="fade-up" style={{ opacity: 0, animationDelay: "100ms", display: "flex", gap: 12, justifyContent: "center", marginBottom: 32, alignItems: "flex-end" }}>
          {[top3[1], top3[0], top3[2]].map((entry, i) => {
            const rank = [2, 1, 3][i];
            const height = [100, 130, 90][i];
            const style = RANK_STYLES[rank];
            return (
              <div key={rank} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: style.color, fontFamily: "Syne, sans-serif" }}>{entry.score} pts</span>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg, ${style.color}40, ${style.color}20)`, border: `2px solid ${style.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16, color: style.color }}>
                  {entry.avatar}
                </div>
                <span style={{ fontSize: 12, color: "var(--text2)", fontWeight: 500, textAlign: "center", maxWidth: 80 }}>{entry.name.split(" ")[0]}</span>
                <div style={{ width: 80, height, background: style.bg, border: `1px solid ${style.color}30`, borderRadius: "8px 8px 0 0", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 8 }}>
                  <span style={{ fontSize: 22 }}>{style.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full table */}
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "48px 1fr 80px 80px 72px", gap: 8, padding: "12px 20px", borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}>
            {["#", "Player", "Quizzes", "Accuracy", "Score"].map((h) => (
              <span key={h} style={{ fontSize: 11, color: "var(--text3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</span>
            ))}
          </div>

          {/* All rows */}
          {LEADERBOARD.map((entry, i) => {
            const rankStyle = RANK_STYLES[entry.rank];
            const isYou = entry.name === user.name;
            return (
              <div key={entry.rank} className="fade-up" style={{ opacity: 0, animationDelay: `${i * 40}ms`, display: "grid", gridTemplateColumns: "48px 1fr 80px 80px 72px", gap: 8, padding: "14px 20px", borderBottom: i < LEADERBOARD.length - 1 ? "1px solid var(--border)" : "none", background: isYou ? "rgba(124,109,250,0.07)" : "transparent", transition: "background 0.15s", alignItems: "center" }}
                onMouseOver={e => { if (!isYou) (e.currentTarget as HTMLElement).style.background = "var(--bg2)"; }}
                onMouseOut={e => { if (!isYou) (e.currentTarget as HTMLElement).style.background = "transparent"; }}>

                {/* Rank */}
                <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: rankStyle?.color || "var(--text3)" }}>
                  {rankStyle ? rankStyle.label : `#${entry.rank}`}
                </span>

                {/* Player */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: rankStyle ? `linear-gradient(135deg, ${rankStyle.color}30, ${rankStyle.color}10)` : "var(--bg3)", border: `1.5px solid ${rankStyle?.color || "var(--border)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, fontFamily: "Syne, sans-serif", color: rankStyle?.color || "var(--text2)", flexShrink: 0 }}>
                    {entry.avatar}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: isYou ? 600 : 400, color: isYou ? "var(--accent2)" : "var(--text)" }}>
                    {entry.name}{isYou && <span style={{ fontSize: 10, background: "var(--accent)", color: "#fff", borderRadius: 4, padding: "1px 6px", marginLeft: 6, fontFamily: "Syne", fontWeight: 600 }}>YOU</span>}
                  </span>
                </div>

                {/* Quizzes */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--text2)", fontSize: 13 }}>
                  <Target size={12} color="var(--text3)" /> {entry.quizzes}
                </div>

                {/* Accuracy */}
                <div style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--text2)", fontSize: 13 }}>
                  <Percent size={12} color="var(--text3)" /> {entry.accuracy}%
                </div>

                {/* Score */}
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Medal size={12} color={rankStyle?.color || "var(--text3)"} />
                  <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: rankStyle?.color || "var(--text)" }}>{entry.score}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
