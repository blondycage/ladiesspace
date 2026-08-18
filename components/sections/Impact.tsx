"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { impactAreas, impactSlides } from "@/lib/data";

export function Impact() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % impactSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const currentSlide = impactSlides[activeSlide];

  return (
    <section id="impact" className="section-pad bg-burgundy-deep text-ivory">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-parallax="reverse">
            <SectionLabel className="text-blush">Community Impact</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] text-ivory">
              Impact beyond the event.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/78">Giving back is at the heart of Ladies’ Space.</p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/78">
            At the 1st edition of our Women’s Brunch, 30% of event proceeds, alongside contributions from our community, supported women receiving maternity care at Bundung Maternity and Child Health Hospital.
            </p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/78">This reflects our ongoing commitment to creating meaningful impact for women and our wider community.</p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/78">
              When women come together, the impact can go further.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {impactAreas.map((area) => (
                <div
                  key={area}
                  className="border border-ivory/16 px-4 py-3 text-sm text-ivory/82"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4" data-parallax="soft">
            <div className="relative overflow-hidden border border-ivory/18 bg-burgundy shadow-[0_22px_56px_rgba(0,0,0,0.16)]">
              <div className="relative aspect-[5/6] min-h-[20rem] sm:min-h-[28rem]">
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover object-center transition duration-700 ease-out"
                  priority={activeSlide === 0}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(100,16,29,0.02)_0%,rgba(100,16,29,0.38)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 border-t border-ivory/16 bg-burgundy-deep/74 px-4 py-4 backdrop-blur-sm sm:px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blush-light/80">
                    Ladies’ Space Give Back
                  </p>
                  <p className="mt-2 text-lg font-medium leading-7 text-ivory">
                    {currentSlide.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {impactSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 flex-1 basis-10 border transition duration-300 sm:w-12 sm:flex-none ${
                    index === activeSlide
                      ? "border-blush-light bg-blush-light"
                      : "border-ivory/24 bg-ivory/10 hover:bg-ivory/22"
                  }`}
                  aria-label={`Show impact image ${index + 1}`}
                  aria-pressed={index === activeSlide}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
