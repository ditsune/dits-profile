import Providers from "@/components/providers";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya | Admin Operasional & Customer Service",
  description:
    "Berpengalaman menangani 200+ transaksi dan 300+ chat pelanggan per hari di industri top-up game online. Membangun tools internal yang dipakai tim untuk meningkatkan efisiensi operasional.",
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
