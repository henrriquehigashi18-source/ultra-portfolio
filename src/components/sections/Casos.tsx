import { home } from "@/content/home";

export default function Casos() {
  const { casos } = home;
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          {casos.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">{casos.subtitle}</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {casos.items.map((caso) => (
            <article
              key={caso.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                {caso.segment}
              </p>
              <h3 className="mt-1 text-xl font-black">{caso.name}</h3>
              <dl className="mt-5 flex grow flex-col gap-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    O contexto
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {caso.contexto}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    O que eu fiz
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {caso.fiz}
                  </dd>
                </div>
                <div className="mt-auto border-l-4 border-brand pl-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    O resultado
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {caso.resultado}
                  </dd>
                  <dd className="mt-2 text-lg font-black leading-snug">
                    {caso.metric}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
