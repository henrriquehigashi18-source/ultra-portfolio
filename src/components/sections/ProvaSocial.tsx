import { home } from "@/content/home";

export default function ProvaSocial() {
  const { provaSocial } = home;
  return (
    <section className="border-y border-zinc-100 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <figure className="mx-auto max-w-3xl text-center">
          <span aria-hidden="true" className="text-5xl font-black leading-none text-brand">
            “
          </span>
          <blockquote className="text-xl font-semibold leading-snug sm:text-2xl">
            {provaSocial.quote}
          </blockquote>
          <figcaption className="mt-5 text-sm text-zinc-500">
            <span className="font-semibold text-ink">{provaSocial.author}</span>
            {" · "}
            {provaSocial.role}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
