import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Partnership() {
  return (
    <section className="section-pad bg-blush-light/55">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div data-parallax="soft">
            <SectionLabel>Partnerships</SectionLabel>
            <div className="relative mt-7 aspect-[3/2] overflow-hidden border border-burgundy/12 bg-ivory shadow-[0_18px_48px_rgba(89,9,20,0.08)]">
              <Image
                src="/images/partner.jpeg"
                alt="Ladies' Space partnership graphic inviting collaborators to build with the community"
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-contain object-center"
              />
            </div>
          </div>
          <div data-parallax="reverse">
           
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/75">
              We collaborate with organisations and individuals who share our
              commitment to women’s growth, wellbeing, access and community impact.
            </p>
            <div className="mt-9 flex flex-col gap-4 border-t border-burgundy/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
                
              <Button href="mailto:partnerships@ladiesspace.site?subject=Partnership%20with%20Ladies'%20Space">
                Build with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
