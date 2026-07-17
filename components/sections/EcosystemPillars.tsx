"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ecosystemPillars } from "@/lib/data";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations";

export function EcosystemPillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const root = useRef<HTMLElement>(null);
  const activePillar = ecosystemPillars[activeIndex];

  const label = useMemo(
    () => `${String(activeIndex + 1).padStart(2, "0")} / ${String(ecosystemPillars.length).padStart(2, "0")}`,
    [activeIndex]
  );

  useGSAP(
    () => {
      registerGsap();
      if (prefersReducedMotion()) return;

      const rows = gsap.utils.toArray<HTMLElement>("[data-pillar-row]");
      rows.forEach((row, index) => {
        gsap.fromTo(
          row,
          { opacity: 0.55 },
          {
            opacity: 1,
            duration: 0.45,
            scrollTrigger: {
              trigger: row,
              start: "top center",
              end: "bottom center",
              onEnter: () => setActiveIndex(index),
              onEnterBack: () => setActiveIndex(index)
            }
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section id="ecosystem" ref={root} className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel>Our Ecosystem</SectionLabel>
            <h2 className="display-heading mt-5 max-w-xl text-[clamp(2.8rem,5.2vw,5rem)]">
              Seven ways the community becomes a pathway.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-charcoal/75">
              Each pillar supports the same purpose: helping women connect, grow,
              gain visibility and access opportunities without losing the warmth of
              community.
            </p>
            <div className="mt-10 hidden border border-burgundy/12 bg-blush-light p-3 lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  key={activePillar.image}
                  src={activePillar.image}
                  alt={`Photography representing ${activePillar.title.toLowerCase()} within the Ladies’ Space ecosystem`}
                  fill
                  sizes="34vw"
                  loading="eager"
                  className="object-cover transition duration-500"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-burgundy/12 pt-4">
                <span className="font-display text-5xl text-burgundy">{label}</span>
                <span className="max-w-[10rem] text-right text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/70">
                  Active pillar
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-burgundy/20">
            {ecosystemPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  data-pillar-row
                  className="group grid gap-4 border-b border-burgundy/20 py-7 md:grid-cols-[7rem_1fr_auto] md:items-start md:py-9"
                >
                  <span className="font-display text-5xl font-semibold leading-none text-burgundy/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-4xl font-semibold leading-none text-burgundy sm:text-5xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-charcoal/74">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center border border-burgundy/20 text-burgundy transition group-hover:bg-blush-light">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
