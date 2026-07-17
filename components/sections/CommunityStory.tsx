import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { images, placeholderStory } from "@/lib/data";

export function CommunityStory() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-page">
        <div className="grid gap-10 border-y border-burgundy/15 py-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:py-16">
          <div
            className="relative aspect-[4/5] max-w-sm overflow-hidden border border-burgundy/12 bg-blush-light"
            data-parallax="soft"
          >
            <Image
              src={images.story.src}
              alt={images.story.alt}
              fill
              sizes="(min-width: 1024px) 28vw, 80vw"
              className="object-cover"
            />
          </div>
          <div data-parallax="reverse">
            <SectionLabel>Community Story</SectionLabel>
            <blockquote className="mt-6 max-w-4xl font-display text-[clamp(2.45rem,5.2vw,4.9rem)] font-semibold leading-[0.96] text-burgundy">
              “{placeholderStory.quote}”
            </blockquote>
            <div className="mt-8 grid gap-5 md:grid-cols-[14rem_1fr]">
              <div>
                <p className="font-semibold text-burgundy">{placeholderStory.name}</p>
                <p className="mt-1 text-sm text-charcoal/62">{placeholderStory.role}</p>
              </div>
              <p className="max-w-2xl text-base leading-7 text-charcoal/75">
                {placeholderStory.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
