"use client";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

type MonthlyData = { month: string; score: number; attempts: number };
type CategoryData = { category: string; score: number };

export function ProgressChart({ data }: { data: MonthlyData[] }) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: -25 }}>
        <defs>
          <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7c6dfa" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#7c6dfa" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" tick={{ fill: "#5a5a72", fontSize: 11, fontFamily: "DM Sans" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#5a5a72", fontSize: 11, fontFamily: "DM Sans" }} axisLine={false} tickLine={false} domain={[0, 100]} />
        <Tooltip
          contentStyle={{ background: "#16161e", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, fontFamily: "DM Sans", fontSize: 13 }}
          labelStyle={{ color: "#9090a8" }}
          itemStyle={{ color: "#9d8ffe" }}
        />
        <Area type="monotone" dataKey="score" stroke="#7c6dfa" strokeWidth={2} fill="url(#scoreGrad)" dot={{ fill: "#7c6dfa", r: 3 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function CategoryChart({ data }: { data: CategoryData[] }) {
  const COLORS = ["#7c6dfa", "#06b6d4", "#8b5cf6", "#f59e0b"];
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: -25 }}>
        <XAxis dataKey="category" tick={{ fill: "#5a5a72", fontSize: 10, fontFamily: "DM Sans" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#5a5a72", fontSize: 11, fontFamily: "DM Sans" }} axisLine={false} tickLine={false} domain={[0, 100]} />
        <Tooltip
          contentStyle={{ background: "#16161e", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, fontFamily: "DM Sans", fontSize: 13 }}
          labelStyle={{ color: "#9090a8" }}
          itemStyle={{ color: "#9d8ffe" }}
        />
        <Bar dataKey="score" radius={[6, 6, 0, 0]}>
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
