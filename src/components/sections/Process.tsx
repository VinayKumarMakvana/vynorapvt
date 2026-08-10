"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    index: "01",
    title: "Discovery & Audit",
    description:
      "We analyze your current digital presence — site speed, booking funnel, and competitor positioning — to find exactly where you're losing revenue.",
  },
  {
    index: "02",
    title: "Premium Design Strategy",
    description:
      "We craft a niche-specific layout that preserves your brand's identity while elevating it to match the caliber of the service you deliver in person.",
  },
  {
    index: "03",
    title: "Development & QA",
    description:
      "Every build goes through rigorous testing for load speed, cross-device rendering, and mobile UX before it ever reaches a client's eyes.",
  },
  {
    index: "04",
    title: "Launch & Growth",
    description:
      "We deploy the finished system and hand you a site engineered to keep converting long after launch day — not just look good on day one.",
  },
];

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Process() {
  return (
    <section id="process" className="border-t border-surface-border bg-void-soft/60">
      <div className="section-shell py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="eyebrow">The Process</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
            A consultative build, start to finish.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            No templated hand-offs. Four stages, one point of contact, and a
            site that&apos;s engineered to hit a business outcome at every step.
          </p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="relative mt-16 flex max-w-3xl flex-col gap-12"
        >
          {/* connecting signal line, threaded through the node centers */}
          <div
            className="absolute inset-y-2 left-7 w-px bg-gradient-to-b from-blue-signal via-teal to-transparent"
            aria-hidden="true"
          />

          {STEPS.map((step) => (
            <motion.li key={step.index} variants={item} className="relative flex gap-6 md:gap-10">
              <span
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full
                           border border-surface-border bg-void font-mono text-sm text-teal-bright"
              >
                {step.index}
              </span>
              <div className="pt-2.5">
                <h3 className="font-display text-lg font-semibold text-ink-primary">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-secondary">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
