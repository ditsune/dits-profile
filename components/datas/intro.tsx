import Bold from "../bold";
import TechCard from "../tech-badge";

const FOCUS_SKILL = [
  "Automation & Tooling",
  "JavaScript / Node.js",
  "Next.js + Supabase",
  "Google Apps Script",
  "Problem Solving",
  "AI-Assisted Development",
];

export const Intro = {
  Sub: () => (
    <div className="text-sm text-muted-foreground font-mono tracking-wider">
      Automation & Tools Developer
    </div>
  ),

  Name: () => (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight">
      Aditya <span className="max-sm:hidden">👋</span>
    </h1>
  ),

  About: () => (
    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
      Saya membangun tools yang menghilangkan kerjaan manual — automation
      desktop, dashboard analytics, Chrome extension, sampai pipeline yang
      berjalan otomatis di background. Semuanya lahir dari masalah operasional
      yang saya temui langsung.
      <br />
      <br />
      Tools-tools itu dipakai aktif oleh <Bold>8+ orang setiap shift</Bold> dan
      memangkas <Bold>90% kerja manual tim</Bold>.
      <br />
      <br />
      Sekarang saya mencari peran yang bisa memakai dan mengasah kemampuan itu lebih
      jauh.
    </p>
  ),

  Status: () => (
    <div className="flex flex-row items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        Terbuka untuk peluang baru
      </div>
      <div className="flex items-center gap-1">
        <span>📍</span>Indonesia
      </div>
    </div>
  ),

  CurrentJob: () => (
    <div className="space-y-2">
      <div className="text-foreground">Admin Operasional · Mayoblox</div>
      <div className="text-xs text-muted-foreground">
        Sep 2025 – Sekarang · Roblox Digital Top-Up Store
      </div>
    </div>
  ),

  Focus: () => (
    <div className="flex flex-wrap gap-2">
      {FOCUS_SKILL.map((skill) => (
        <TechCard tech={skill} key={skill} />
      ))}
    </div>
  ),
};
