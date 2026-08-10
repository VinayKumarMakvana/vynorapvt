/**
 * Shared, framework-agnostic helpers used across components.
 */

/**
 * Merge conditional class name fragments into a single string.
 * Deliberately dependency-free (no clsx/tailwind-merge) to keep the
 * template's install footprint small — swap in tailwind-merge later
 * if class conflicts become an issue at scale.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Very small RFC-5322-ish email check for client-side form validation.
 * The API route still treats all input as untrusted and should not rely
 * on this alone.
 */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Normalizes a website URL entered by a lead so nodemailer / display
 * logic doesn't choke on missing protocols.
 */
export function normalizeUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}
