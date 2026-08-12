import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Partnership() {
  return (
    <section className="section-pad bg-blush-light/55">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-parallax="soft">
            <SectionLabel>Partnerships</SectionLabel>
          </div>
          <div data-parallax="reverse">
            <h2 className="display-heading max-w-4xl text-[clamp(2.9rem,6vw,5.6rem)]">
              Build meaningful impact with us.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/75">
              We collaborate with organisations and individuals who share our
              commitment to women’s growth, wellbeing, access and community impact.
            </p>
            <div className="mt-9 flex flex-col gap-4 border-t border-burgundy/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-charcoal/65">
                  We collaborate with organisations and individuals who share our commitment to women’s growth, wellbeing, access and community impact.
                </p>
              <Button href={`mailto:patrners@ladiesspace.site?subject=Partnership%20with%20Ladies'%20Space`}>
                Partner With Ladies’ Space
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
