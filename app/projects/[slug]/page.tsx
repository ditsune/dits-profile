import { PROJECT_DETAILS } from "@/components/datas/project-details";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ await params karena di Next.js 15 params berupa Promise
  const { slug } = await params;

  const project = PROJECT_DETAILS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16 sm:py-24">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="text-sm text-muted-foreground font-mono">
            {project.category}
          </div>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight">
            {project.name}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.tagline}
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            )}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="text-xs px-2 py-1 border border-border rounded-full text-muted-foreground font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-12" />

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Masalah */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-muted-foreground tracking-widest">
              MASALAH
            </h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solusi */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-muted-foreground tracking-widest">
              SOLUSI
            </h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Tantangan */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-muted-foreground tracking-widest">
              TANTANGAN
            </h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Hasil */}
          <div className="space-y-4 p-6 border border-border rounded-lg bg-muted/30">
            <h2 className="text-xs font-mono text-muted-foreground tracking-widest">
              HASIL
            </h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              {project.result}
            </p>
            {project.impact && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.impact.map((item: string) => (
                  <div
                    key={item}
                    className="text-sm font-mono text-foreground border border-border px-3 py-1 rounded-full"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Testimoni */}
          {project.testimonial && (
            <div className="space-y-4 border-l-2 border-muted-foreground/30 pl-6">
              <h2 className="text-xs font-mono text-muted-foreground tracking-widest">
                KATA TIM
              </h2>
              <blockquote className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="text-sm text-muted-foreground">
                — {project.testimonial.author}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return PROJECT_DETAILS.map((p) => ({
    slug: p.slug,
  }));
}