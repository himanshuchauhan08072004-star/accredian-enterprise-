import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.6-1.56h1.7V3.14A22.7 22.7 0 0 0 14.1 3c-2.4 0-4.05 1.47-4.05 4.16v2.44H7.3v3.2h2.75V21h3.45Z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.5 6.2c-.66.3-1.36.5-2.1.6a3.6 3.6 0 0 0 1.6-2 7.3 7.3 0 0 1-2.3.9 3.6 3.6 0 0 0-6.2 3.3A10.3 10.3 0 0 1 4 4.9a3.6 3.6 0 0 0 1.1 4.8c-.58-.02-1.13-.18-1.6-.44v.05a3.6 3.6 0 0 0 2.9 3.5c-.5.15-1.06.17-1.6.06a3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 3 16.9a10.3 10.3 0 0 0 5.6 1.6c6.7 0 10.4-5.6 10.4-10.4v-.5a7.4 7.4 0 0 0 1.8-1.9Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3v11.5h-3V9Zm6.5 0h2.9v1.57h.04c.4-.76 1.4-1.57 2.9-1.57 3.1 0 3.66 2 3.66 4.7v6.8h-3v-6c0-1.44-.03-3.3-2.02-3.3-2.02 0-2.33 1.58-2.33 3.2v6.1h-3V9Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.7a2.7 2.7 0 0 0-1.9-1.9C18 5.3 12 5.3 12 5.3s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 9.4 2 12 2 12s0 2.6.4 4.3c.2.9 1 1.7 1.9 1.9 1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.3.4-4.3s0-2.6-.4-4.3ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}
