import { Button } from "@/components/ui/Button";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experiences, images } from "@/lib/data";

export function Experiences() {
  return (
    <section id="experiences" className="section-pad bg-blush-light/70">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div data-parallax="soft">
            <SectionLabel>Experiences</SectionLabel>
            <h2 className="display-heading mt-5 max-w-3xl text-[clamp(2.9rem,6vw,5.7rem)]">
              Intentional experiences. Meaningful outcomes.
            </h2>
          </div>
          <p
            className="max-w-lg text-lg leading-8 text-charcoal/75 lg:justify-self-end"
            data-parallax="reverse"
          >
            From gatherings and workshops to leadership conversations, each experience
            is designed to move beyond attendance and create connection, knowledge and
            confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ImageReveal
            src={images.experiences.src}
            alt={images.experiences.alt}
            width={960}
            height={760}
            sizes="(min-width: 1024px) 45vw, 92vw"
            className="aspect-[5/4] border border-burgundy/12 bg-ivory"
          />
          <div className="lg:pt-10" data-parallax="medium">
            <div className="grid border-t border-burgundy/20">
              {experiences.map((item) => (
                <div
                  key={item}
                  className="group flex items-center justify-between gap-5 border-b border-burgundy/20 py-5"
                >
                  <span className="font-display text-3xl font-semibold leading-none text-burgundy sm:text-4xl">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-burgundy/40 transition duration-300 group-hover:w-16"
                  />
                </div>
              ))}
            </div>
            <Button href="#" variant="secondary" className="mt-8">
              Explore Our Experiences
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
