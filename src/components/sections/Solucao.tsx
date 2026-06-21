import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

const icons: Record<string, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  chat: (
    <path d="M21 12c0 4.418-4.03 8-9 8-1.02 0-2-.14-2.91-.4L4 21l1.48-3.86C4.55 15.86 4 14 4 12c0-4.418 4.03-8 8-8s9 3.582 9 8z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </>
  ),
};

export default function Solucao() {
  const { solucao } = home;
  return (
    <section id="servicos" className="bg-canvas">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl font-[600] tracking-[-0.02em] text-night sm:text-4xl">
            Serviços
          </h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-[3px] w-12 rounded bg-mercury" />
        </ScrollReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <ScrollReveal>
            <h3 className="font-display text-2xl font-[600] leading-[1.1] tracking-[-0.02em] text-night sm:text-[2rem]">
              {solucao.title}
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-night/65">
              {solucao.intro}
            </p>
            <div className="mt-8 rounded-2xl border border-night/8 bg-surface p-7 shadow-[0_1px_2px_rgba(14,14,14,0.04)]">
              <p className="text-lg font-[700] text-night">
                {solucao.diferencial.lead}{" "}
                <span className="font-[400] text-night/60">{solucao.diferencial.body}</span>
              </p>
              <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-[700] text-night">
                {solucao.diferencial.steps.map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-mercury">
                        →
                      </span>
                    )}
                    {step}
                  </span>
                ))}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-7 left-7 top-7 border-l border-dashed border-night/15"
            />
            <ScrollReveal stagger className="flex flex-col gap-10">
              {solucao.items.map((item) => (
                <article key={item.title} className="relative flex gap-5">
                  <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-night/12 bg-surface shadow-[0_1px_2px_rgba(14,14,14,0.04)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-mercury"
                      aria-hidden="true"
                    >
                      {icons[item.icon]}
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-lg font-[700] text-night">{item.title}</h4>
                    <p className="mt-1.5 leading-relaxed text-night/65">{item.body}</p>
                  </div>
                </article>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
