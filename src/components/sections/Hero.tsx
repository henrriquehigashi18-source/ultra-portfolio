import Image from "next/image";
import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import Navbar from "@/components/ui/Navbar";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

type Seg = { text: string; strong: boolean; partial?: string };

function HeadlineLines({
  segments,
  baseDelay,
}: {
  segments: readonly Seg[];
  baseDelay: number;
}) {
  return (
    <>
      {segments.map((seg, i) => (
        <span key={i} className="line-mask">
          <span
            className="line-rise"
            style={{ animationDelay: `${baseDelay + i * 0.08}s` }}
          >
            {seg.partial ? (
              <>
                {seg.text}
                <strong className="font-[700] text-mercury">{seg.partial}</strong>
              </>
            ) : (
              <span
                className={seg.strong ? "font-[700] text-mercury" : "font-[300]"}
              >
                {seg.text}
              </span>
            )}
          </span>
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  const { heroEditorial: hero } = home;

  return (
    <header
      id="hero"
      data-frame-label={hero.frameLabel}
      className="relative min-h-svh overflow-hidden bg-deep text-starlight"
    >
      <Navbar />

      <div className="absolute inset-0">
        <Image
          src="/hero-ocean.png"
          alt="Onda escura iluminada por linhas laranja, símbolo de movimento e crescimento"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.66)_35%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,transparent_25%,rgba(8,8,8,0.12)_62%,#080808_100%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-px bg-gradient-to-r from-transparent via-mercury/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1320px] items-center px-5 pb-28 pt-32 sm:px-8 sm:pb-32 lg:px-12">
        <h1 className="sr-only">{hero.ariaHeadline}</h1>

        <div className="relative flex w-full max-w-[52rem] min-w-0 flex-col items-start">
          <div
            className="hero-fade mb-7 flex max-w-[18rem] items-center gap-3 text-[0.65rem] font-[650] uppercase leading-relaxed tracking-[0.22em] text-white/65 sm:max-w-none sm:tracking-[0.24em]"
            style={{ animationDelay: "0.18s" }}
          >
            <span aria-hidden="true" className="h-px w-10 bg-mercury" />
            {home.nav.logoTagline}
          </div>

          <div
            aria-hidden="true"
            className="font-display w-full text-[2.45rem] leading-[0.98] tracking-[-0.035em] text-white sm:text-[4.1rem] lg:text-[5rem]"
          >
            <HeadlineLines segments={hero.left} baseDelay={0.3} />
            <HeadlineLines segments={hero.right} baseDelay={0.46} />
          </div>

          <a
            href={whatsappLink(hero.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-fade mt-9 inline-flex min-h-12 items-center gap-3 rounded-lg border border-mercury bg-mercury px-7 py-3 text-lg font-[700] text-white shadow-[0_16px_42px_-14px_rgba(255,90,0,0.9)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-ghost hover:shadow-[0_18px_48px_-12px_rgba(255,90,0,0.95)] active:scale-[0.98]"
            style={{ animationDelay: "0.85s" }}
          >
            <WhatsAppIcon className="h-6 w-6 shrink-0" />
            {hero.ctaQuestion}
          </a>
        </div>

      </div>
    </header>
  );
}
