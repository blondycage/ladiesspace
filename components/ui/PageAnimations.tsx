"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion, registerGsap, ScrollTrigger } from "@/lib/animations";

export function PageAnimations() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2
          }
        }
      );
    }

    gsap.utils.toArray<HTMLElement>("main section:not(:first-child) > .container-page").forEach(
      (section) => {
        gsap.fromTo(
          section,
          { y: 28, opacity: 0.86 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true
            }
          }
        );
      }
    );

    gsap.utils.toArray<HTMLElement>("main h2, main blockquote").forEach((heading) => {
      gsap.fromTo(
        heading,
        { y: 26, clipPath: "inset(0 0 18% 0)", opacity: 0.78 },
        {
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 84%",
            once: true
          }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".fine-line, [data-hero-line]").forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.75,
          ease: "power3.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: line,
            start: "top 88%",
            once: true
          }
        }
      );
    });

    gsap.utils
      .toArray<HTMLElement>(
        "[data-pillar-row], [data-opportunity-row], #experiences .group, #impact .grid > div"
      )
      .forEach((item, index) => {
        gsap.fromTo(
          item,
          { y: 18, opacity: 0.72 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            delay: (index % 6) * 0.018,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true
            }
          }
        );
      });

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        const heroVideo = document.querySelector<HTMLElement>("[data-hero-video]");
        if (heroVideo) {
          gsap.to(heroVideo, {
            yPercent: 10,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: heroVideo.closest("section") ?? heroVideo,
              start: "top top",
              end: "bottom top",
              scrub: 0.65
            }
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-media-reveal]").forEach((media) => {
          const image = media.querySelector("img");
          if (!image) return;

          gsap.fromTo(
            image,
            { yPercent: -7, scale: 1.08 },
            {
              yPercent: 7,
              scale: 1.08,
              ease: "none",
              scrollTrigger: {
                trigger: media,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
          const speed = element.dataset.parallax ?? "soft";
          const distances: Record<string, number> = {
            soft: 28,
            medium: 44,
            strong: 64,
            reverse: -34
          };
          const distance = distances[speed] ?? distances.soft;

          gsap.fromTo(
            element,
            { y: -distance },
            {
              y: distance,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.75
              }
            }
          );
        });
      }
    });
  });

  return (
    <div
      ref={progressRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[80] h-[3px] w-full origin-left bg-champagne"
    />
  );
}
