# 🌸 Sunny Desk — A Homework & Life-Balance Study Companion

Sunny Desk is a warm, human-feeling web application designed to help students balance homework, tuition sessions, and self-care alongside their virtual companion, **Sasha**.

---

## ✨ Key Features

- **Virtual Study Buddy (Sasha):** Warm, supportive companion who offers encouragement, gentle reminders, study break breathing exercises, and outfits you can unlock with earned Petals.
- **Secure Authentication & True Per-User Isolation:**
  - Email & Password sign-up and sign-in.
  - "Continue with Google" OAuth support.
  - Dual-mode database architecture: Works with real Supabase Cloud (with Row Level Security) **or** offline in local-first multi-account mode with complete isolation.
  - Persistent login sessions.
- **Calm, Paced Homework Desk:**
  - Add assignments with estimated minutes, priority, notes, and step-by-step subtasks.
  - Sasha subtask auto-splitter ("Sasha, split this up into bite-sized steps").
  - Flower-blooming completion checkboxes and petal confetti.
  - "Overwhelmed?" reset tool that picks 3 must-dos and parks the rest without guilt.
- **Tuition & School Timetable Planner:**
  - School hours, tuition sessions, study blocks, and protected calm time.
  - Pacing alerts when tuition days are overloaded.
- **Gentle Daily Habit Tracker:**
  - 1-tap addition from suggested rituals (water, stretching, fresh air, wind-down).
  - Custom habits, weekly consistency heatmap, and zero-shame streaks.
  - Daily heartwarming reflection journal ("One Good Thing Today").
- **Cozy Focus Room:**
  - Pomodoro study timer with Sasha studying beside you.
  - Built-in ambient soundscapes (lo-fi drone, gentle rain, cafe murmurs).
- **Blooming Garden & Wardrobe:**
  - Dynamic achievement badges earned through real milestones.
  - Sasha wardrobe unlocks (cozy cardigan, wireframe study glasses, winter scarf, sage hoodie, graduation cap).

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
- Node.js 18+ (tested with Node 20 / 22 / 24)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Copy the example environment file:
```bash
cp .env.example .env
```

> **Note on Dual-Mode:** If you don't provide Supabase credentials, Sunny Desk will automatically run using its local per-user storage engine with full multi-account isolation. You can sign up, log in, switch accounts, and test immediately without any cloud configuration!

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The production bundle will be output to the `dist/` directory.

---

## 🗄️ Setting Up Supabase Cloud (Production)

If you wish to deploy with a hosted Supabase PostgreSQL backend:

1. Create a free project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase project dashboard.
3. Open `supabase/schema.sql` from this repository, paste its contents into the SQL Editor, and click **Run**.
   - This creates all 11 tables (`profiles`, `subjects`, `assignments`, `subtasks`, `timetable_events`, `habits`, `habit_logs`, `mood_checkins`, `journal_entries`, `focus_sessions`, `user_badges`).
   - Configures automatic user profile creation on signup via database trigger.
   - Enforces **Row Level Security (RLS)** so users can only ever read and write their own data.
4. Go to **Project Settings > API** in your Supabase dashboard and copy your Project URL and Anon Public Key.
5. In your `.env` file (or host environment variables):
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-actual-anon-key
   ```
6. Optional: To enable Google Sign-In with Supabase, go to **Authentication > Providers > Google** and supply your Google OAuth credentials.

---

## 🛡️ Security & Privacy

- Passwords are never stored in plain text.
- All database tables enforce Row Level Security (`auth.uid() = user_id`).
- Secrets and keys live in environment variables and are never hardcoded.
- Account export (full JSON export) and Account Deletion (with complete cascade purge) are accessible anytime from **Settings & Profile**.

---

## 🌸 Warm Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion
- **Icons & Audio:** Lucide React, Web Audio API ambient sound generator
- **Backend/DB:** Supabase JS client (`@supabase/supabase-js`) + PostgreSQL RLS / Local isolated engine
- **Typography:** Nunito, Fredoka, Patrick Hand / Caveat
