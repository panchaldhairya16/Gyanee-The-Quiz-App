"use client";
import { Question } from "@/lib/mockData";
import { Check } from "lucide-react";

type Props = {
  question: Question;
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
  questionNumber: number;
  total: number;
};

const OPTIONS = ["A", "B", "C", "D"] as const;
const OPTION_KEYS: Record<string, keyof Question> = {
  A: "option_a", B: "option_b", C: "option_c", D: "option_d",
};

export default function QuestionCard({ question, selectedAnswer, onSelect, questionNumber, total }: Props) {
  return (
    <div className="fade-up" style={{ opacity: 0 }}>
      {/* Question header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 12, color: "var(--text3)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Question {questionNumber} of {total}
          </span>
        </div>
        <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 700, lineHeight: 1.4, color: "var(--text)", margin: 0 }}>
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div style={{ display: "grid", gap: 10 }}>
        {OPTIONS.map((opt) => {
          const isSelected = selectedAnswer === opt;
          return (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              style={{
                display: "flex", alignItems: "center", gap: 14, width: "100%",
                padding: "14px 18px", borderRadius: "var(--radius-sm)", cursor: "pointer",
                background: isSelected ? "rgba(124,109,250,0.15)" : "var(--bg3)",
                border: `1.5px solid ${isSelected ? "var(--accent)" : "var(--border)"}`,
                color: isSelected ? "var(--accent2)" : "var(--text)",
                textAlign: "left", transition: "all 0.15s",
                boxShadow: isSelected ? "0 0 0 1px var(--accent), 0 4px 20px var(--accent-glow)" : "none",
              }}
              onMouseOver={e => { if (!isSelected) { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLButtonElement).style.background = "var(--card2)"; } }}
              onMouseOut={e => { if (!isSelected) { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLButtonElement).style.background = "var(--bg3)"; } }}
            >
              {/* Option label bubble */}
              <div style={{ width: 32, height: 32, borderRadius: 8, background: isSelected ? "var(--accent)" : "var(--card2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, fontFamily: "Syne, sans-serif", color: isSelected ? "#fff" : "var(--text2)", flexShrink: 0, transition: "all 0.15s" }}>
                {isSelected ? <Check size={14} /> : opt}
              </div>
              <span style={{ fontSize: 15, fontWeight: isSelected ? 500 : 400, flex: 1 }}>
                {question[OPTION_KEYS[opt]] as string}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
