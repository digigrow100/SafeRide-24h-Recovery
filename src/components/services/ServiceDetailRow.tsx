import Image, { type StaticImageData } from "next/image";
import { SITE_PHONE_HREF } from "@/lib/site";

type Accent = "primary" | "secondary";

const ACCENT_STYLES: Record<Accent, { text: string; border: string; hoverBg: string }> = {
  primary: {
    text: "text-blue-800",
    border: "border-blue-800/20",
    hoverBg: "hover:bg-blue-800",
  },
  secondary: {
    text: "text-slate-700",
    border: "border-slate-700/20",
    hoverBg: "hover:bg-slate-700",
  },
};

interface ServiceDetailRowProps {
  imageFirst: boolean;
  accent: Accent;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  ctaLabel: string;
  children?: React.ReactNode;
}

export default function ServiceDetailRow({
  imageFirst,
  accent,
  number,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  ctaLabel,
  children,
}: ServiceDetailRowProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <div className={`relative lg:col-span-6 ${imageFirst ? "order-2 lg:order-1" : "order-2"}`}>
        <div className={`group relative overflow-hidden rounded-lg border ${styles.border} bg-white`}>
          <div className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay" />
          <Image
            alt={imageAlt}
            src={image}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-80 w-full transform object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 sm:h-96 md:h-[420px]"
          />
        </div>
      </div>

      <div className={`flex flex-col items-start lg:col-span-6 ${imageFirst ? "order-1 lg:order-2" : "order-1"}`}>
        <div className="mb-3 flex items-center gap-3">
          <span className={`font-sans text-sm font-bold ${styles.text}`}>{number}</span>
          <span className={`h-[2px] w-12 ${accent === "primary" ? "bg-blue-800" : "bg-slate-700"}`} />
          <span className="font-sans text-xs uppercase tracking-widest text-slate-500">{eyebrow}</span>
        </div>
        <h3 className="mb-4 font-display text-3xl font-bold text-slate-900 md:text-4xl">{title}</h3>
        <p className="mb-6 font-sans text-base leading-relaxed text-slate-500">{description}</p>
        {children}
        <a
          className={`group inline-flex items-center gap-2 rounded border bg-white px-5 py-3 font-display text-sm font-semibold tracking-wide transition-all ${styles.border} ${styles.text} ${styles.hoverBg} hover:text-bg`}
          href={SITE_PHONE_HREF}
        >
          <span>{ctaLabel}</span>
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  );
}
