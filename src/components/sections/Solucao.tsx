import { home } from "@/content/home";

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
    <section className="border-t border-lead/20 bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-3xl text-3xl font-[360] tracking-[0.01em] text-starlight sm:text-4xl">
          {solucao.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-silver">{solucao.intro}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solucao.items.map((item) => (
            <article key={item.title} className="border border-lead/40 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-graphite">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-ghost"
                  aria-hidden="true"
                >
                  {icons[item.icon]}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-[480] text-starlight">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-silver">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[4px] bg-graphite p-8 sm:p-10">
          <p className="text-xl font-[480] text-starlight sm:text-2xl">
            {solucao.diferencial.lead}{" "}
            <span className="font-[360] text-silver">{solucao.diferencial.body}</span>
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-[480] text-starlight sm:text-xl">
            {solucao.diferencial.steps.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-ghost">
                    →
                  </span>
                )}
                {step}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
