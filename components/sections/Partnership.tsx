import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Partnership() {
  return (
    <section className="section-pad bg-blush-light/55">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:items-center lg:gap-14">
          <div data-parallax="soft">
            <SectionLabel>Partnerships</SectionLabel>
            <div className="relative mt-7 aspect-[1280/853] overflow-hidden border border-burgundy/12 bg-ivory shadow-[0_22px_64px_rgba(89,9,20,0.1)]">
              <Image
                src="/images/partner.jpeg"
                alt="Ladies' Space partnership graphic inviting collaborators to build with the community"
                fill
                sizes="(min-width: 1280px) 760px, (min-width: 1024px) 58vw, 92vw"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
          <div className="lg:max-w-md" data-parallax="reverse">
           
            <h2 className="max-w-2xl text-lg leading-8 text-burgundy/75 lg:text-xl lg:leading-9">
              We collaborate with organisations and individuals who share our commitment
              to women's growth, wellbeing, access to opportunities and community impact.
            </h2>
            <div className="mt-9 flex flex-col gap-4  pt-7 sm:flex-row sm:items-center sm:justify-between">
                
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
