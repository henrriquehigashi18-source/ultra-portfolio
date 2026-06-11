import { whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

type WhatsAppButtonProps = {
  label: string;
  message?: string;
  className?: string;
};

export default function WhatsAppButton({
  label,
  message,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand px-8 text-lg font-bold text-ink shadow-lg shadow-brand/30 transition duration-200 hover:scale-[1.02] hover:bg-brand-deep active:scale-[0.98] ${className}`}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      {label}
    </a>
  );
}
