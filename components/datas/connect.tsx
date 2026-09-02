import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const SOCIAL_LIST = [
  {
    name: "WhatsApp",
    handle: "Aditya",
    url: "https://wa.me/+628981625232",
  },
  {
    name: "Github",
    handle: "@ditsune",
    url: "https://github.com/ditsune",
  },
] as const;

export const Connect = {
  Interest: () => (
    <p className="text-sm text-muted-foreground font-mono">
      Terbuka untuk diskusi, kolaborasi, atau peluang baru.
    </p>
  ),

  ContactLink: () => (
    <div className="space-y-4">
      <Link
        href="mailto:adiitsahranfadila@gmail.com"
        className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition-all duration-300 hover:gap-4"
      >
        <span className="text-base sm:text-lg">adiitsahranfadila@gmail.com</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  ),

  SocialCard: ({ item }: { item: (typeof SOCIAL_LIST)[number] }) => (
    <Link
      key={item.name}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
    >
      <div className="space-y-2">
        <div className="text-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {item.name}
        </div>
        <div className="text-sm text-muted-foreground">{item.handle}</div>
      </div>
    </Link>
  ),
};
