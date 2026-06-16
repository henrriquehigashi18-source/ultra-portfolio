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

  return (
    <section ref={sectionRef} id="projetos" className="bg-night overflow-hidden">
      <div className="flex h-screen flex-col justify-center py-16">
        {/* Header */}
        <div className="mb-10 flex-shrink-0 px-5 sm:px-14">
          <h2 className="font-display text-3xl font-[600] tracking-[-0.02em] text-starlight sm:text-[2.75rem]">
            {casos.title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-3 block h-[3px] w-12 rounded bg-mercury"
          />
          <p className="mt-4 max-w-xl text-silver">{casos.subtitle}</p>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex gap-5 px-5 sm:px-14 overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none will-change-transform"
          style={{ scrollbarWidth: "none" }}
        >
          {casos.items.map((caso) => (
            <article
              key={caso.name}
              className="group relative flex-shrink-0 w-[82vw] sm:w-[360px] rounded-2xl overflow-hidden snap-center"
              style={{ height: "clamp(400px, 60vh, 560px)" }}
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
                <CountUp
                  text={caso.metric}
                  className="mt-3 block text-base font-[700] text-mercury"
                />
              </div>
            </article>
          ))}

          {/* CTA at end of track */}
          <div className="flex min-w-[260px] flex-shrink-0 items-center justify-center px-8">
            <WhatsAppButton label={casos.cta} message={casos.ctaMessage} />
          </div>
        </div>
      </div>
    </section>
  );
}
