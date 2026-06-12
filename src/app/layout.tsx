import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1e1e2a",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BL Swell | Seu cliente te acha no Google e chama no WhatsApp",
  description:
    "Sites com captação e agendamento automáticos pelo WhatsApp. Seu cliente te encontra no Google e a conversa começa em um toque. Diagnóstico gratuito.",
  openGraph: {
    title: "BL Swell — Presença digital que vira conversa",
    description:
      "Sites com captação e agendamento automáticos pelo WhatsApp. Seu cliente te encontra no Google e a conversa começa em um toque.",
    locale: "pt_BR",
    type: "website",
    siteName: "BL Swell",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
