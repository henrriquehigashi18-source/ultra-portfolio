import Image from "next/image";
import { home } from "@/content/home";
import Navbar from "@/components/ui/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Hero() {
  const { hero, provaSocial, sobreMim } = home;
  return (
    <header id="hero" className="relative bg-night">
      <Navbar />
      <div className="mx-auto w-full max-w-[1200px] px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="text-xs font-[600] uppercase tracking-[0.3em] text-silver sm:text-sm">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-[700] uppercase leading-[1.08] tracking-[0.01em] text-[#e9e9e9] sm:text-5xl lg:text-6xl">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
              {hero.lead}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton label={hero.cta} />
              <a
                href="#projetos"
                className="inline-flex min-h-13 items-center justify-center rounded-lg border border-lead/60 px-7 text-base font-[600] text-starlight transition-colors hover:border-silver"
              >
                {hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-6 text-sm tracking-[0.02em] text-silver">{hero.trust}</p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-graphite">
              <Image
                src="/paulo-henrique.jpeg"
                alt={sobreMim.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 to-transparent"
              />
              <figure className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                <span aria-hidden="true" className="text-3xl font-[700] leading-none text-mercury">
                  “
                </span>
                <blockquote className="mt-1 text-sm leading-snug text-starlight sm:text-base">
                  {provaSocial.quote}
                </blockquote>
                <figcaption className="mt-2 text-xs text-silver sm:text-sm">
                  <span className="font-[600] text-starlight">{provaSocial.author}</span>
                  {" · "}
                  {provaSocial.role}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
