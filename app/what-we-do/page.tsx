import Link from "next/link";
import {
  Wallet,
  Stethoscope,
  Briefcase,
  Car,
  ArrowRight,
  Check,
  FileText,
  BadgeCheck,
  Landmark,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | IA Micro Lending",
  description:
    "Explore IA Micro Lending's loan products: personal, emergency, small business, and auto title loans — with clear terms and same-day decisions.",
};

const products = [
  {
    icon: Wallet,
    name: "Personal Loans",
    range: "$500 – $5,000",
    term: "3 – 18 months",
    blurb:
      "For the everyday moments that need a little breathing room — a bill, a move, a gap between paychecks.",
    features: [
      "Fixed monthly payment, no surprises",
      "No prepayment penalty",
      "Decision within one business day",
    ],
  },
  {
    icon: Stethoscope,
    name: "Emergency Loans",
    range: "$500 – $3,000",
    term: "3 – 12 months",
    blurb:
      "Built for the things that can't wait — a car repair, a medical bill, a broken appliance in January.",
    features: [
      "Fastest approval track we offer",
      "Funds often available same day",
      "Simple, honest terms explained up front",
    ],
  },
  {
    icon: Briefcase,
    name: "Small Business Starter",
    range: "$1,000 – $15,000",
    term: "6 – 24 months",
    blurb:
      "Working capital for inventory, a piece of equipment, or the push a small Iowa business needs to grow.",
    features: [
      "For sole proprietors and small LLCs",
      "Flexible use of funds",
      "A real conversation about your plan",
    ],
  },
  {
    icon: Car,
    name: "Auto Title Loans",
    range: "$1,000 – $10,000",
    term: "6 – 24 months",
    blurb:
      "Put the equity in a paid-off vehicle to work while you keep the keys and keep driving.",
    features: [
      "Keep driving your car",
      "Loan amount based on vehicle value",
      "Clear payoff schedule from day one",
    ],
  },
];

const requirements = [
  {
    icon: BadgeCheck,
    title: "Valid ID",
    body: "A government-issued photo ID confirming who you are.",
  },
  {
    icon: Landmark,
    title: "Active bank account",
    body: "So we can deposit funds and set up repayment.",
  },
  {
    icon: FileText,
    title: "Proof of income",
    body: "A recent pay stub, benefits statement, or business records.",
  },
];

export default function WhatWeDo() {
  return (
   <div className="relative">
      <section className="bg-cloud py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title="Loans sized to your life, not a spreadsheet."
            description="Every product below comes with the same promise: plain terms, a fast answer, and a person on the other end of the phone."
          />
        </div>
      </section>

      <section className="py-6 pb-24">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-xl3 bg-white shadow-card p-8 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-teal-soft text-teal-deep">
                  <p.icon size={22} strokeWidth={2} />
                </span>
                <div className="text-right">
                  <p className="text-[13px] font-semibold text-teal-deep">
                    {p.range}
                  </p>
                  <p className="text-[12px] text-ink-faint">{p.term}</p>
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-ink">
                {p.name}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                {p.blurb}
              </p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13.5px] text-ink-soft"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-teal-deep"
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal-deep hover:gap-2.5 transition-all"
              >
                Apply for this loan
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU NEED */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before you apply"
            title="Three things to have on hand."
            align="center"
          />

          <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {requirements.map((r) => (
              <div key={r.title} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-soft text-teal-deep">
                  <r.icon size={24} strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="rounded-xl3 bg-teal-midnight px-8 sm:px-16 py-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-cloud">
              Not sure which loan fits?
            </h2>
            <p className="mt-4 text-cloud/70 max-w-md mx-auto">
              Give us a call or send a message — we&apos;ll help you figure
              out the right fit before you ever fill out an application.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold-sunrise px-7 py-4 text-[15px] font-semibold text-teal-midnight hover:-translate-y-0.5 transition-transform"
              >
                Talk to us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
