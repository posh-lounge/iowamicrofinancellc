import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Wallet,
  Stethoscope,
  Briefcase,
  Car,
  Star,
  CheckCircle2,
} from "lucide-react";
import LoanCalculator from "@/components/LoanCalculator";
import SectionHeading from "@/components/SectionHeading";

const loanTypes = [
  {
    icon: Wallet,
    name: "Personal Loans",
    blurb:
      "Cover everyday costs, consolidate a bill, or bridge the gap to your next paycheck.",
    range: "$500 – $5,000",
  },
  {
    icon: Stethoscope,
    name: "Emergency Loans",
    blurb:
      "A car repair or medical bill won't wait — get a decision the same day you apply.",
    range: "$500 – $3,000",
  },
  {
    icon: Briefcase,
    name: "Small Business Starter",
    blurb:
      "Working capital for inventory, equipment, or the push your business needs to grow.",
    range: "$1,000 – $15,000",
  },
  {
    icon: Car,
    name: "Auto Title Loans",
    blurb:
      "Borrow against a paid-off vehicle while you keep driving it every day.",
    range: "$1,000 – $10,000",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    body: "Apply online in under five minutes or stop by our Merle Hay office — whichever feels right.",
  },
  {
    number: "02",
    title: "We review, fast",
    body: "A real person looks at your application the same business day. No black-box algorithms.",
  },
  {
    number: "03",
    title: "Funds land in your account",
    body: "Once approved, most members see their money within one business day.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Licensed & transparent",
    body: "A licensed Iowa lender with plain-language terms — every fee spelled out before you sign.",
  },
  {
    icon: Zap,
    title: "Same-day decisions",
    body: "No waiting a week to hear back. Most applicants know where they stand within hours.",
  },
  {
    icon: Users,
    title: "Actual humans",
    body: "Talk to Christophe or Derek directly — not a call center reading from a script.",
  },
];

const testimonials = [
  {
    quote:
      "I needed my car fixed to get to work and had nowhere else to turn. They approved me the same afternoon.",
    name: "Marisol T.",
    role: "Personal loan member",
  },
  {
    quote:
      "Straightforward, no surprise fees, and they actually explained the terms instead of rushing me through.",
    name: "DeShawn R.",
    role: "Business starter loan",
  },
  {
    quote:
      "Walked in worried, walked out with a plan and a lot less stress. Des Moines needs more places like this.",
    name: "Grace O.",
    role: "Emergency loan member",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <main className="relative min-h-screen">
      <section className="relative overflow-hidden bg-cloud ">
        <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-teal-soft blur-3xl opacity-70" />
        <div className="pointer-events-none absolute top-24 left-[-120px] h-72 w-72 rounded-full bg-gold-sunrise/10 blur-3xl" />

        <div className="container-page relative py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="animate-fade-up">
            <p className="eyebrow text-teal-deep mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-sunrise" />
              Des Moines&apos; neighborhood micro lender
            </p>
            <h1 className="text-[2.6rem] sm:text-6xl font-bold tracking-tight leading-[1.05] text-ink">
              Empowering your
              <br />
              <span className="text-teal-deep">financial future.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-lg">
              Micro loans sized to fit your life — not the other way around.
              Apply in minutes, talk to a real person, and get a decision the
              same day.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-teal-deep px-7 py-4 text-[15px] font-semibold text-cloud shadow-button hover:bg-teal-mid hover:-translate-y-0.5 transition-all"
              >
                Apply Now
                <ArrowRight size={17} strokeWidth={2.4} />
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-4 text-[15px] font-semibold text-ink hover:border-teal-deep hover:text-teal-deep transition-colors"
              >
                See loan options
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div>
                <p className="text-3xl font-bold text-ink">Same-day</p>
                <p className="text-[13px] text-ink-faint">Loan decisions</p>
              </div>
              <div className="h-10 w-px bg-ink/10 hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-ink">$500–$15k</p>
                <p className="text-[13px] text-ink-faint">Loan range</p>
              </div>
              <div className="h-10 w-px bg-ink/10 hidden sm:block" />
              <div>
                <p className="text-3xl font-bold text-ink">Local</p>
                <p className="text-[13px] text-ink-faint">Merle Hay Rd, DSM</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-teal-deep">
        <div className="container-page py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-cloud/90 text-[13.5px] font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-gold-sunrise" />
            Licensed Iowa lender
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-gold-sunrise" />
            No hidden fees
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-gold-sunrise" />
            Same-day decisions
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={15} className="text-gold-sunrise" />
            Equal opportunity lender
          </span>
        </div>
      </section>

      {/* LOAN TYPES */}
      <section className="py-24">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="What we offer"
              title="A loan for wherever life has you right now."
              description="Four simple products, one straightforward process. Pick the one that fits — we'll help with the rest."
            />
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal-deep hover:gap-2.5 transition-all shrink-0"
            >
              View full details
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loanTypes.map((loan) => (
              <div
                key={loan.name}
                className="group rounded-xl3 bg-white p-7 shadow-card hover:-translate-y-1.5 transition-transform duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-teal-soft text-teal-deep group-hover:bg-teal-deep group-hover:text-cloud transition-colors">
                  <loan.icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {loan.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {loan.blurb}
                </p>
                <p className="mt-5 text-[13px] font-semibold text-teal-deep">
                  {loan.range}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="From application to funds in three steps."
            align="center"
          />

          <div className="mt-16 grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-teal-soft via-teal-deep/30 to-teal-soft" />
            {steps.map((step) => (
              <div key={step.number} className="relative text-center px-4">
                <span className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-deep text-cloud text-lg font-bold shadow-button">
                  {step.number}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft max-w-xs mx-auto">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="container-page grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          <SectionHeading
            eyebrow="Why IA Micro Lending"
            title="Bank-level trust, mobile-money speed."
            description="We combined the parts of borrowing people actually like — quick answers, a friendly face, clear terms — and left out the parts they don't."
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl2 border border-ink/8 bg-white p-6"
              >
                <point.icon size={22} className="text-teal-deep" strokeWidth={2} />
                <h3 className="mt-4 font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {point.body}
                </p>
              </div>
            ))}
            <div className="rounded-xl2 bg-teal-midnight p-6 flex flex-col justify-center">
              <p className="text-cloud font-semibold">Ready when you are.</p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold-sunrise"
              >
                Start your application
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-teal-midnight">
        <div className="container-page">
          <SectionHeading
            eyebrow="From our members"
            title="Real people, real relief."
            align="center"
            light
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl3 bg-white/[0.04] border border-cloud/10 p-7"
              >
                <div className="flex gap-1 text-gold-sunrise mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-cloud/85 text-[14.5px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-gold-sunrise/20 flex items-center justify-center text-gold-sunrise text-[13px] font-semibold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-cloud text-[13.5px] font-semibold">
                      {t.name}
                    </p>
                    <p className="text-cloud/50 text-[12px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-xl3 bg-teal-deep px-8 sm:px-16 py-16 text-center">
            <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-gold-sunrise/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cloud/10 blur-3xl" />
            <h2 className="relative text-3xl sm:text-4xl font-bold text-cloud max-w-xl mx-auto leading-tight">
              Let&apos;s get you where you&apos;re going.
            </h2>
            <p className="relative mt-4 text-cloud/75 max-w-md mx-auto">
              Stop by 3015 Merle Hay Road or apply online — either way,
              you&apos;ll talk to someone who actually wants to help.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cloud px-7 py-4 text-[15px] font-semibold text-teal-deep hover:-translate-y-0.5 transition-transform"
              >
                Apply Now
                <ArrowRight size={17} />
              </Link>
              <a
                href="tel:5158097947"
                className="inline-flex items-center gap-2 rounded-full border border-cloud/30 px-7 py-4 text-[15px] font-semibold text-cloud hover:bg-cloud/10 transition-colors"
              >
                Call 515.809.7947
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
