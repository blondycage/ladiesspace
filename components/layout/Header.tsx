"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/lib/data";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      setIsScrolled(currentScrollY > 24);

      if (!isDesktop || isOpen) {
        setIsNavHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollingDown = currentScrollY > lastScrollY.current;
      const movedEnough = Math.abs(currentScrollY - lastScrollY.current) > 8;

      if (currentScrollY < 140) {
        setIsNavHidden(false);
      } else if (movedEnough && scrollingDown) {
        setIsNavHidden(true);
      } else if (movedEnough && !scrollingDown) {
        setIsNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    previousFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-ivory transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:transform-gpu ${
        isNavHidden ? "lg:-translate-y-full" : "lg:translate-y-0"
      } ${
        isScrolled
          ? "border-burgundy/12 shadow-[0_8px_30px_rgba(89,9,20,0.08)] lg:bg-ivory/95 lg:backdrop-blur"
          : "border-burgundy/10 lg:bg-ivory/92 lg:backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex min-h-[78px] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm font-medium text-charcoal/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#community" showArrow={false}>
            Join the Community
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-burgundy/20 text-burgundy transition hover:bg-blush-light focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-4 focus-visible:ring-offset-ivory lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Open navigation menu"
          onClick={() => setIsOpen(true)}
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 bg-burgundy-deep text-ivory lg:hidden"
        >
          <div className="container-page flex min-h-screen flex-col py-5">
            <div className="flex items-center justify-between">
              <Logo tone="dark" />
              <button
                ref={closeButtonRef}
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center border border-ivory/25 transition hover:bg-ivory/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile primary navigation" className="mt-14 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-t border-ivory/15 py-5 font-display text-4xl font-semibold leading-none text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#community"
              onClick={() => setIsOpen(false)}
              className="mt-auto inline-flex min-h-12 items-center justify-center border border-ivory bg-ivory px-5 py-3 text-sm font-semibold text-burgundy focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              Join the Community
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
