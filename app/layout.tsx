import Providers from "@/components/providers";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya | Digital Operations & Tools Developer",
  description:
    "Membangun tools dan automation yang memangkas 90% kerja manual. Berpengalaman di operasional digital & customer support.",
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
