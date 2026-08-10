"use client";

import { motion } from "framer-motion";
import { Layers, Boxes, CalendarCheck, Cpu } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

const SERVICES = [
  {
    icon: Layers,
    tag: "Redesign",
    title: "Premium Web Redesign",
    description:
      "We take outdated, slow-loading sites and rebuild them into modern, high-converting digital assets that match the quality of your in-person service.",
  },
  {
    icon: Boxes,
    tag: "3D Experience",
    title: "Interactive 3D Web Layouts",
    description:
      "Immersive, WebGL-driven visual experiences that make your brand physically memorable — the kind of site people screenshot and send to friends.",
  },
  {
    icon: CalendarCheck,
    tag: "Booking Systems",
    title: "Automated Booking Integrations",
    description:
      "Seamless lead capture and appointment scheduling wired directly into your site, so visitors convert into booked clients without a single phone call.",
  },
  {
    icon: Cpu,
    tag: "Architecture",
    title: "Full-Stack Architecture",
    description:
      "Fast, secure, and scalable builds on modern Python and JavaScript frameworks — engineered to stay reliable as your traffic and bookings grow.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="section-shell py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="eyebrow">Core Capabilities</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-primary sm:text-4xl">
          Everything your site needs to earn the booking, not just the visit.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-secondary">
          Four disciplines, one dedicated developer — no account managers, no
          hand-offs, no dilution.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {SERVICES.map((service) => (
          <motion.div key={service.title} variants={item}>
            <ServiceCard
              icon={service.icon}
              tag={service.tag}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
