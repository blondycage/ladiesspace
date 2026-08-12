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
              Access creates possibility, Visibility opens doors
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-charcoal/75">
             Get access to opportunities, visibility and mentorship
            </p>
            <Button href="#" className="mt-8">
              Contact us for opportunities
            </Button>
          </div>

         
        </div>
      </div>
    </section>
  );
}
