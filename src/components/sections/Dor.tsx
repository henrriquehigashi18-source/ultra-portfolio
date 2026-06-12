import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Dor() {
  const { dor } = home;
  return (
    <section className="bg-deep">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <ScrollReveal>
          <h2 className="max-w-2xl text-3xl font-[700] leading-tight text-starlight sm:text-4xl">
            {dor.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal stagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {dor.items.map((item, i) => (
            <article key={item.title} className="rounded-2xl bg-graphite p-7">
              <span aria-hidden="true" className="text-4xl font-[800] text-mercury">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-[700] leading-snug text-starlight">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-silver">{item.body}</p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
