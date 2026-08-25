import Providers from "@/components/providers";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya | Automation & Internal Tools Developer",
  description:
    "Membangun automation, dashboard, dan Chrome extension yang dipakai tim setiap hari — memangkas hingga 90% kerja manual. Belajar dari masalah nyata di industri top-up game online, bukan dari tutorial.",
  icons: [{ rel: "icon", url: "/hello.svg" }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
