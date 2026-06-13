import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import Logo from "./Logo";

export default function Navbar() {
  const { nav } = home;
  return (
    <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
      <a href="#hero" aria-label="BL Swell — início">
        <Logo />
      </a>
      <ul className="hidden items-center gap-8 md:flex">
        {nav.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-block py-2 text-sm font-[500] tracking-[0.04em] text-silver uppercase transition-colors hover:text-starlight"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center rounded-lg border border-mercury/60 px-4 text-sm font-[600] text-starlight transition-colors hover:bg-mercury hover:text-white active:scale-[0.98]"
      >
        {nav.cta}
      </a>
    </nav>
  );
}
