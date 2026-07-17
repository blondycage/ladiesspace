"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations";
import { opportunities } from "@/lib/data";

export function Opportunities() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-opportunity-row]",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            once: true
          }
        }
      );
    },
    { scope: root }
  );

  return (
    <section id="opportunities" ref={root} className="section-pad bg-ivory">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Opportunities</SectionLabel>
            <h2 className="display-heading mt-5 max-w-2xl text-[clamp(2.9rem,6vw,5.8rem)]">
              Visibility opens doors. Access creates possibility.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-charcoal/75">
              This directory treatment is ready for real opportunities when they are
              supplied. Until then, it avoids presenting sample content as active
              offers.
            </p>
            <Button href="#" className="mt-8">
              View Opportunities
            </Button>
          </div>

          <div className="border border-burgundy/15 bg-[#fffaf5]">
            <div className="flex items-center justify-between border-b border-burgundy/15 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
                Future opportunity board
              </p>
              <p className="text-xs text-charcoal/60">Placeholder content</p>
            </div>
            {opportunities.map((item) => (
              <article
                key={item.title}
                data-opportunity-row
                className="group grid gap-3 border-b border-burgundy/12 p-5 last:border-b-0 md:grid-cols-[8rem_1fr_auto] md:items-start"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
                  {item.category}
                </p>
                <div>
                  <h3 className="font-display text-3xl font-semibold leading-none text-burgundy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/72">{item.description}</p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 text-burgundy transition duration-300 group-hover:translate-x-1"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
