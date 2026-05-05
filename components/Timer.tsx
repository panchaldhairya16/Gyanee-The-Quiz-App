"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type Props = {
  duration: number; // seconds
  onEnd: () => void;
  paused?: boolean;
};

export default function Timer({ duration, onEnd, paused = false }: Props) {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    setRemaining(duration);
  }, [duration]);

  useEffect(() => {
    if (paused) return;
    if (remaining <= 0) { onEnd(); return; }
    const id = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(id);
  }, [remaining, paused, onEnd]);

  const pct = (remaining / duration) * 100;
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const isUrgent = remaining <= 30;
  const color = isUrgent ? "var(--red)" : pct > 50 ? "var(--green)" : "var(--yellow)";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {/* Progress bar */}
      <div style={{ flex: 1, height: 6, background: "var(--bg3)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 3, transition: "width 1s linear, background 0.3s" }} />
      </div>

      {/* Time display */}
      <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 15, color, minWidth: 60 }}
        className={isUrgent ? "pulse-glow" : ""}>
        <Clock size={14} />
        {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
      </div>
    </div>
  );
}
