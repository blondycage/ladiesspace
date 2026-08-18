"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
              end: "bottom center"
            }
          }
        );
      });
    },
    { scope: root }
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % ecosystemPillars.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="ecosystem" ref={root} className="section-pad">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="display-heading mt-5 max-w-xl text-[clamp(2.8rem,5.2vw,5rem)]">
              Ladies’ Space 
            </h2>
           
           
            <div className="mt-8 border border-burgundy/12 bg-blush-light p-3 sm:mt-10">
              <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[4/5]">
                <Image
                  key={`${activePillar.title}-${activePillar.image}`}
                  src={activePillar.image}
                  alt={`Photography representing ${activePillar.title.toLowerCase()} within the Ladies’ Space ecosystem`}
                  fill
                  sizes="(min-width: 1024px) 34vw, 92vw"
                  loading="eager"
                  className="object-cover transition duration-500"
                />
                
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {ecosystemPillars.map((pillar, index) => (
                  <button
                    key={`${pillar.title}-${pillar.image}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 flex-1 basis-8 border transition duration-300 sm:w-10 sm:flex-none ${
                      index === activeIndex
                        ? "border-burgundy bg-burgundy"
                        : "border-burgundy/20 bg-ivory hover:bg-burgundy/10"
                    }`}
                    aria-label={`Show ecosystem image ${index + 1}`}
                    aria-pressed={index === activeIndex}
                  />
                ))}
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
           
            <div className="grid gap-8">
            <div className="border border-burgundy/14 bg-[#fffaf5] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
               Our Mission
              </p>
              <p className="mt-4 font-display text-md  leading-tight  sm:text-4xl">
                To empower women through transformative experiences and intentional
                initiatives that foster growth, strengthen connections, expand access
                and inspire meaningful impact.
              </p>
            </div>

            

            
          </div>
          </div>

          <div className="grid gap-8">
            <div className="border border-burgundy/14 bg-[#fffaf5] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
               Our Vision
              </p>
              <p className="mt-4 font-display text-md leading-tight  sm:text-4xl">
              To build a leading women-centred ecosystem that connects, elevates, and equips women to flourish personally and professionally, while driving meaningful change within their communities and beyond.
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

            
          </div>
        </div>
      </div>
    </section>
  );
}
