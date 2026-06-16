import Image from "next/image";
import { home } from "@/content/home";
import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TextReveal from "@/components/animations/TextReveal";
import Magnetic from "@/components/animations/Magnetic";
import ImageReveal from "@/components/animations/ImageReveal";

export default function Hero() {
  const { hero, provaSocial, sobreMim } = home;
  return (
    <header id="hero" className="relative overflow-hidden bg-night">
      {/* Glow radial laranja — luz com propósito atrás do hero */}
      <div
        aria-hidden="true"
        className="glow-mercury -top-40 -left-32 h-[520px] w-[520px] sm:h-[680px] sm:w-[680px]"
      />
      <Navbar />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p
              className="hero-fade text-xs font-[600] uppercase tracking-[0.3em] text-mercury sm:text-sm"
              style={{ animationDelay: "0.1s" }}
            >
              {hero.eyebrow}
            </p>

            <TextReveal
              as="h1"
              onLoad
              delay={0.25}
              lines={hero.headline}
              className="font-display mt-5 text-[2.75rem] font-[600] leading-[0.98] tracking-[-0.025em] text-[#f4f4f4] sm:text-6xl lg:text-[4.4rem]"
            />

            <p
              className="hero-fade mt-7 max-w-xl text-base leading-relaxed text-silver sm:text-lg"
              style={{ animationDelay: "0.55s" }}
            >
              {hero.lead}
            </p>

            <div
              className="hero-fade mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.7s" }}
            >
              <Magnetic strength={0.4}>
                <WhatsAppButton label={hero.cta} />
              </Magnetic>
              <a
                href="#projetos"
                className="link-underline inline-flex min-h-13 items-center justify-center rounded-lg border border-lead/60 px-7 text-base font-[600] text-starlight transition-colors duration-300 hover:border-silver"
              >
                {hero.ctaSecondary}
              </a>
            </div>

            <p
              className="hero-fade mt-7 text-sm tracking-[0.02em] text-silver"
              style={{ animationDelay: "0.85s" }}
            >
              {hero.trust}
            </p>
          </div>

          <ImageReveal
            onLoad
            delay={0.4}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-graphite ring-1 ring-white/5">
              <Image
                data-reveal-inner
                src="/paulo-henrique.jpeg"
                alt={sobreMim.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover will-change-transform"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 to-transparent"
              />
              <figure className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                <span
                  aria-hidden="true"
                  className="font-display text-3xl font-[600] leading-none text-mercury"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-1 text-sm leading-snug text-starlight sm:text-base">
                  {provaSocial.quote}
                </blockquote>
                <figcaption className="mt-2 text-xs text-silver sm:text-sm">
                  <span className="font-[600] text-starlight">
                    {provaSocial.author}
                  </span>
                  {" · "}
                  {provaSocial.role}
                </figcaption>
              </figure>
            </div>
          </ImageReveal>
        </div>
      </div>
    </header>
  );
}
