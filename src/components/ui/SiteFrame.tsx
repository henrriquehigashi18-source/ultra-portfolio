"use client";

import { useEffect, useState } from "react";
import { home } from "@/content/home";
import RotatingWord from "@/components/animations/RotatingWord";

// Moldura decorativa fixa na viewport: pilares no topo direito, ticker embaixo
// à esquerda e um rótulo embaixo à direita que acompanha a seção visível.
// Só aparece no desktop — no mobile a tela é curta demais para moldura.
export default function SiteFrame() {
  const { frame } = home;
  const [label, setLabel] = useState<string>(frame.defaultLabel);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-frame-label]");
    if (sections.length === 0) return;

    // A seção que ocupa mais espaço na tela manda no rótulo.
    const visibility = new Map<Element, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target, entry.intersectionRatio);
        }
        let best: Element | null = null;
        let bestRatio = 0;
        for (const [el, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = el;
          }
        }
        if (best instanceof HTMLElement && best.dataset.frameLabel) {
          setLabel(best.dataset.frameLabel);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 hidden lg:block"
    >
      {/* Pilares — topo direito */}
      <div className="absolute right-8 top-7 flex items-start gap-3">
        <span className="mt-1 block h-14 w-px bg-mercury/50" />
        <ul className="space-y-1 text-right text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/60">
          {frame.pillars.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>

      {/* Ticker — base esquerda */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3">
        <span className="block h-8 w-px bg-mercury/50" />
        <p className="max-w-[18rem] text-[0.65rem] font-[500] uppercase leading-relaxed tracking-[0.22em] text-night/60">
          {frame.ticker.prefix}{" "}
          <RotatingWord words={frame.ticker.words} className="text-night/80" />
        </p>
      </div>

      {/* Rótulo contextual — base direita, à esquerda do botão flutuante */}
      <div className="absolute bottom-8 right-28 flex items-center gap-3">
        <p className="max-w-[18rem] text-right text-[0.65rem] font-[500] uppercase leading-relaxed tracking-[0.22em] text-night/60">
          {label}
        </p>
        <span className="block h-8 w-px bg-mercury/50" />
      </div>
    </div>
  );
}
