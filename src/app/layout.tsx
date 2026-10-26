import type { Metadata, Viewport } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "vietnamese"],
  axes: ["wdth"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.bio,
};

export const viewport: Viewport = {
  themeColor: "#fff8e7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
