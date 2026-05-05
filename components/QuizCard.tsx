"use client";
import { useRouter } from "next/navigation";
import { Clock, HelpCircle, BarChart2, ArrowRight } from "lucide-react";

type Props = {
  id: number;
  name: string;
  icon: string;
  color: string;
  description: string;
  questionCount: number;
  difficulty: string;
  index: number;
};

export default function QuizCard({ id, name, icon, color, description, questionCount, difficulty, index }: Props) {
  const router = useRouter();

  const difficultyColor = difficulty === "Easy" ? "var(--green)" : difficulty === "Hard" ? "var(--red)" : difficulty === "Medium" ? "var(--yellow)" : "var(--accent)";

  return (
    <div
      className="fade-up"
      style={{ animationDelay: `${index * 80}ms`, opacity: 0 }}
      onClick={() => router.push(`/quiz/${id}`)}
    >
      <div
        style={{
          background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius)",
          padding: 24, cursor: "pointer", transition: "all 0.25s", position: "relative", overflow: "hidden",
        }}
        onMouseOver={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = `${color}50`;
          el.style.transform = "translateY(-3px)";
          el.style.boxShadow = `0 12px 40px ${color}20`;
        }}
        onMouseOut={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--border)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Gradient accent top bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, ${color}80)`, borderRadius: "var(--radius) var(--radius) 0 0" }} />

        {/* Icon */}
        <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>
          {icon}
        </div>

        <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 17, margin: "0 0 6px", color: "var(--text)" }}>{name}</h3>
        <p style={{ fontSize: 13, color: "var(--text2)", margin: "0 0 20px", lineHeight: 1.5 }}>{description}</p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 14 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text3)" }}>
              <HelpCircle size={12} /> {questionCount} Qs
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text3)" }}>
              <Clock size={12} /> 5 min
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: difficultyColor }}>
              <BarChart2 size={12} /> {difficulty}
            </span>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ArrowRight size={13} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
}
