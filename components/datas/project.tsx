import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Heading3 from "../heading-3";
import TechBadge from "../tech-badge";

export const PROJECT_LIST = [
  {
    name: "Mayochat · Take Order",
    description:
      "Platform template chat yang membantu tim customer service merespons lebih cepat dan konsisten. Dibuat karena frustrasi dengan copy-paste manual — sekarang dipakai seluruh tim setiap hari.",
    imageUrl: "/projects/mayochatsz.png",
    liveUrl: "https://mayochat.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayo-tools",
    tech: ["Next.js", "Roblox API", "Supabase", "PostgreSQL", "Tailwind CSS"],
    badge: "Dipakai tim setiap hari",
  },
  {
    name: "Mayo Chart · Sales Dashboard",
    description:
      "Dashboard rekap penjualan & performa admin yang mengagregasi data dari 3 Google Spreadsheet ke dalam satu visualisasi interaktif. Menggantikan recap manual yang sebelumnya memakan waktu.",
    imageUrl: "/projects/mayochart.png",
    liveUrl:
      "https://script.google.com/macros/s/AKfycbypBvGxHYkmxz--KsGJfOEjwwb2ssf2_Df4YBxbaoGISuBoArO_4ABfAgKQBvEA1s97/exec",
    githubUrl: "https://github.com/cuakproject/mayo-chart",
    tech: ["Google Apps Script", "Chart.js", "HTML", "JavaScript"],
    badge: "Menggantikan recap manual",
  },
  {
    name: "SigMacro · Automation Tool",
    description:
      "Tools AutoHotkey v2 dengan GUI untuk mengotomatisasi alur login dan manajemen backup code operasional. Dilengkapi humanized mouse movement dan logging sesi.",
    imageUrl: "/projects/sigmacro.png",
    githubUrl: "https://github.com/cuakproject/SigMacro",
    tech: ["AutoHotkey v2", "Image Recognition", "INI Config"],
    badge: "Otomatisasi desktop",
  },
  {
    name: "Mayopass · Admin Tools",
    description:
      "Kalkulator harga Roblox Gamepass berbasis web yang mengotomatisasi perhitungan pricing. Admin tidak perlu lagi hitung manual — hasil instan, akurat, tanpa error.",
    imageUrl: "/projects/mayopass.png",
    liveUrl: "https://mayopass.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayopass",
    tech: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    badge: "Eliminasi kalkulasi manual",
  },
  {
    name: "SigmaDOTS · Chrome Extension",
    description:
      "Ekstensi browser yang mengotomatisasi workflow repetitif di Roblox dan Google Sheets. Dilengkapi sistem lisensi berbasis Cloudflare Workers.",
    imageUrl: "/projects/sigmadots.png",
    githubUrl: "https://github.com/cuakproject/sigmadots-full",
    tech: [
      "JavaScript",
      "Chrome Extension API",
      "Google Apps Script",
      "Cloudflare Workers",
    ],
    badge: "Sistem lisensi built-in",
  },
];

export const Project = {
  Card: ({ item }: { item: (typeof PROJECT_LIST)[number] }) => (
    <article
      className={cn(
        "group py-6 sm:py-8 transition-colors duration-300",
        "border-b border-border",
        "grid grid-cols-1 gap-4 sm:gap-6",
        "lg:grid-cols-12 lg:gap-8"
      )}
    >
      {/* Image — col 3 */}
      <div className="lg:col-span-3 w-full">
        <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-sm overflow-hidden bg-muted">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Info + tech stack — col 9, teks melebar sampai ujung kanan */}
      <div className="lg:col-span-9 space-y-3">

        {/* Baris atas: nama+badge+links kiri, tech stack kanan */}
        <div className="flex items-start justify-between gap-4">
          <header className="space-y-2 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Heading3>{item.name}</Heading3>
              {item.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground font-mono shrink-0">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>Source</span>
                </a>
              )}
            </div>
          </header>

          {/* Tech stack — desktop only, tetap di kanan atas */}
          <div className="hidden lg:flex flex-wrap gap-2 justify-end shrink-0 max-w-[260px]">
            {item.tech.map((tech) => (
              <TechBadge tech={tech} key={tech} />
            ))}
          </div>
        </div>

        {/* Deskripsi — melebar full sampai ujung kanan (sejajar tech stack) */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Tech stack — mobile only, di bawah deskripsi */}
        <div className="flex lg:hidden flex-wrap gap-2">
          {item.tech.map((tech) => (
            <TechBadge tech={tech} key={tech} />
          ))}
        </div>
      </div>
    </article>
  ),
};
