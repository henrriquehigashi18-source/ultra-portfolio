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
      className={`inline-flex min-h-13 items-center justify-center gap-2.5 rounded-lg border border-mercury bg-mercury px-7 text-lg font-[700] text-white shadow-[0_16px_38px_-16px_rgba(255,90,0,0.9)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-ghost hover:shadow-[0_18px_44px_-14px_rgba(255,90,0,0.95)] active:scale-[0.98] ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {label}
      <span aria-hidden="true" className="text-sm">↗</span>
    </a>
  );
}
