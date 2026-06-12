import { home } from "@/content/home";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function SobreMim() {
  const { sobreMim } = home;
  return (
    <section className="bg-night">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-8 sm:py-24">
        <ScrollReveal>
          <h2 className="text-3xl font-[700] text-starlight sm:text-4xl">
            {sobreMim.title}
          </h2>
          <span aria-hidden="true" className="mt-3 block h-[3px] w-12 rounded bg-mercury" />
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {sobreMim.paragraphs.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-silver">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
