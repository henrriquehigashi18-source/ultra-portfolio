import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
};

// Satoshi — corpo/UI (variável). Par premium da Clash Display.
const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

// Clash Display — títulos/display (variável). Caráter de agência.
const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BL Swell | Seu cliente te acha no Google e chama no WhatsApp",
  description:
    "Sites com captação e agendamento automáticos pelo WhatsApp. Seu cliente te encontra no Google e a conversa começa em um toque. Diagnóstico gratuito.",
  openGraph: {
    title: "BL Swell | Presença digital que vira conversa",
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
    <html
      lang="pt-BR"
      className={`${satoshi.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#conteudo"
          className="sr-only z-50 rounded-lg bg-mercury px-4 py-2 font-[600] text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
