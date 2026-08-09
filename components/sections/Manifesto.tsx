import { ImageReveal } from "@/components/ui/ImageReveal";
import { RevealText } from "@/components/ui/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { images } from "@/lib/data";

export function Manifesto() {
  return (
    <section id="about" className="section-pad border-y border-burgundy/10 bg-ivory">
      <div className="container-page grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <div className="lg:sticky lg:top-32" data-parallax="soft">
          <SectionLabel>Why Ladies’ Space</SectionLabel>
          <div className="fine-line mt-7" />
          <ImageReveal
            src={images.manifesto.src}
            alt={images.manifesto.alt}
            width={720}
            height={900}
            sizes="(min-width: 1024px) 32vw, 92vw"
            className="mt-8 aspect-[4/5] border border-burgundy/12 bg-blush-light"
          />
        </div>
        <div data-parallax="reverse">
          <RevealText
            as="h2"
            className="display-heading max-w-4xl text-[clamp(2.95rem,6vw,5.9rem)]"
          >
            Women flourish when access, support and community come together.
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
