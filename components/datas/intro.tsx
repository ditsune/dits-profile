import Bold from "../bold";
import TechCard from "../tech-badge";

const FOCUS_SKILL = [
  "Customer Operations",
  "Google Sheets",
  "Problem Solving",
  "Automation",
  "AI-Assisted Productivity",
  "JavaScript",
];

export const Intro = {
  Sub: () => (
    <div className="text-sm text-muted-foreground font-mono tracking-wider">
      Admin Operasional & Customer Service
    </div>
  ),

  Name: () => (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight">
      Aditya <span className="max-sm:hidden">👋</span>
    </h1>
  ),

  About: () => (
    <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
      Saya menangani <Bold>200+ transaksi dan 300+ chat pelanggan</Bold> setiap
      hari di industri top-up game online — dengan fokus pada akurasi, kecepatan,
      dan konsistensi layanan.
      <br />
      <br />
      Karena tidak suka pekerjaan yang repetitif, saya membangun{" "}
      <Bold>tools internal sendiri</Bold> — mulai dari otomatisasi invoice,
      dashboard penjualan, hingga ekstensi browser — yang akhirnya dipakai
      seluruh tim dan diapreasiasi perusahaan.
      <br />
      <br />
      Saya bukan developer, tapi saya tahu cara{" "}
      <Bold>menemukan masalah nyata dan membangun solusi praktis</Bold> yang
      benar-benar digunakan.
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
