import { home } from "@/content/home";

export default function Dor() {
  const { dor } = home;
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
          {dor.title}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {dor.items.map((item, i) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <span aria-hidden="true" className="text-4xl font-black text-brand-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold leading-snug">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
