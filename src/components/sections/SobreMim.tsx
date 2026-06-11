import Image from "next/image";
import { home } from "@/content/home";

export default function SobreMim() {
  const { sobreMim } = home;
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl md:mx-0">
            <Image
              src="/paulo-henrique.jpeg"
              alt={sobreMim.photoAlt}
              fill
              sizes="(min-width: 768px) 320px, 80vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              {sobreMim.title}
            </h2>
            {sobreMim.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-lg leading-relaxed text-zinc-600">
                {p}
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {sobreMim.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 font-semibold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-brand-deep"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
