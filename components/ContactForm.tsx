"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const loanOptions = [
  "Personal Loan",
  "Emergency Loan",
  "Small Business Starter",
  "Auto Title Loan",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form handler / API route of choice.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl3 bg-white shadow-card p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-soft text-teal-deep">
          <CheckCircle2 size={26} strokeWidth={2} />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink">
          Message sent.
        </h3>
        <p className="mt-2 text-[14.5px] text-ink-soft max-w-sm mx-auto">
          Thanks for reaching out — Christophe or Derek will get back to you
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl3 bg-white shadow-card p-8 sm:p-10"
    >
      <h3 className="text-xl font-semibold text-ink">Drop us a line</h3>
      <p className="mt-1.5 text-[14px] text-ink-soft">
        Fill this out and we&apos;ll follow up within one business day.
      </p>

      <div className="mt-7 grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[13px] font-medium text-ink-soft mb-1.5"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jordan Smith"
            className="w-full rounded-xl border border-ink/12 bg-cloud px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-faint focus:border-teal-deep outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-[13px] font-medium text-ink-soft mb-1.5"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(515) 000-0000"
            className="w-full rounded-xl border border-ink/12 bg-cloud px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-faint focus:border-teal-deep outline-none transition-colors"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="email"
          className="block text-[13px] font-medium text-ink-soft mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="w-full rounded-xl border border-ink/12 bg-cloud px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-faint focus:border-teal-deep outline-none transition-colors"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="loanType"
          className="block text-[13px] font-medium text-ink-soft mb-1.5"
        >
          What are you looking for?
        </label>
        <select
          id="loanType"
          name="loanType"
          className="w-full rounded-xl border border-ink/12 bg-cloud px-4 py-3 text-[14.5px] text-ink focus:border-teal-deep outline-none transition-colors"
          defaultValue={loanOptions[0]}
        >
          {loanOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-[13px] font-medium text-ink-soft mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a bit about what you need..."
          className="w-full rounded-xl border border-ink/12 bg-cloud px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-faint focus:border-teal-deep outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal-deep py-4 text-[15px] font-semibold text-cloud shadow-button hover:bg-teal-mid transition-colors"
      >
        Send message
        <Send size={16} strokeWidth={2.4} />
      </button>

      <p className="mt-4 text-[11.5px] text-ink-faint text-center">
        This site is protected from spam. By submitting, you agree to be
        contacted about your inquiry.
      </p>
    </form>
  );
}
