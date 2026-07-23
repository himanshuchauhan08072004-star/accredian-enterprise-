import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

type ButtonAsButton = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_8px_24px_-8px_rgba(38,71,214,0.55)] hover:bg-brand-700 hover:shadow-[0_12px_28px_-8px_rgba(38,71,214,0.65)] active:bg-brand-800",
  secondary:
    "bg-white text-brand-700 border border-surface-border shadow-sm hover:bg-brand-50 hover:border-brand-200",
  outline: "bg-transparent text-brand-700 border border-brand-300 hover:bg-brand-50",
  ghost: "bg-transparent text-foreground hover:bg-surface-muted",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm gap-2",
  lg: "h-13 px-8 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const sharedClassName = cn(
      "inline-flex items-center justify-center rounded-(--radius-btn) font-semibold whitespace-nowrap transition-all duration-200 ease-out cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
      "focus-visible:outline-2 focus-visible:outline-brand-500 focus-visible:outline-offset-2",
      VARIANT_STYLES[variant],
      SIZE_STYLES[size],
      className,
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={sharedClassName}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={sharedClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
