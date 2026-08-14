"use client";

import { FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/data";

type FormState = {
  firstName: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function CommunityCTA() {
  const [form, setForm] = useState<FormState>({ firstName: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const firstNameId = useId();
  const emailId = useId();

  function validate() {
    const nextErrors: FormErrors = {};
    if (!form.firstName.trim()) {
      nextErrors.firstName = "Enter your first name.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length === 0) {
      const subject = encodeURIComponent("Join the Ladies' Space community");
      const body = encodeURIComponent(
        `First name: ${form.firstName.trim()}\nEmail: ${form.email.trim()}`
      );
      setSubmitted(true);
      setForm({ firstName: "", email: "" });
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <section id="community" className="section-pad bg-ivory">
      <div className="container-page">
        <div className="grid gap-10 border border-burgundy/15 bg-burgundy px-5 py-10 text-ivory sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-14">
          <div>
            <SectionLabel className="text-blush">Join the Community</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,6vw,5.6rem)] font-semibold leading-[0.94] text-ivory">
              Your next connection could open a new possibility.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/78">
              Join a growing community of women learning, connecting, and creating
              impact.
            </p>
          </div>

          <form
            className="self-end border border-ivory/18 bg-ivory p-5 text-charcoal sm:p-7"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor={firstNameId} className="text-sm font-semibold text-burgundy">
                  First name
                </label>
                <input
                  id={firstNameId}
                  name="firstName"
                  value={form.firstName}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, firstName: event.target.value }))
                  }
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? `${firstNameId}-error` : undefined}
                  className="mt-2 min-h-12 w-full border border-burgundy/20 bg-transparent px-3 text-base outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/25"
                  autoComplete="given-name"
                />
                {errors.firstName ? (
                  <p id={`${firstNameId}-error`} className="mt-2 text-sm text-burgundy">
                    {errors.firstName}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={emailId} className="text-sm font-semibold text-burgundy">
                  Email address
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${emailId}-error` : undefined}
                  className="mt-2 min-h-12 w-full border border-burgundy/20 bg-transparent px-3 text-base outline-none transition focus:border-burgundy focus:ring-2 focus:ring-burgundy/25"
                  autoComplete="email"
                />
                {errors.email ? (
                  <p id={`${emailId}-error`} className="mt-2 text-sm text-burgundy">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center border border-burgundy bg-burgundy px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-burgundy-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
              >
                Join the Community
              </button>

              {submitted ? (
                <p role="status" className="text-sm leading-6 text-burgundy">
                  Thank you. Your email app should open with your community request
                  addressed to {siteConfig.email}.
                </p>
              ) : null}
            </div>
          </form>
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="#about" variant="ghost">
            Return to the beginning
          </Button>
        </div>
      </div>
    </section>
  );
}
