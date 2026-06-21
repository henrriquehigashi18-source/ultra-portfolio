import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Dor() {
  const { dor } = home;
  return (
    <section className="bg-canvas">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <h2 className="font-display max-w-2xl text-3xl font-[600] leading-tight tracking-[-0.02em] text-night sm:text-4xl">
            {dor.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal stagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {dor.items.map((item, i) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-night/8 bg-surface p-7 shadow-[0_1px_2px_rgba(14,14,14,0.04)] transition-[transform,box-shadow] duration-300 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-mercury before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-14px_rgba(14,14,14,0.22)] hover:before:opacity-100"
            >
              <span aria-hidden="true" className="text-4xl font-[800] text-mercury">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-[700] leading-snug text-night">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-night/65">{item.body}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
