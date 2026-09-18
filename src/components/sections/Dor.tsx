import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Dor() {
  const { dor } = home;
  return (
    <section
      data-frame-label={dor.frameLabel}
      className="relative overflow-hidden bg-canvas"
    >
      {/* Linha de percurso ligando os três cards (decorativa, só desktop) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[46%] hidden h-40 w-full text-mercury/35 lg:block"
      >
        <path
          d="M0 150 C 180 150, 190 40, 370 40 C 550 40, 560 160, 740 160 C 920 160, 930 30, 1200 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="flex items-center gap-3 text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/55">
                <span aria-hidden="true" className="block h-px w-8 bg-mercury" />
                {dor.eyebrow}
              </p>
              <h2 className="font-display mt-5 max-w-2xl text-3xl font-[300] leading-tight tracking-[-0.02em] text-night sm:text-[2.6rem]">
                {dor.title}{" "}
                <span className="font-[700]">{dor.titleStrong}</span>
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-night/65">
                {dor.subtitle}
              </p>
            </div>

            <div aria-hidden="true" className="hidden shrink-0 text-right lg:block">
              <ul className="space-y-1 text-[0.65rem] font-[500] uppercase tracking-[0.22em] text-night/55">
                {dor.sideRight.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <span className="ml-auto mt-3 block h-px w-8 bg-mercury/60" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {dor.items.map((item, i) => (
            <article
              key={item.title}
              className="group relative rounded-[28px] border border-night/8 bg-surface/90 p-8 backdrop-blur-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(14,14,14,0.25)]"
            >
              <span aria-hidden="true" className="text-3xl font-[800] text-mercury">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-[700] leading-snug text-night">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-night/65">{item.body}</p>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-8 bg-mercury"
              />
            </article>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mt-16 text-center">
          <p className="font-display text-2xl font-[300] tracking-[-0.01em] text-night sm:text-3xl">
            {dor.outro.lead}{" "}
            <span className="font-[700] text-mercury">{dor.outro.brand}</span>{" "}
            {dor.outro.leadEnd}
          </p>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-night/60">
            {dor.outro.body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
