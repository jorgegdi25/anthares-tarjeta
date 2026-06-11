import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.7
};

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M20 11.6A8 8 0 0 1 8 18.5L4 20l1.6-3.8A8 8 0 1 1 20 11.6Z" />
      <path
        {...baseProps}
        d="M9 8.9c.2-.4.4-.4.7-.4h.6c.2 0 .4 0 .6.5l.6 1.5c.1.2.1.4 0 .5l-.4.6c-.1.2-.2.3 0 .5.3.7 1.1 1.7 2.2 2.4.2.1.3.1.5 0l.8-.4c.2-.1.3-.1.5 0l1.4.7c.2.1.4.2.4.5v.5c0 .3-.2.5-.5.7-.4.2-.9.3-1.4.2-1.1-.2-2.7-.9-4.3-2.5-1.4-1.4-2.1-3-2.3-4.1-.1-.5 0-1 .2-1.4Z"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect {...baseProps} x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle {...baseProps} cx="12" cy="12" r="3.8" />
      <path {...baseProps} d="M17.3 6.9h.01" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M14 4.5c.5 1.5 1.6 3 3.6 3.5v2.5c-1.5 0-2.6-.4-3.6-1.2v5.2a4.5 4.5 0 1 1-4.5-4.5c.3 0 .7 0 1 .1v2.6a2.2 2.2 0 1 0 1.2 2v-10H14Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M14.4 8H16V5.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V12H7v2.8h2.6v5.8h3V14.8H15l.4-2.8h-2.8V10c0-.8.2-1.4 1.8-1.4Z" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle {...baseProps} cx="12" cy="12" r="9" />
      <path {...baseProps} d="M3.5 12h17" />
      <path {...baseProps} d="M12 3c2.7 2.6 4.1 5.6 4.1 9S14.7 18.4 12 21c-2.7-2.6-4.1-5.6-4.1-9S9.3 5.6 12 3Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle {...baseProps} cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path {...baseProps} d="M5 12h14" />
      <path {...baseProps} d="m12 5 7 7-7 7" />
    </svg>
  );
}
