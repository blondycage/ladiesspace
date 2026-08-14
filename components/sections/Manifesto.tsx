"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RevealText } from "@/components/ui/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { manifestoSlides } from "@/lib/data";

export function Manifesto() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % manifestoSlides.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, []);

  const currentSlide = manifestoSlides[activeSlide];

  return (
    <section id="about" className="section-pad border-y border-burgundy/10 bg-ivory">
      <div className="container-page grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <div className="lg:sticky lg:top-32" data-parallax="soft">
          <SectionLabel>Why Ladies’ Space</SectionLabel>
          <div className="fine-line mt-7" />
          <div className="relative mt-8 overflow-hidden border border-burgundy/12 bg-blush-light">
            <div className="relative aspect-[4/5]">
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt}
                fill
                sizes="(min-width: 1024px) 32vw, 92vw"
                className="object-cover object-center transition duration-700 ease-out"
                priority={activeSlide === 0}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(100,16,29,0.02)_0%,rgba(100,16,29,0.2)_100%)]" />
            </div>

            <div className="absolute bottom-4 left-4 flex gap-2">
              {manifestoSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-9 border transition duration-300 ${
                    index === activeSlide
                      ? "border-ivory bg-ivory"
                      : "border-ivory/55 bg-charcoal/20 hover:bg-ivory/45"
                  }`}
                  aria-label={`Show manifesto image ${index + 1}`}
                  aria-pressed={index === activeSlide}
                />
              ))}
            </div>
          </div>
        </div>
        <div data-parallax="reverse">
          <RevealText
            as="h2"
            className="display-heading max-w-4xl text-[clamp(2.95rem,6vw,5.9rem)]"
          >
            Women flourish when access, support and community come together
          </RevealText>
          <div className="mt-10 grid gap-8 text-lg leading-8 text-charcoal/78 md:grid-cols-2">
            <p>
              Ladies’ Space helps women build meaningful relationships, access
              knowledge, and pursue opportunities with dignity and care.
            </p>
            <p>
              It is a growing ecosystem for connection, growth, learning and community
              impact, shaped for women in The Gambia and beyond.
            </p>
          </div>
          <blockquote className="mt-14 border-l border-burgundy pl-6 font-display text-4xl font-medium leading-tight text-burgundy sm:text-5xl">
            “Meaningful connections create opportunities.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
