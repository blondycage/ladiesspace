"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations";

type RevealTextProps = {
  children: string;
  as?: "p" | "h2" | "h3";
  className?: string;
};

export function RevealText({
  children,
  as: Tag = "p",
  className = ""
}: RevealTextProps) {
  const root = useRef<HTMLElement>(null);
  const lines = children.split(" ");

  useGSAP(
    () => {
      registerGsap();
      if (prefersReducedMotion()) return;
      const words = root.current?.querySelectorAll("[data-word]");
      if (!words?.length) return;

      gsap.fromTo(
        words,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.018,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 78%",
            once: true
          }
        }
      );
    },
    { scope: root }
  );

  return (
    <Tag ref={root as never} className={className}>
      {lines.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <span data-word className="inline-block">
            {word}
            {index < lines.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
