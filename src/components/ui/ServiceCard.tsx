import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
}

/**
 * A single offering card in the Services grid. Pure presentational —
 * no client-side state or motion hooks needed, so this stays a server
 * component and the hover treatment is done with plain CSS transitions.
 */
export default function ServiceCard({
  icon: Icon,
  tag,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className="group relative h-full overflow-hidden rounded-2xl border border-surface-border
                 bg-surface/60 p-8 transition-colors duration-300 hover:border-teal/50"
    >
      {/* corner trace accents — circuit-board motif, quiet until hover */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l border-t
                   border-teal-bright/0 transition-colors duration-300 group-hover:border-teal-bright/60"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl border-b border-r
                   border-teal-bright/0 transition-colors duration-300 group-hover:border-teal-bright/60"
        aria-hidden="true"
      />

      <div
        className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border
                   border-surface-border bg-void/60 text-teal-bright transition-colors
                   duration-300 group-hover:border-teal-bright/40"
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <span className="eyebrow mb-3 block">{tag}</span>
      <h3 className="font-display text-xl font-semibold text-ink-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{description}</p>
    </div>
  );
}
