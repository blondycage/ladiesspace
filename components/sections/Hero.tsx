"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineLines = ["A space for women", "to connect, grow", "and flourish."];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion()) {
      video.pause();
      return;
    }

    const restartVideo = () => {
      video.currentTime = 0;
      void video.play();
    };

    video.addEventListener("ended", restartVideo);
    return () => video.removeEventListener("ended", restartVideo);
  }, []);

  useGSAP(
    () => {
      registerGsap();
      if (prefersReducedMotion()) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-hero-word]",
          { yPercent: 115, opacity: 0, rotateX: -18 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.055,
            ease: "power4.out"
          }
        );
        gsap.fromTo(
          "[data-hero-title-line]",
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 0.95,
            stagger: 0.09,
            ease: "power3.out"
          }
        );
        gsap.fromTo(
          "[data-hero-reveal]",
          { y: 34, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            delay: 0.18,
            ease: "power3.out"
          }
        );
        gsap.to("[data-hero-word]", {
          y: -2,
          duration: 1.15,
          stagger: 0.025,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1,
          delay: 1.05
        });
        gsap.fromTo(
          "[data-hero-video]",
          { scale: 1.08, opacity: 0.62 },
          { scale: 1.015, opacity: 0.92, duration: 1.35, ease: "power2.out" }
        );
        gsap.fromTo(
          "[data-hero-line]",
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            transformOrigin: "left center"
          }
        );
      }, root);
      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative isolate min-h-[84vh] overflow-hidden bg-burgundy-deep text-ivory"
    >
      <video
        ref={videoRef}
        data-hero-video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/IMG_9465.MOV"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(100,16,29,0.93)_0%,rgba(100,16,29,0.72)_44%,rgba(100,16,29,0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-burgundy-deep via-burgundy-deep/42 to-transparent"
      />

      <div className="container-page flex min-h-[84vh] flex-col justify-end pb-10 pt-24 sm:pb-12 lg:pt-32">
        <div className="max-w-4xl">
          <p
            data-hero-reveal
            className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-blush-light"
          >
            Women-centred community ecosystem
          </p>
          <h1
            className="font-display text-[clamp(3.35rem,8vw,6.85rem)] font-semibold leading-[0.9] text-ivory"
          >
            {headlineLines.map((line) => (
              <span
                key={line}
                data-hero-title-line
                className="block overflow-hidden pb-[0.04em]"
              >
                {line.split(" ").map((word, index) => (
                  <span key={`${line}-${word}-${index}`} className="inline-block overflow-hidden">
                    <span data-hero-word className="inline-block will-change-transform">
                      {word}
                      {index < line.split(" ").length - 1 ? "\u00A0" : ""}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p
            data-hero-reveal
            className="mt-7 max-w-2xl text-lg leading-8 text-ivory/82 sm:text-xl"
          >
            Ladies’ Space is a women-centred community ecosystem in The Gambia,
            creating intentional experiences, meaningful connections and pathways to
            opportunity.
          </p>
          <div data-hero-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#community" variant="light">
              Join the Community
            </Button>
            <Button href="#ecosystem" variant="lightOutline">
              Explore Our Ecosystem
            </Button>
          </div>
        </div>

        <div
          data-hero-reveal
          className="mt-14 grid gap-4 border-t border-ivory/24 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory/78 sm:grid-cols-4"
        >
          {["Community", "Growth", "Visibility", "Opportunity"].map((label) => (
            <div key={label}>
              <span data-hero-line className="mb-3 block h-px w-full bg-blush-light/70" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
