import { home } from "@/content/home";

export default function ComoFunciona() {
  const { comoFunciona } = home;
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          {comoFunciona.title}
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {comoFunciona.steps.map((step, i) => (
            <li key={step.title}>
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-black text-ink"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-zinc-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
