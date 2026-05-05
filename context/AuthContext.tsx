"use client";
// ============================================================
// AuthContext - Manages user session state globally
// Swap localStorage with Supabase auth when ready
// ============================================================
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = { id: string; name: string; email: string };
type AuthCtx = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore session from localStorage (replace with Supabase session check)
    const stored = localStorage.getItem("quizora_user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("quizora_user", JSON.stringify(data.user));
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("quizora_user", JSON.stringify(data.user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("quizora_user");
  };

  return <AuthContext.Provider value={{ user, login, signup, logout, loading }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
