import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { QuizProvider } from "@/context/QuizContext";

export const metadata: Metadata = {
  title: "Gyanee — Test Your Knowledge",
  description: "A modern general knowledge quiz platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <QuizProvider>
            {children}
          </QuizProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
