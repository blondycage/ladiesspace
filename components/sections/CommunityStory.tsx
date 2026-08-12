import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { communityTestimonials, images } from "@/lib/data";

export function CommunityStory() {
  return (
    <section
      id="community-stories"
      className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,rgba(247,195,198,0.5)_0%,rgba(255,247,240,0.95)_100%)]"
    >
      <div className="container-page relative">
        <div className="relative isolate overflow-hidden border border-burgundy/12 bg-charcoal shadow-[0_22px_70px_rgba(63,17,24,0.12)]">
          <Image
            src={images.story.src}
            alt={images.story.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(63,17,24,0.86)_0%,rgba(63,17,24,0.54)_42%,rgba(63,17,24,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,195,198,0.34),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.16),transparent_30%)]" />

          <div className="relative grid gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.84fr] lg:items-end lg:px-14 lg:py-16">
            <div data-parallax="soft">
              <SectionLabel className="text-blush-light/85">Community Stories</SectionLabel>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(3rem,6vw,5.9rem)] font-semibold leading-[0.92] text-ivory">
                Real words from women who showed up, connected and left fuller
              </h2>
            </div>
            <p
              className="max-w-xl text-base leading-7 text-ivory/80 lg:justify-self-end lg:text-lg lg:leading-8"
              data-parallax="reverse"
            >
              These testimonials were extracted from the  feedback from our community and
              presented as a warm story wall that keeps the honesty and emotion of the
              originals.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {communityTestimonials.map((testimonial, index) => {
            const isFeatured = index === 0;
            return (
              <article
                key={`${testimonial.name}-${index}`}
                className={`group relative overflow-hidden border border-burgundy/14 bg-charcoal px-5 py-5 text-ivory shadow-[0_18px_42px_rgba(63,17,24,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(63,17,24,0.16)] sm:px-6 sm:py-6 ${
                  isFeatured ? "md:col-span-2 xl:col-span-1" : ""
                }`}
                data-parallax={index % 2 === 0 ? "soft" : "reverse"}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(209,79,106,0.85),rgba(212,175,55,0.65),rgba(255,255,255,0.15))]" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold leading-none text-ivory sm:text-xl">
                      {testimonial.name}
                    </p>
                  </div>
                  <span className="text-3xl leading-none text-blush-light/75">“</span>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-ivory/86 sm:text-base">
                  {testimonial.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-ivory/10 pt-4">
                  <span className="h-px flex-1 bg-ivory/12" />
                  <span className="text-sm font-medium text-blush-light/78">
                    {testimonial.accent}
                  </span>
                  <span className="h-px flex-1 bg-ivory/12" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
