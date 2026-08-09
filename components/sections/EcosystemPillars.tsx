"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ecosystemFlow, ecosystemPillars } from "@/lib/data";
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
              Ladies’ Space Ecosystem Map.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-charcoal/75">
              A strategic snapshot of how programmes, experiences and initiatives
              work together through five impact pillars.
            </p>
            <a
              href="#ecosystem-flow"
              className="link-underline mt-6 inline-flex text-sm font-semibold text-burgundy"
            >
              Please click the LS Ecosystem Map (V1) for details
            </a>
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
                    <div className="mt-5 flex flex-wrap gap-2">
                      {pillar.initiatives.map((initiative) => (
                        <span
                          key={initiative}
                          className="border border-burgundy/18 bg-ivory px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-burgundy/85"
                        >
                          {initiative}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center border border-burgundy/20 text-burgundy transition group-hover:bg-blush-light">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          id="ecosystem-flow"
          className="mt-16 grid gap-8 border-y border-burgundy/18 py-10 lg:grid-cols-[0.84fr_1.16fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
              Purpose
            </p>
            <h3 className="mt-4 font-display text-4xl font-semibold leading-none text-burgundy sm:text-5xl">
              Five impact pillars, one connected pathway.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-7 text-charcoal/74">
              The Ladies’ Space Ecosystem Map provides a high-level overview of how
              the organisation creates value for women through its five impact pillars
              and core initiatives.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-charcoal/74">
              It serves as a strategic snapshot of the ecosystem, with detailed
              descriptions, operational guidance and implementation processes held in
              the Ladies’ Space Ecosystem Framework and Standard Operating Procedures.
            </p>
          </div>

          <div className="grid gap-8">
            <div className="border border-burgundy/14 bg-[#fffaf5] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
                Mission
              </p>
              <p className="mt-4 font-display text-3xl font-semibold leading-tight text-burgundy sm:text-4xl">
                To empower women through transformative experiences and intentional
                initiatives that foster growth, strengthen connections, expand access
                and inspire meaningful impact.
              </p>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {ecosystemFlow.map((step, index) => (
                <li
                  key={step}
                  className="flex min-h-20 items-center gap-4 border border-burgundy/14 bg-ivory px-4 py-3"
                >
                  <span className="font-display text-3xl font-semibold text-burgundy/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold leading-5 text-charcoal/78">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <p className="border-l border-burgundy pl-5 text-base leading-7 text-charcoal/74">
              Every Ladies’ Space programme, experience, partnership, event and
              initiative should intentionally contribute to one or more of the five
              impact pillars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
