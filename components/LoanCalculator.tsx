"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RATE = 0.09; // flat illustrative monthly-equivalent rate for estimate purposes

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function LoanCalculator() {
  const [amount, setAmount] = useState(3500);
  const [term, setTerm] = useState(12);

  const monthlyPayment = useMemo(() => {
    const monthlyRate = RATE / 12;
    const payment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    return Math.round(payment);
  }, [amount, term]);

  return (
    <div className="relative w-full max-w-sm rounded-xl3 bg-white p-7 shadow-float animate-float-slow">
      <div className="flex items-center justify-between mb-6">
        <p className="eyebrow text-teal-deep">Loan Estimator</p>
        <span className="rounded-full bg-teal-soft px-2.5 py-1 text-[11px] font-semibold text-teal-deep">
          Instant
        </span>
      </div>

      <div className="mb-7">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[13px] font-medium text-ink-soft">
            Loan amount
          </span>
          <span
            key={amount}
            className="text-2xl font-bold text-ink animate-count-in tabular-nums"
          >
            {formatCurrency(amount)}
          </span>
        </div>
        <input
          type="range"
          min={500}
          max={15000}
          step={100}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="slider-track w-full h-1.5 rounded-full bg-teal-soft accent-teal-deep appearance-none"
          style={{
            background: `linear-gradient(to right, #0C7967 ${
              ((amount - 500) / (15000 - 500)) * 100
            }%, #E8F3EF ${((amount - 500) / (15000 - 500)) * 100}%)`,
          }}
          aria-label="Loan amount"
        />
        <div className="flex justify-between text-[11px] text-ink-faint mt-1.5">
          <span>$500</span>
          <span>$15,000</span>
        </div>
      </div>

      <div className="mb-7">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[13px] font-medium text-ink-soft">
            Repayment term
          </span>
          <span key={term} className="text-2xl font-bold text-ink animate-count-in tabular-nums">
            {term} mo
          </span>
        </div>
        <input
          type="range"
          min={3}
          max={24}
          step={1}
          value={term}
          onChange={(e) => setTerm(Number(e.target.value))}
          className="slider-track w-full h-1.5 rounded-full bg-teal-soft appearance-none"
          style={{
            background: `linear-gradient(to right, #0C7967 ${
              ((term - 3) / (24 - 3)) * 100
            }%, #E8F3EF ${((term - 3) / (24 - 3)) * 100}%)`,
          }}
          aria-label="Repayment term in months"
        />
        <div className="flex justify-between text-[11px] text-ink-faint mt-1.5">
          <span>3 mo</span>
          <span>24 mo</span>
        </div>
      </div>

      <div className="rounded-xl2 bg-teal-midnight px-5 py-4 flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] text-cloud/60 mb-0.5">Est. monthly payment</p>
          <p className="text-2xl font-bold text-cloud tabular-nums">
            {formatCurrency(monthlyPayment)}
          </p>
        </div>
        <span className="h-11 w-11 rounded-full bg-gold-sunrise/15 flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-gold-sunrise" />
        </span>
      </div>

      <Link
        href="/contact"
        className="flex items-center justify-center gap-1.5 w-full rounded-full bg-teal-deep py-3.5 text-[14px] font-semibold text-cloud shadow-button hover:bg-teal-mid transition-colors"
      >
        Get this rate
        <ArrowRight size={16} strokeWidth={2.4} />
      </Link>
      <p className="text-[11px] text-ink-faint text-center mt-3">
        Estimate only. Final terms confirmed after a quick review.
      </p>
    </div>
  );
}
