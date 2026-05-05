"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useQuiz } from "@/context/QuizContext";
import Navbar from "@/components/Navbar";
import { CheckCircle, XCircle, RotateCcw, Home, Clock, Trophy } from "lucide-react";
import { Question } from "@/lib/mockData";

const OPTION_KEYS: Record<string, keyof Question> = {
  A: "option_a", B: "option_b", C: "option_c", D: "option_d",
};

function ScoreRing({ score, total }: { score: number; total: number }) {
  const pct = total > 0 ? score / total : 0;
  const r = 60, cx = 70, cy = 70;
  const circumference = 2 * Math.PI * r;
  const strokeDash = circumference * pct;
  const color = pct >= 0.8 ? "var(--green)" : pct >= 0.5 ? "var(--yellow)" : "var(--red)";

  return (
    <svg width={140} height={140} viewBox="0 0 140 140">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--bg3)" strokeWidth={10} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={10}
        strokeDasharray={`${strokeDash} ${circumference}`}
        strokeLinecap="round" transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: "stroke-dasharray 1s ease" }} />
      <text x={cx} y={cy - 8} textAnchor="middle" style={{ fontFamily: "Syne, sans-serif", fill: "var(--text)", fontSize: 28, fontWeight: 800 }}>{score}</text>
      <text x={cx} y={cy + 14} textAnchor="middle" style={{ fontFamily: "DM Sans, sans-serif", fill: "var(--text3)", fontSize: 12 }}>of {total}</text>
    </svg>
  );
}

export default function ResultPage() {
  const { user, loading } = useAuth();
  const { activeResult, setActiveResult } = useQuiz();
  const router = useRouter();

  useEffect(() => { if (!loading && !user) router.replace("/login"); }, [user, loading, router]);
  useEffect(() => { if (!loading && user && !activeResult) router.replace("/dashboard"); }, [activeResult, user, loading, router]);

  if (loading || !user || !activeResult) return null;

  const { questions, answers, score, categoryName, categoryId, timeTaken } = activeResult;
  const pct = Math.round((score / questions.length) * 100);
  const grade = pct >= 80 ? { label: "Excellent!", color: "var(--green)" } : pct >= 60 ? { label: "Good Job!", color: "var(--yellow)" } : { label: "Keep Practicing", color: "var(--red)" };
  const mins = Math.floor(timeTaken / 60), secs = timeTaken % 60;

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "32px 20px" }}>

        {/* Score card */}
        <div className="fade-up" style={{ opacity: 0, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 36, textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <ScoreRing score={score} total={questions.length} />
          </div>
          <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: 28, fontWeight: 800, margin: "0 0 6px", color: grade.color }}>{grade.label}</h1>
          <p style={{ color: "var(--text2)", margin: "0 0 24px", fontSize: 15 }}>You scored <strong style={{ color: "var(--text)" }}>{pct}%</strong> in <strong style={{ color: "var(--text)" }}>{categoryName}</strong></p>

          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
            {[
              { label: "Correct", value: score, icon: CheckCircle, color: "var(--green)" },
              { label: "Wrong", value: questions.length - score, icon: XCircle, color: "var(--red)" },
              { label: "Time Taken", value: `${mins}m ${secs}s`, icon: Clock, color: "var(--cyan)" },
              { label: "Score", value: `${pct}%`, icon: Trophy, color: "var(--yellow)" },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} style={{ background: "var(--bg2)", borderRadius: 12, padding: "14px 20px", minWidth: 100 }}>
                <Icon size={18} color={color} style={{ display: "block", margin: "0 auto 6px" }} />
                <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, margin: "0 0 2px", color }}>{value}</p>
                <p style={{ fontSize: 11, color: "var(--text3)", margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => { setActiveResult(null); router.push(`/quiz/${categoryId}`); }} className="btn-primary" style={{ padding: "12px 24px", fontSize: 14 }}>
              <RotateCcw size={15} /> Retry Quiz
            </button>
            <button onClick={() => { setActiveResult(null); router.push("/dashboard"); }}
              style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 10, padding: "12px 24px", color: "var(--text)", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", gap: 7 }}>
              <Home size={15} /> Dashboard
            </button>
          </div>
        </div>

        {/* Answer review */}
        <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>Answer Review</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {questions.map((q, i) => {
            const selected = answers[q.id] || null;
            const isCorrect = selected === q.correct_answer;
            return (
              <div key={q.id} className="fade-up" style={{ opacity: 0, animationDelay: `${i * 40}ms`, background: "var(--card)", border: `1px solid ${isCorrect ? "rgba(52,211,153,0.2)" : selected ? "rgba(248,113,113,0.2)" : "var(--border)"}`, borderRadius: 14, padding: 20 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: isCorrect ? "rgba(52,211,153,0.15)" : selected ? "rgba(248,113,113,0.15)" : "var(--bg3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {isCorrect ? <CheckCircle size={14} color="var(--green)" /> : selected ? <XCircle size={14} color="var(--red)" /> : <span style={{ fontSize: 10, color: "var(--text3)" }}>—</span>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, margin: "0 0 10px", fontSize: 14 }}>Q{i + 1}. {q.question}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                      {(["A","B","C","D"] as const).map((opt) => {
                        const val = q[OPTION_KEYS[opt]] as string;
                        const isCorrectOpt = opt === q.correct_answer;
                        const isSelectedOpt = opt === selected;
                        return (
                          <span key={opt} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 20, background: isCorrectOpt ? "rgba(52,211,153,0.15)" : isSelectedOpt && !isCorrect ? "rgba(248,113,113,0.15)" : "var(--bg3)", color: isCorrectOpt ? "var(--green)" : isSelectedOpt && !isCorrect ? "var(--red)" : "var(--text3)", border: `1px solid ${isCorrectOpt ? "rgba(52,211,153,0.3)" : isSelectedOpt && !isCorrect ? "rgba(248,113,113,0.3)" : "var(--border)"}` }}>
                            <strong>{opt}.</strong> {val}
                          </span>
                        );
                      })}
                    </div>
                    {!selected && <p style={{ fontSize: 12, color: "var(--text3)", margin: "0 0 6px" }}>⚠️ Not answered — Correct: <strong style={{ color: "var(--green)" }}>{q.correct_answer}</strong></p>}
                    <p style={{ fontSize: 12, color: "var(--text2)", margin: 0, fontStyle: "italic" }}>💡 {q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
