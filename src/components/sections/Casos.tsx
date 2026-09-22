"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { home } from "@/content/home";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CountUp from "@/components/animations/CountUp";

export default function Casos() {
  const { casos } = home;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () => {
        const track = trackRef.current!;
        const totalScroll = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1.2,
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Setas do mobile: avançam um card por clique no scroll nativo.
  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.85;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="projetos"
      data-frame-label={casos.frameLabel}
      className="overflow-hidden bg-deep"
    >
      <div className="flex h-screen flex-col justify-center gap-8 py-16">
        {/* Header */}
        <div className="flex-shrink-0 px-5 sm:px-14">
          <span
            aria-hidden="true"
            className="block h-px w-12 bg-mercury"
          />
          <h2 className="font-display mt-5 text-3xl font-[300] leading-[1.05] tracking-[-0.02em] text-starlight sm:text-[2.75rem]">
            {casos.title}{" "}
            <span className="font-[700]">{casos.titleStrong}</span>
          </h2>
          <p className="mt-4 max-w-xl text-silver">{casos.subtitle}</p>
          <p
            aria-hidden="true"
            className="mt-5 hidden items-center gap-2 text-xs font-[600] uppercase tracking-[0.15em] text-white/55 sm:flex"
          >
            {casos.dragHint}
            <span className="text-mercury">↓</span>
          </p>
        </div>

        {/* Cards track — no mobile é scroll nativo com setas; no desktop o GSAP
            arrasta a trilha conforme o scroll vertical. */}
        <div className="relative">
          <button
            type="button"
            aria-label="Ver caso anterior"
            onClick={() => scrollByCard(-1)}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-deep/85 text-white shadow-[0_10px_26px_-12px_rgba(0,0,0,0.9)] backdrop-blur sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Ver próximo caso"
            onClick={() => scrollByCard(1)}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-deep/85 text-white shadow-[0_10px_26px_-12px_rgba(0,0,0,0.9)] backdrop-blur sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div
            ref={trackRef}
            className="flex gap-5 px-5 sm:px-14 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none will-change-transform"
            style={{ scrollbarWidth: "none" }}
          >
          {casos.items.map((caso) => (
            <article
              key={caso.name}
              className="group relative w-[82vw] flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 transition-[border-color,box-shadow] duration-300 hover:border-mercury/45 hover:shadow-[0_20px_52px_-28px_rgba(255,90,0,0.6)] sm:w-[360px]"
              style={{ height: "clamp(360px, 48vh, 500px)" }}
            >
              {/* Full-bleed image */}
              <Image
                src={caso.image}
                alt={`Projeto ${caso.name}`}
                fill
                sizes="(min-width: 640px) 360px, 82vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/55 to-transparent" />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-[600] uppercase tracking-[0.15em] text-silver/70">
                  {caso.segment}
                </p>
                <h3 className="font-display mt-1.5 text-2xl font-[600] leading-snug tracking-[-0.01em] text-starlight">
                  {caso.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-silver">
                  {caso.solucao}
                </p>
                {caso.metric && (
                  <CountUp
                    text={caso.metric}
                    className="mt-3 block text-base font-[700] text-mercury"
                  />
                )}
              </div>
            </article>
            ))}
          </div>
        </div>

        {/* CTA — fechamento da seção, fora do carrossel */}
        <div className="flex flex-shrink-0 justify-center px-5 sm:px-14">
          <WhatsAppButton label={casos.cta} message={casos.ctaMessage} />
        </div>
      </div>
    </section>
  );
}
