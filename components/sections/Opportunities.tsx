"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations";
import { images } from "@/lib/data";

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
          <div data-opportunity-row>
            <SectionLabel>Opportunities</SectionLabel>
            <h2 className="display-heading mt-5 max-w-2xl text-[clamp(2.9rem,6vw,5.8rem)]">
            Access creates opportunities. Visibility opens doors
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-charcoal/75">
            Discover opportunities, amplify your voice, and connect with women who can help you grow.

            </p>
            <Button
              href="mailto:hello@ladiesspace.site?subject=Opportunities%20with%20Ladies'%20Space"
              className="mt-8"
            >
              Contact us for opportunities
            </Button>
          </div>

          <div
            className="relative min-h-[24rem] overflow-hidden border border-burgundy/12 bg-blush-light shadow-[0_22px_56px_rgba(89,9,20,0.08)] sm:min-h-[30rem] lg:min-h-[36rem]"
            data-opportunity-row
          >
            <Image
              src={images.opportunities.src}
              alt={images.opportunities.alt}
              fill
              sizes="(min-width: 1024px) 54vw, 92vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(100,16,29,0.02)_0%,rgba(100,16,29,0.24)_100%)]" />
            
          </div>
        </div>
      </div>
    </section>
  );
}
