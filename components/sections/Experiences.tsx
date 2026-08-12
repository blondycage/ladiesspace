"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experienceSlides, experiences } from "@/lib/data";

export function Experiences() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % experienceSlides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const currentSlide = experienceSlides[activeSlide];

  return (
    <section id="experiences" className="section-pad bg-blush-light/65">
      <div className="container-page">
        <div className="grid gap-8 border-b border-burgundy/14 pb-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-end">
          <div data-parallax="soft">
            <SectionLabel>Experiences</SectionLabel>
            <h2 className="display-heading mt-5 max-w-3xl text-[clamp(3rem,6vw,5.9rem)]">
              Intentional experiences, arranged to feel warm, social and alive
            </h2>
          </div>
         
        </div>

        <div className="mt-10 grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <div className="grid gap-5" data-parallax="soft">
            <div className="rounded-none border border-burgundy/14 bg-ivory/80 p-6 shadow-[0_14px_36px_rgba(89,9,20,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">
                Experience mix
              </p>
              <p className="mt-4 max-w-md text-base leading-7 text-charcoal/75">
                We ensure each gathering balances connection, learning and ease so people can
                arrive, settle in and leave inspired.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {experiences.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-start gap-4 border border-burgundy/14 bg-ivory px-4 py-4 shadow-[0_12px_28px_rgba(89,9,20,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(89,9,20,0.08)]"
                >
                  <span className="font-display text-2xl font-semibold leading-none text-burgundy/70 sm:text-3xl">
                    0{index + 1}
                  </span>
                  <span className="pt-1 text-sm font-medium leading-6 text-charcoal/82">
                    {item}
                  </span>
                </div>
              ))}
            </div>

           
          </div>

          <div className="grid gap-4" data-parallax="reverse">
            <div className="relative isolate overflow-hidden border border-burgundy/14 bg-charcoal shadow-[0_22px_56px_rgba(63,17,24,0.14)]">
              <div className="relative aspect-[4/5] min-h-[28rem]">
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  fill
                  sizes="(min-width: 1280px) 54vw, 92vw"
                  className="object-cover object-center transition duration-700 ease-out"
                  priority={activeSlide === 0}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,17,24,0.05)_0%,rgba(63,17,24,0.28)_54%,rgba(63,17,24,0.86)_100%)]" />

                <div className="absolute left-0 top-0 flex w-full items-start justify-between gap-4 p-4 sm:p-5">
                  <div className="rounded-none border border-ivory/18 bg-charcoal/35 px-3 py-2 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blush-light/78">
                      Slideshow
                    </p>
                    <p className="mt-1 text-sm font-medium text-ivory/90">
                      {activeSlide + 1} / {experienceSlides.length}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSlide(
                          (current) => (current - 1 + experienceSlides.length) % experienceSlides.length
                        )
                      }
                      className="grid h-10 w-10 place-items-center border border-ivory/20 bg-charcoal/35 text-ivory transition hover:bg-charcoal/55"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveSlide((current) => (current + 1) % experienceSlides.length)
                      }
                      className="grid h-10 w-10 place-items-center border border-ivory/20 bg-charcoal/35 text-ivory transition hover:bg-charcoal/55"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blush-light/75">
                      {currentSlide.title}
                    </p>
                    <p className="mt-3 max-w-lg text-lg leading-8 text-ivory/90 sm:text-xl">
                      {currentSlide.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {experienceSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-10 border transition duration-300 ${
                    index === activeSlide
                      ? "border-burgundy bg-burgundy"
                      : "border-burgundy/20 bg-ivory hover:bg-burgundy/10"
                  }`}
                  aria-label={`Show slide ${index + 1}`}
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
