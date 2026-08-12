import { ImageReveal } from "@/components/ui/ImageReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { images, impactAreas } from "@/lib/data";

export function Impact() {
  return (
    <section id="impact" className="section-pad bg-burgundy-deep text-ivory">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-parallax="reverse">
            <SectionLabel className="text-blush">Community Impact</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] text-ivory">
              Impact beyond the event.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/78">
              Events are one vehicle for impact. Our goal is to build a sustainable
              ecosystem that expands access, creates awareness, enhances knowledge,
              strengthens community and equips women to create meaningful change.
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

          <div data-parallax="soft">
            <ImageReveal
              src={images.impact.src}
              alt={images.impact.alt}
              width={960}
              height={1120}
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="aspect-[5/6] border border-ivory/18 bg-burgundy"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
}
