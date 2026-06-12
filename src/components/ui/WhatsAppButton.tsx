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
      className={`inline-flex min-h-13 items-center justify-center gap-2.5 rounded-lg bg-mercury px-7 text-base font-[600] text-white transition duration-200 hover:bg-[#e84510] active:scale-[0.98] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {label}
      <span aria-hidden="true" className="text-sm">↗</span>
    </a>
  );
}
