import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Casos() {
  const { casos } = home;
  return (
    <section className="border-t border-lead/20 bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <h2 className="text-3xl font-[360] tracking-[0.01em] text-starlight sm:text-4xl">
            {casos.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-silver">{casos.subtitle}</p>
        </ScrollReveal>
        <ScrollReveal stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {casos.items.map((caso) => (
            <article
              key={caso.name}
              className="flex flex-col border border-lead/40"
            >
              {/* Slot de imagem — substituir por <Image> quando tiver screenshot do projeto */}
              <div
                className="flex aspect-[16/9] w-full items-center justify-center border-b border-lead/40 bg-graphite"
                aria-hidden="true"
              >
                <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10 text-lead" aria-hidden="true">
                  <rect x="4" y="10" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="16" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="m4 34 10-8 8 6 8-10 14 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex grow flex-col p-7">
              <p className="text-xs font-[480] uppercase tracking-wider text-silver">
                {caso.segment}
              </p>
              <h3 className="mt-1 text-xl font-[530] text-starlight">{caso.name}</h3>
              <dl className="mt-6 flex grow flex-col gap-5">
                <div>
                  <dt className="text-xs font-[480] uppercase tracking-wider text-silver/80">
                    O contexto
                  </dt>
                  <dd className="mt-1 text-base leading-relaxed text-silver">
                    {caso.contexto}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-[480] uppercase tracking-wider text-silver/80">
                    O que eu fiz
                  </dt>
                  <dd className="mt-1 text-base leading-relaxed text-silver">
                    {caso.fiz}
                  </dd>
                </div>
                <div className="mt-auto rounded-[3px] bg-ghost/10 p-4">
                  <dt className="text-xs font-[480] uppercase tracking-wider text-silver/80">
                    O resultado
                  </dt>
                  <dd className="mt-1 text-base leading-relaxed text-silver">
                    {caso.resultado}
                  </dd>
                  <dd className="mt-2 text-lg font-[530] leading-snug text-starlight">
                    {caso.metric}
                  </dd>
                </div>
              </dl>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
