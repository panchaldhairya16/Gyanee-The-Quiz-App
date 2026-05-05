"use client";
// ============================================================
// QuizContext - Manages active quiz state
// ============================================================
import { createContext, useContext, useState, ReactNode } from "react";
import { Question } from "@/lib/mockData";

type QuizResult = {
  categoryId: number;
  categoryName: string;
  questions: Question[];
  answers: Record<number, string>;
  score: number;
  timeTaken: number;
};

type QuizCtx = {
  activeResult: QuizResult | null;
  setActiveResult: (r: QuizResult | null) => void;
};

const QuizContext = createContext<QuizCtx | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [activeResult, setActiveResult] = useState<QuizResult | null>(null);
  return (
    <QuizContext.Provider value={{ activeResult, setActiveResult }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be inside QuizProvider");
  return ctx;
};
