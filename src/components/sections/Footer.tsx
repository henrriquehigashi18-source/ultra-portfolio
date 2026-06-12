import { home } from "@/content/home";
import { whatsappLink } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Footer() {
  const { footer } = home;
  return (
    <footer className="border-t border-lead/30 bg-deep">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p className="mt-2 text-sm tracking-[0.02em] text-silver">
              {footer.tagline}
            </p>
          </div>
          <ul className="space-y-1">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2.5 text-silver transition-colors hover:text-starlight"
              >
                <WhatsAppIcon className="h-5 w-5 text-ghost" />
                {footer.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={footer.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2.5 text-silver transition-colors hover:text-starlight"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-ghost"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                {footer.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${footer.email}`}
                className="inline-flex min-h-11 items-center gap-2.5 text-silver transition-colors hover:text-starlight"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-ghost"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
                {footer.email}
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-8 border-t border-lead/30 pt-6 text-sm tracking-[0.02em] text-silver">
          © {new Date().getFullYear()} BL Swell. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
