"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CREDENTIALS = [
  { label: "Engagement", value: "1 developer, start to finish" },
  { label: "Stack", value: "Next.js · TypeScript · React · Python · Java" },
  { label: "Based in", value: "Kota, Rajasthan, India" },
  { label: "Serves", value: "NY · London · Dubai · India · Entire World Wide" },
];

const INDUSTRIES = [
  {
    title: "Clinics",
    description: "Booking-first sites that reduce no-shows and build trust before the first visit.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Salons",
    description: "Visual-forward layouts that reflect the caliber of the chair, not just the service list.",
    image: "https://images.unsplash.com/photo-1781450090585-1a511b7066d9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Home Services",
    description: "Fast-loading, mobile-first sites built for the moment a customer needs you now.",
    image: "https://images.unsplash.com/photo-1757359056339-22968344cce6?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-surface-border">
            <Image
              src="https://images.unsplash.com/photo-1623281185000-6940e5347d2e?q=80&w=1200&auto=format&fit=crop"
              alt="Inside the studio — a dual-monitor development setup"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
          </div>
          {/* floating credential chip — signature accent for this section */}
          <div className="absolute -bottom-6 -right-4 rounded-xl border border-surface-border bg-surface/90 px-5 py-4 backdrop-blur-md sm:-right-8">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-teal-bright">
              Direct Line
            </p>
            <p className="mt-1 text-sm text-ink-primary">No account managers.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="eyebrow">About the Consultant</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
            Vinay Kumar Makvana
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary">
            A full-stack developer who&apos;d rather build one exceptional site
            than manage ten mediocre ones. Vinay works directly with each
            client — no project managers relaying requirements, no junior
            devs learning on your dime — combining rigorous engineering with
            a genuine interest in immersive, 3D-driven web design.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            The philosophy is simple: a website is a business asset, not a
            brochure. Every engagement is scoped around a measurable
            outcome — more bookings, fewer abandoned forms, a site that
            finally matches the quality of the business behind it.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-surface-border pt-8">
            {CREDENTIALS.map((cred) => (
              <div key={cred.label}>
                <dt className="font-mono text-[11px] uppercase tracking-widest2 text-ink-muted">
                  {cred.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-ink-primary">{cred.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Industries served — the "Portfolio" nav link lands here */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mt-24"
      >
        <span className="eyebrow">Built For</span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink-primary">
          Industries we design for
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-surface-border"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h4 className="font-display text-lg font-semibold text-white">
                  {industry.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
