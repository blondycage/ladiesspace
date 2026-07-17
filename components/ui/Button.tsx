import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type AnchorHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "lightOutline";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-ivory border-burgundy hover:bg-burgundy-deep hover:border-burgundy-deep",
  secondary:
    "bg-transparent text-burgundy border-burgundy/35 hover:border-burgundy hover:bg-blush-light",
  ghost:
    "bg-transparent text-burgundy border-transparent hover:border-burgundy/30 hover:bg-blush-light/70",
  light:
    "bg-ivory text-burgundy border-ivory hover:bg-blush-light hover:border-blush-light",
  lightOutline:
    "bg-transparent text-ivory border-ivory/55 hover:border-ivory hover:bg-ivory/10"
};

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 text-sm font-medium transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-4 focus-visible:ring-offset-ivory ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </Link>
  );
}
