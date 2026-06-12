import { home } from "@/content/home";

export default function ProvaSocial() {
  const { provaSocial } = home;
  return (
    <section className="border-y border-lead/30 bg-deep">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 sm:py-20">
        <figure className="mx-auto max-w-3xl text-center">
          <span aria-hidden="true" className="text-5xl font-[530] leading-none text-ghost">
            “
          </span>
          <blockquote className="text-xl font-[420] leading-snug text-starlight sm:text-2xl">
            {provaSocial.quote}
          </blockquote>
          <figcaption className="mt-5 text-sm tracking-[0.02em] text-silver">
            <span className="font-[480] text-starlight">{provaSocial.author}</span>
            {" · "}
            {provaSocial.role}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
