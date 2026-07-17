import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  tone?: "light" | "dark";
};

export function Logo({ compact = false, tone = "light" }: LogoProps) {
  const isDark = tone === "dark";

  return (
    <Link
      href="/"
      aria-label="Ladies’ Space home"
      className={`group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 ${
        isDark
          ? "focus-visible:ring-champagne focus-visible:ring-offset-burgundy-deep"
          : "focus-visible:ring-burgundy focus-visible:ring-offset-ivory"
      } focus-visible:ring-offset-4`}
    >
      <span
        className={`relative block overflow-hidden border transition duration-300 ${
          compact ? "h-11 w-11" : "h-[52px] w-[160px] sm:w-[178px]"
        } ${isDark ? "border-ivory/20 bg-ivory" : "border-burgundy/10 bg-ivory"}`}
      >
        <Image
          src={compact ? "/brand/generated/logo-icon.png" : "/brand/generated/logo-horizontal.png"}
          alt=""
          fill
          sizes={compact ? "44px" : "196px"}
          className={compact ? "object-cover" : "object-contain"}
          priority
        />
      </span>
    </Link>
  );
}
