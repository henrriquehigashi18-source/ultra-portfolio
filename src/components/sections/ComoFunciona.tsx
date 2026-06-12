import { home } from "@/content/home";

export default function ComoFunciona() {
  const { comoFunciona } = home;
  return (
    <section className="border-t border-lead/20 bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="text-3xl font-[360] tracking-[0.01em] text-starlight sm:text-4xl">
          {comoFunciona.title}
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3">
          {comoFunciona.steps.map((step, i) => (
            <li key={step.title}>
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-lead/60 bg-graphite text-lg font-[480] text-starlight"
              >
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-[480] text-starlight">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-silver">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
