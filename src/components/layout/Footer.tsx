import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "The Process", href: "#process" },
  { label: "Portfolio", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="trace-line border-t border-surface-border bg-void-soft">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="#top" className="flex items-center gap-3">
            <span className="relative h-9 w-9 overflow-hidden rounded-lg border border-surface-border">
              <Image
                src="/logo-mark.png"
                alt="Vinay's Web Studio emblem"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-base font-semibold text-ink-primary">
              Vinay&apos;s Web Studio
            </span>
          </Link>
          <div>
            {/* Brand description */}
            <p className="mt-4 max-w-md text-sm leading-6 text-ink-secondary">
              Premium, high-performance web design for clinics,
              salons, and home service brands that want to look — and
              convert — like a market leader.
            </p>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-ink-secondary">
              <MapPin
                className="h-[18px] w-[18px] shrink-0 text-teal-bright"
                strokeWidth={1.7}
              />

              <span>
                Kota, Rajasthan, India — serving clients worldwide
              </span>
            </div>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vinays.web.services@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors duration-200 hover:text-paper"
            >
              <Mail
                className="h-[18px] w-[18px] shrink-0 text-teal-bright"
                strokeWidth={1.7}
              />

              <span className="transition-colors duration-200 hover:text-teal-bright">
                vinays.web.services@gmail.com 
              </span>
            </a>
          </div>
        </div>

        <div>
          <span className="eyebrow">Navigate</span>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-secondary transition-colors hover:text-teal-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="eyebrow">Start a Project</span>
          <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
            Free website audits for qualifying local businesses.
          </p>
          <Link
            href="#contact"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-bright"
          >
            Request yours
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="section-shell flex flex-col-reverse items-center justify-between gap-4 border-t border-surface-border py-6 text-xs text-ink-muted md:flex-row">
        <p>© {year} Vinay&apos;s Web Studio. All rights reserved.</p>
        <p className="font-mono tracking-wide">Built by Vinay Kumar Makvana</p>
      </div>
    </footer>
  );
}
