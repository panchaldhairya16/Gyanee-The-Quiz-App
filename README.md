<div align="center">

<br/>

```
   ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗███████╗███████╗
  ██╔════╝ ╚██╗ ██╔╝██╔══██╗████╗  ██║██╔════╝██╔════╝
  ██║  ███╗ ╚████╔╝ ███████║██╔██╗ ██║█████╗  █████╗
  ██║   ██║  ╚██╔╝  ██╔══██║██║╚██╗██║██╔══╝  ██╔══╝
  ╚██████╔╝   ██║   ██║  ██║██║ ╚████║███████╗███████╗
   ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
```

# Gyanee — The Quiz App

**ज्ञानी** *(Gyānī)* — Hindi/Gujarati for *"the knowledgeable one"*

A sleek, modern general-knowledge quiz platform built with **Next.js 16** and **TypeScript**. Test your knowledge, track your progress, and compete on the leaderboard.

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](./LICENSE)

<br/>

</div>

---

## ✨ Features

- 🧠 **Multiple Quiz Categories** — Science, History, Sports, Geography, Tech & more
- ⏱️ **Live Countdown Timer** — Color-coded urgency (green → yellow → red) with pause support
- 📊 **Performance Dashboard** — Score trend charts, category breakdowns, streaks & stats
- 🏆 **Leaderboard** — Podium view for top 3, full ranked table with accuracy & score
- 📝 **Answer Review** — Per-question breakdown with correct answers and explanations
- 🔐 **Auth System** — Login / Signup with persistent session management
- 🌙 **Dark-first UI** — Purple-accented design with smooth `fade-up` animations
- 📱 **Responsive** — Mobile-friendly layout using CSS Grid & `clamp()` typography

---

## 🖼️ App Structure

```
Gyanee-The-Quiz-App/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/         # POST /api/auth/login
│   │   │   └── signup/        # POST /api/auth/signup
│   │   ├── categories/        # GET quiz categories
│   │   ├── questions/         # GET questions by category
│   │   ├── results/           # GET user results history
│   │   └── submit-quiz/       # POST submit quiz answers
│   ├── dashboard/             # Home screen with stats & quiz cards
│   ├── quiz/[categoryId]/     # Active quiz page (timed, per-category)
│   ├── result/                # Score ring, answer review, retry
│   ├── leaderboard/           # Global rankings + podium view
│   ├── login/                 # Login form
│   ├── signup/                # Sign-up form
│   ├── globals.css            # CSS variables, animations, design tokens
│   └── layout.tsx             # Root layout with Auth + Quiz providers
│
├── components/
│   ├── Chart.tsx              # Recharts — Score trend & category bar charts
│   ├── Navbar.tsx             # Top navigation with user avatar & logout
│   ├── QuestionCard.tsx       # Single question with A/B/C/D options
│   ├── QuizCard.tsx           # Category card on dashboard
│   └── Timer.tsx              # Countdown bar + clock display
│
├── context/
│   ├── AuthContext.tsx        # Global user session state management
│   └── QuizContext.tsx        # Active quiz result passed to result page
│
└── lib/
    └── mockData.ts            # Seed data: categories, questions, leaderboard
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** / **yarn** / **pnpm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/panchaldhairya16/Gyanee-The-Quiz-App.git
cd Gyanee-The-Quiz-App

# 2. Install dependencies
npm install
```

### Running the App

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build
npm run start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/dashboard` automatically.

---

## 🎮 How It Works

```
[Sign Up / Log In]
        ↓
[Dashboard] — View stats, charts, streaks
        ↓
[Pick a Category] — Science, History, Tech, etc.
        ↓
[Quiz Page] — Answer 10 questions with a live timer
        ↓
[Result Page] — Score ring, grade, time taken, answer review
        ↓
[Leaderboard] — See where you rank globally
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **UI / Styling** | Tailwind CSS v4 + Custom CSS variables |
| **Icons** | Lucide React |
| **Charts** | Recharts |
| **Fonts** | Syne (headings) · DM Sans (body) |
| **State** | React Context API (AuthContext, QuizContext) |

---

## 🎨 Design System

The UI uses a dark, purple-accented design built on CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0a0a0f` | Page background |
| `--card` | `#16161e` | Card surfaces |
| `--accent` | `#7c6dfa` | Primary purple |
| `--green` | `#34d399` | Correct / high score |
| `--yellow` | `#fbbf24` | Medium score / warning |
| `--red` | `#f87171` | Wrong / urgent timer |
| `--cyan` | `#22d3ee` | Time / info |

Animations: `fade-up` (entrance), `pulse-glow` (urgent timer), smooth hover transforms.

---

## 📡 API Routes

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Authenticate an existing user |
| `POST` | `/api/auth/signup` | Register a new user |
| `GET` | `/api/categories` | List all quiz categories |
| `GET` | `/api/questions` | Fetch questions for a category |
| `POST` | `/api/submit-quiz` | Submit answers and calculate score |
| `GET` | `/api/results` | Retrieve user's quiz history |

---

## 🗺️ Roadmap

- [ ] More quiz categories (Movies, Music, Science)
- [ ] Difficulty levels (Easy / Medium / Hard)
- [ ] Timed challenge / speed mode
- [ ] Social sharing of results
- [ ] PWA support for offline play
- [ ] Admin panel to add custom questions

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

```bash
# 1. Fork the repo and create your branch
git checkout -b feature/your-feature-name

# 2. Make your changes and commit
git commit -m "feat: add your feature"

# 3. Push and open a Pull Request
git push origin feature/your-feature-name
```

Please make sure your code passes `npm run lint` before opening a PR.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute.

---

<div align="center">

Made with 💜 by [Dhairya Panchal](https://github.com/panchaldhairya16)

*ज्ञान ही शक्ति है — Knowledge is power.*

</div>
