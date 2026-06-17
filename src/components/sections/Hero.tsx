import Image from "next/image";
import { home } from "@/content/home";
import Navbar from "@/components/ui/Navbar";

type Seg = { text: string; strong: boolean; partial?: string };

// Renderiza uma linha da headline com reveal por máscara e peso misto.
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
                <strong className="font-[700]">{seg.partial}</strong>
              </>
            ) : (
              <span className={seg.strong ? "font-[700]" : "font-[300]"}>
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
  const { heroEditorial: h, footer } = home;
  return (
    <header
      id="hero"
      className="relative overflow-hidden bg-[#edeced] text-night"
    >
      <Navbar />
      <div className="mx-auto flex min-h-svh w-full max-w-[1200px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32">
        {/* Moldura editorial — topo */}
        <div
          className="hero-fade flex items-center justify-between text-[0.7rem] font-[500] uppercase tracking-[0.32em] text-night/70 sm:text-xs"
          style={{ animationDelay: "0.1s" }}
        >
          {h.pillars.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>

        {/* Composição central */}
        <div className="grid flex-1 items-center gap-y-8 py-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-2 lg:py-0">
          {/* Headline esquerda */}
          <div className="order-1 text-center text-[2rem] leading-[1.04] tracking-[-0.01em] text-night sm:text-4xl lg:self-end lg:pb-16 lg:pr-4 lg:text-right lg:text-[2.7rem] xl:text-5xl">
            <HeadlineLines segments={h.left} baseDelay={0.3} />
          </div>

          {/* Figura + moldura */}
          <div className="relative order-2 mx-auto aspect-[4/5] w-[min(78vw,360px)]">
            <Image
              src={h.photo}
              alt={h.photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 360px, 78vw"
              className="object-cover object-bottom"
            />
            {/* Moldura editorial na frente — linha de topo no espaço claro acima da cabeça */}
            <div
              aria-hidden="true"
              className="bracket-draw absolute left-1/2 top-[9%] z-20 h-[48%] w-[78%] -translate-x-1/2 rounded-t-[44px] border border-b-0 border-night/25"
            />
          </div>

          {/* Headline direita */}
          <div className="order-3 text-center text-[2rem] leading-[1.04] tracking-[-0.01em] text-night sm:text-4xl lg:self-start lg:mt-[14%] lg:pl-4 lg:text-left lg:text-[2.7rem] xl:text-5xl">
            <HeadlineLines segments={h.right} baseDelay={0.5} />
          </div>
        </div>

        {/* Moldura editorial — base + cue de scroll */}
        <div
          className="hero-fade flex items-center justify-between text-[0.7rem] font-[500] uppercase tracking-[0.28em] text-night/40 sm:text-xs"
          style={{ animationDelay: "0.9s" }}
        >
          <span>{footer.tagline}</span>
          <a
            href="#conteudo"
            className="link-underline hidden items-center gap-2 text-night/70 transition-colors hover:text-night sm:inline-flex"
          >
            {h.scrollCue}
            <span aria-hidden="true" className="text-sm">
              ↓
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
