"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Solid blue -> teal gradient body with a resting + hover gold glow.
  primary:
    "bg-signal-gradient text-white shadow-gold-glow hover:shadow-gold-glow-lg border border-transparent",
  // Gold outline — reserved for secondary CTAs (nav "Book a Discovery Call", etc.)
  outline:
    "bg-transparent text-gold border border-gold/70 hover:bg-gold/10 hover:border-gold hover:shadow-gold-glow",
  // Quiet text-only action, e.g. "View Portfolio"
  ghost:
    "bg-transparent text-ink-primary border border-surface-border hover:border-teal-bright/60 hover:text-teal-bright",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Shared CTA button. Renders as a Next.js <Link> when `href` is provided,
 * otherwise as a native <button> (used for the contact form submit action).
 */
export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  loading = false,
  disabled = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-wide",
    "transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className ?? undefined
  );

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {loading && (
        <span
          className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  );
}
