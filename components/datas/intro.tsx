import Bold from "../bold";
import TechCard from "../tech-badge";

const FOCUS_SKILL = [
  "Automation & Tooling",
  "Web Development",
  "Data Ops",
  "Customer Support",
  "Problem Solving",
  "AI-Assisted Development",
];

export const Intro = {
  Sub: () => (
    <div className="text-sm text-muted-foreground font-mono tracking-wider">
      Digital Operations & Tools Developer
    </div>
  ),

  Name: () => (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight">
      Aditya <span className="max-sm:hidden">👋</span>
    </h1>
  ),

  About: () => (
    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
      Saya membuat tools dan automation yang membantu pekerjaan menjadi lebih
      cepat, efisien, dan mengurangi pekerjaan manual. Beberapa tools yang saya
      buat digunakan oleh tim dan berhasil mengurangi hingga{" "}
      <Bold>90% pekerjaan manual</Bold> yang berulang.
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
      <div className="text-foreground">Mencari Peluang Baru</div>
      <div className="text-xs text-muted-foreground">
        Full-time · Remote
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

// new
