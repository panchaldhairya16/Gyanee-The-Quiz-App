"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import QuizCard from "@/components/QuizCard";
import { ProgressChart, CategoryChart } from "@/components/Chart";
import { CATEGORIES, DASHBOARD_STATS } from "@/lib/mockData";
import { TrendingUp, Target, Zap, Award, Flame } from "lucide-react";

const stats = DASHBOARD_STATS;

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { if (!loading && !user) router.replace("/login"); }, [user, loading, router]);

  if (loading || !mounted) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
      <div className="spinner" style={{ width: 32, height: 32, border: "3px solid var(--border2)", borderTopColor: "var(--accent)", borderRadius: "50%" }} />
    </div>
  );
  if (!user) return null;

  const statCards = [
    { label: "Quizzes Taken", value: stats.totalAttempted, icon: Target, color: "var(--accent)", suffix: "" },
    { label: "Average Score", value: stats.averageScore, icon: TrendingUp, color: "var(--cyan)", suffix: "%" },
    { label: "Day Streak", value: stats.streak, icon: Flame, color: "var(--yellow)", suffix: "🔥" },
    { label: "Best Category", value: stats.bestCategory, icon: Award, color: "var(--green)", suffix: "", text: true },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px" }}>

        {/* Header */}
        <div className="fade-up" style={{ opacity: 0, marginBottom: 36 }}>
          <p style={{ color: "var(--text3)", fontSize: 13, margin: "0 0 6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Dashboard</p>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, margin: 0 }}>
            Welcome back, <span style={{ color: "var(--accent)" }}>{user.name.split(" ")[0]}</span> 👋
          </h1>
          <p style={{ color: "var(--text2)", margin: "8px 0 0", fontSize: 15 }}>
            {stats.totalCorrect} correct answers out of {stats.totalQuestions} total — keep it up!
          </p>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 36 }}>
          {statCards.map(({ label, value, icon: Icon, color, suffix, text }, i) => (
            <div key={label} className="fade-up" style={{ opacity: 0, animationDelay: `${i * 60}ms`, background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <p style={{ fontSize: 12, color: "var(--text3)", margin: 0, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color={color} />
                </div>
              </div>
              <p style={{ fontFamily: "Syne, sans-serif", fontSize: text ? 18 : 28, fontWeight: 800, margin: 0, color: "var(--text)" }}>
                {value}{suffix}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginBottom: 36 }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 24 }}>
            <div style={{ marginBottom: 16 }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>Score Trend</h3>
              <p style={{ color: "var(--text3)", fontSize: 12, margin: 0 }}>Your progress over the last 6 months</p>
            </div>
            <ProgressChart data={stats.monthlyData} />
          </div>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: 24 }}>
            <div style={{ marginBottom: 16 }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, margin: "0 0 4px" }}>Category Scores</h3>
              <p style={{ color: "var(--text3)", fontSize: 12, margin: 0 }}>Average % score per category</p>
            </div>
            <CategoryChart data={stats.categoryPerformance} />
          </div>
        </div>

        {/* Quiz categories */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <Zap size={18} color="var(--accent)" />
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, margin: 0 }}>Start a Quiz</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
            {CATEGORIES.map((cat, i) => <QuizCard key={cat.id} {...cat} index={i} />)}
          </div>
        </div>
      </main>
    </div>
  );
}
