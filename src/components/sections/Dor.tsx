import { home } from "@/content/home";

export default function Dor() {
  const { dor } = home;
  return (
    <section className="bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl text-3xl font-[360] tracking-[0.01em] text-starlight sm:text-4xl">
          {dor.title}
        </h2>
        <div className="mt-12 grid gap-px sm:grid-cols-3 sm:gap-6">
          {dor.items.map((item, i) => (
            <article
              key={item.title}
              className="border-t border-lead/40 py-8 sm:border sm:p-7"
            >
              <span aria-hidden="true" className="text-4xl font-[360] text-ghost">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-[480] leading-snug text-starlight">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-silver">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
