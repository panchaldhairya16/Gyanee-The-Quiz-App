"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useQuiz } from "@/context/QuizContext";
import Navbar from "@/components/Navbar";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";
import { Question, CATEGORIES } from "@/lib/mockData";
import { ChevronLeft, ChevronRight, Send, AlertCircle } from "lucide-react";

const QUIZ_DURATION = 300; // 5 minutes in seconds

export default function QuizPage() {
  const params = useParams();
  const categoryId = parseInt(params.categoryId as string);
  const { user, loading } = useAuth();
  const { setActiveResult } = useQuiz();
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [fetchError, setFetchError] = useState("");
  const [timerKey, setTimerKey] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const category = CATEGORIES.find((c) => c.id === categoryId);

  useEffect(() => { if (!loading && !user) router.replace("/login"); }, [user, loading, router]);

  useEffect(() => {
    if (!categoryId) return;
    fetch(`/api/questions?categoryId=${categoryId}`)
      .then((r) => r.json())
      .then((d) => { if (d.questions) setQuestions(d.questions); else setFetchError("Could not load questions."); })
      .catch(() => setFetchError("Network error loading questions."));
  }, [categoryId]);

  const submitQuiz = useCallback(async (ans: Record<number, string>, taken: number) => {
    setSubmitting(true);
    const res = await fetch("/api/submit-quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user?.id, categoryId, answers: ans, timeTaken: taken }),
    });
    const data = await res.json();
    // Calculate score client-side for immediate result
    let score = 0;
    questions.forEach((q) => { if (ans[q.id] === q.correct_answer) score++; });
    setActiveResult({
      categoryId, categoryName: category?.name || "Quiz",
      questions, answers: ans, score,
      timeTaken: taken,
    });
    router.push("/result");
  }, [user, categoryId, questions, category, setActiveResult, router]);

  const handleTimerEnd = useCallback(() => {
    const taken = Math.round((Date.now() - startTime) / 1000);
    submitQuiz(answers, taken);
  }, [answers, startTime, submitQuiz]);

  const handleStart = () => {
    setQuizStarted(true);
    setTimerKey((k) => k + 1);
    setStartTime(Date.now());
  };

  const handleSubmit = async () => {
    const taken = Math.round((Date.now() - startTime) / 1000);
    await submitQuiz(answers, taken);
  };

  if (loading || !user) return null;

  const answered = Object.keys(answers).length;
  const progress = (answered / (questions.length || 1)) * 100;

  // ---- Start screen ----
  if (!quizStarted) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
        <Navbar />
        <div style={{ maxWidth: 560, margin: "60px auto", padding: "0 20px" }}>
          <div className="fade-up" style={{ opacity: 0, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 40, textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>{category?.icon}</div>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>{category?.name}</h1>
            <p style={{ color: "var(--text2)", fontSize: 14, margin: "0 0 32px" }}>{category?.description}</p>
            <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 32 }}>
              {[["Questions", questions.length || "—"], ["Time", "5 min"], ["Difficulty", category?.difficulty]].map(([k, v]) => (
                <div key={String(k)}>
                  <p style={{ color: "var(--text3)", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>{k}</p>
                  <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, margin: 0, color: "var(--accent)" }}>{v}</p>
                </div>
              ))}
            </div>
            {fetchError ? (
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--red)", fontSize: 13, justifyContent: "center" }}>
                <AlertCircle size={14} />{fetchError}
              </div>
            ) : (
              <button className="btn-primary pulse-glow" onClick={handleStart} disabled={questions.length === 0}
                style={{ fontSize: 15, padding: "14px 36px" }}>
                {questions.length === 0 ? "Loading..." : "Start Quiz →"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 20px" }}>

        {/* Top bar: category + timer */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={() => router.push("/dashboard")}
            style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 12px", color: "var(--text2)", cursor: "pointer", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
            <ChevronLeft size={14} /> Exit
          </button>
          <div style={{ flex: 1 }}>
            <Timer key={timerKey} duration={QUIZ_DURATION} onEnd={handleTimerEnd} />
          </div>
        </div>

        {/* Answer progress bar */}
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: 16, marginBottom: 16, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, height: 8, background: "var(--bg3)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, var(--accent), #9b59f5)", borderRadius: 4, transition: "width 0.3s" }} />
          </div>
          <span style={{ fontSize: 12, color: "var(--text3)", whiteSpace: "nowrap" }}>{answered}/{questions.length} answered</span>
        </div>

        {/* Question */}
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "28px 28px 24px" }}>
          {q && (
            <QuestionCard
              question={q}
              selectedAnswer={answers[q.id] || null}
              onSelect={(ans) => setAnswers((prev) => ({ ...prev, [q.id]: ans }))}
              questionNumber={current + 1}
              total={questions.length}
            />
          )}

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
            <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0}
              style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 18px", color: current === 0 ? "var(--text3)" : "var(--text)", cursor: current === 0 ? "default" : "pointer", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
              <ChevronLeft size={16} /> Prev
            </button>

            {/* Question dots */}
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", maxWidth: 260 }}>
              {questions.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  style={{ width: 22, height: 22, borderRadius: 6, cursor: "pointer", border: "none", fontSize: 10, fontWeight: 700,
                    background: i === current ? "var(--accent)" : answers[questions[i].id] ? "rgba(124,109,250,0.3)" : "var(--bg3)",
                    color: i === current ? "#fff" : answers[questions[i].id] ? "var(--accent2)" : "var(--text3)" }}>
                  {i + 1}
                </button>
              ))}
            </div>

            {current < questions.length - 1 ? (
              <button onClick={() => setCurrent((c) => c + 1)}
                style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 18px", color: "var(--text)", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={submitting} className="btn-primary"
                style={{ padding: "10px 20px", fontSize: 14 }}>
                {submitting ? "Submitting..." : <><Send size={14} /> Submit</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
