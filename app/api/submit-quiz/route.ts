import { NextRequest, NextResponse } from "next/server";
import { QUESTIONS } from "@/lib/mockData";

// POST /api/submit-quiz
// Supabase:
//   await supabase.from('attempts').insert({ user_id, category_id, score })
//   await supabase.from('answers').insert(answersArray)
export async function POST(req: NextRequest) {
  const { userId, categoryId, answers, timeTaken } = await req.json();

  const questions = QUESTIONS[categoryId];
  if (!questions) return NextResponse.json({ error: "Invalid category" }, { status: 400 });

  // Grade the answers
  let score = 0;
  const detailed = questions.map((q) => {
    const selected = answers[q.id] || null;
    const isCorrect = selected === q.correct_answer;
    if (isCorrect) score++;
    return { questionId: q.id, selected, correct: q.correct_answer, isCorrect };
  });

  const attempt = {
    id: `attempt_${Date.now()}`,
    user_id: userId,
    category_id: categoryId,
    score,
    total: questions.length,
    percentage: Math.round((score / questions.length) * 100),
    timeTaken,
    created_at: new Date().toISOString(),
    detailed,
  };

  return NextResponse.json({ attempt });
}
