import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Heading3 from "../heading-3";
import TechBadge from "../tech-badge";

export const PROJECT_LIST = [
  {
    slug: "mayochat",
    name: "Mayochat | Take Order Dashboard",
    description:
      "Dashboard internal untuk manajemen order — mencakup Take Order dengan lookup username otomatis, Invoice Generator, Template Manager untuk customer service, dan Reseller Tools. Memangkas 80% waktu proses manual yang sebelumnya dikerjakan terpisah-pisah.",
    imageUrl: "/projects/mayochatsz.png",
    liveUrl: "https://mayochat.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayo-tools",
    tech: ["JavaScript", "ES Modules", "Vercel", "Custom DOM Renderer"],
    badge: "80% lebih cepat",
  },
  {
    slug: "ditsuy-money",
    name: "Ditsuy | Catatan Keuangan",
    description:
      "Web app fullstack pencatatan keuangan pribadi — multi-user dengan Row Level Security, autentikasi Supabase, dan PWA yang bisa di-install seperti aplikasi native. Saldo dihitung real-time, dilengkapi insight donut chart dan tracking target tabungan.",
    imageUrl: "/projects/ditsuy.png",
    githubUrl: "https://github.com/ditsune/ditsuy-money",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Row Level Security", "PWA"],
    badge: "Fullstack + Auth",
  },
  {
    slug: "mayo-chart",
    name: "Mayo Chart | Sales Dashboard",
    description:
      "Dashboard rekap penjualan & performa admin yang mengagregasi data dari 3 sumber sekaligus (Website, Telegram, Reseller) ke dalam satu visualisasi interaktif — lengkap dengan ranking per tim dan podium top item terjual. Mengeliminasi 95% proses rekap manual.",
    imageUrl: "/projects/mayochart.png",
    liveUrl:
      "https://script.google.com/macros/s/AKfycbypBvGxHYkmxz--KsGJfOEjwwb2ssf2_Df4YBxbaoGISuBoArO_4ABfAgKQBvEA1s97/exec",
    githubUrl: "https://github.com/cuakproject/mayo-chart",
    tech: ["Google Apps Script", "Chart.js", "HTML", "JavaScript"],
    badge: "95% lebih cepat",
  },
  {
    slug: "sheet-worker",
    name: "Sheet Worker | VILOG Pipeline",
    description:
      "Sistem otomatisasi dua pipeline (Telegram + Web) untuk menyalin data order ke tab shift Google Sheets secara real-time — sekarang berjalan di Docker dengan auto-restart, heartbeat monitoring, dan bot Discord untuk cek status langsung dari chat. Mengeliminasi 95% proses input manual.",
    imageUrl: "/projects/sheetworkers.png",
    githubUrl: "https://github.com/ditsune/sheet-worker-tele",
    tech: ["Python", "Docker", "Google Sheets API", "Discord Bot"],
    badge: "95% lebih cepat",
  },
  {
    slug: "sigmacro",
    name: "SigMacro | Automation Tool",
    description:
      "Tools AutoHotkey v2 dengan GUI untuk mengotomatisasi alur login dan manajemen backup code. Dilengkapi gerak mouse humanized (Bezier curve), image search dengan toleransi warna, auto-update, dan statistik sesi. Memangkas 90% proses manual.",
    imageUrl: "/projects/sigmacro.png",
    githubUrl: "https://github.com/cuakproject/SigMacro",
    tech: ["AutoHotkey v2", "Image Recognition", "Bezier Curve Algorithm"],
    badge: "90% lebih cepat",
  },
  {
    slug: "swannhub",
    name: "SwannHub | Login Automation",
    description:
      "Server otomatisasi login akun Roblox berbasis Express dan Puppeteer, dengan worker terpisah untuk memisahkan logika login dari server utama. Memangkas waktu proses dari 3 menit menjadi 1 menit per akun.",
    imageUrl: "/projects/swannhub.png",
    githubUrl: "https://github.com/ditsune/SwannHub",
    tech: ["Node.js", "Express", "Puppeteer"],
    badge: "3 menit → 1 menit",
  },
  {
    slug: "sigmadots",
    name: "SigmaDOTS | Chrome Extension",
    description:
      "Ekstensi browser Manifest V3 yang mengotomatisasi workflow di tiga platform sekaligus: Roblox (login & 2SV helper, manajemen Xbox), Google Sheets (auto-copy, notifikasi), dan Mayoblox (order workflow). Memangkas 90% workflow repetitif harian.",
    imageUrl: "/projects/sigmadots.png",
    githubUrl: "https://github.com/ditsune/sigmadots-nokey",
    tech: ["JavaScript", "Chrome Extension Manifest V3", "Service Worker"],
    badge: "90% lebih cepat",
  },
  {
    slug: "mayopass",
    name: "Mayopass | Gamepass & Reseller Tools",
    description:
      "Web app untuk kalkulasi harga Gift Gamepass dan manajemen reseller, dengan backend serverless dan database MongoDB. Memangkas 85% waktu kalkulasi manual — hasil instan, akurat, tanpa risiko human error.",
    imageUrl: "/projects/mayopass.png",
    liveUrl: "https://mayopass.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayopass",
    tech: ["Node.js", "MongoDB", "Vercel Serverless"],
    badge: "85% lebih cepat",
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
      {/* Gambar */}
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

      {/* Konten */}
      <div className="lg:col-span-9 space-y-3">
        <div className="flex flex-col lg:flex-row items-start gap-4">
          {/* Kiri: Judul, Badge, Link */}
          <header className="space-y-2 min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <Heading3 className="whitespace-nowrap">{item.name}</Heading3>
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
              <Link
                href={`/projects/${item.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <ArrowRight className="w-4 h-4" />
                <span>Detail</span>
              </Link>
            </div>
          </header>

          {/* Kanan: Tech Badges (Desktop) */}
          <div className="hidden lg:flex flex-wrap gap-2 justify-end shrink-0 max-w-[260px]">
            {item.tech.map((tech) => (
              <TechBadge tech={tech} key={tech} />
            ))}
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Tech Badges (Mobile) */}
        <div className="flex lg:hidden flex-wrap gap-2">
          {item.tech.map((tech) => (
            <TechBadge tech={tech} key={tech} />
          ))}
        </div>
      </div>
    </article>
  ),
};