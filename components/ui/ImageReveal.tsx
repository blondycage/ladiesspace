"use client";

import Image, { type ImageProps } from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations";

type ImageRevealProps = Omit<ImageProps, "className" | "fill" | "width" | "height"> & {
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
};

export function ImageReveal({
  className = "",
  imageClassName = "",
  alt,
  sizes,
  width,
  height,
  ...props
}: ImageRevealProps) {
  const root = useRef<HTMLDivElement>(null);
  void width;
  void height;

  useGSAP(
    () => {
      registerGsap();
      if (prefersReducedMotion()) return;
      const el = root.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { clipPath: "inset(12% 0 12% 0)" },
        {
          clipPath: "inset(0% 0 0% 0)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true
          }
        }
      );

      const img = el.querySelector("img");
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.04 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              once: true
            }
          }
        );
      }
    },
    { scope: root }
  );

  return (
    <div ref={root} data-media-reveal className={`relative overflow-hidden ${className}`}>
      <Image
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        className={`h-full w-full object-cover ${imageClassName}`}
        {...props}
      />
    </div>
  );
}
