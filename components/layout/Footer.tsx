import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { navItems, siteConfig, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="bg-burgundy-deep text-ivory">
      <div className="container-page section-pad">
        <div className="grid gap-12 border-b border-ivory/15 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-7 max-w-sm text-base leading-7 text-ivory/78">
              A women-centred community ecosystem creating intentional experiences,
              meaningful connections and pathways to opportunity.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid gap-3 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blush">
              Explore
            </p>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="link-underline w-fit text-ivory/82">
                {item.label}
              </a>
            ))}
            <a href="#community" className="link-underline w-fit text-ivory/82">
              Newsletter
            </a>
          </nav>
          <div className="grid content-start gap-5 text-sm text-ivory/82">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blush">
              Connect
            </p>
            <a href={`mailto:${siteConfig.email}`} className="link-underline w-fit">
              {siteConfig.email}
            </a>
            <p>{siteConfig.location}</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-ivory/82 transition hover:text-ivory"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8 text-xs text-ivory/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ladies’ Space. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="link-underline">
              Privacy
            </a>
            <a href="#" className="link-underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
