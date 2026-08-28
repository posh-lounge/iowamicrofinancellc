import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | IA Micro Lending",
  description:
    "Reach IA Micro Lending in Des Moines, Iowa. Call 515.809.7947, stop by our Merle Hay Road office, or send a message online.",
};

export default function Contact() {
  return (
    <div className="relative">
    <section className="py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact us"
          title="Better yet, see us in person."
          description="We love our customers, so feel free to visit during normal business hours — or reach out below and we'll get right back to you."
        />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="space-y-5">
            <div className="rounded-xl3 bg-white shadow-card p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 bg-teal-soft text-teal-deep">
                  <MapPin size={20} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Our office</p>
                  <p className="mt-1 text-[14px] text-ink-soft leading-relaxed">
                    3015 Merle Hay Road, Suite 6
                    <br />
                    Des Moines, IA 50310, USA
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3015+Merle+Hay+Road+Suite+6+Des+Moines+IA+50310"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-teal-deep"
                  >
                    Get directions
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl3 bg-white shadow-card p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 bg-teal-soft text-teal-deep">
                  <Phone size={20} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Call us</p>
                  <a
                    href="tel:5158097947"
                    className="mt-1 block text-[14px] text-ink-soft hover:text-teal-deep transition-colors"
                  >
                    515.809.7947
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl3 bg-white shadow-card p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 bg-teal-soft text-teal-deep">
                  <Mail size={20} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-semibold text-ink">Email us</p>
                  <a
                    href="mailto:christophe@iamicrolending.com"
                    className="mt-1 block text-[14px] text-ink-soft hover:text-teal-deep transition-colors"
                  >
                    christophe@iamicrolending.com
                  </a>
                  <a
                    href="mailto:derek@iamicrolending.com"
                    className="block text-[14px] text-ink-soft hover:text-teal-deep transition-colors"
                  >
                    derek@iamicrolending.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl3 bg-teal-midnight p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl2 bg-gold-sunrise/15 text-gold-sunrise">
                  <Clock size={20} strokeWidth={2} />
                </span>
                <div>
                  <p className="font-semibold text-cloud">Hours</p>
                  <p className="mt-1 text-[14px] text-cloud/70">
                    Mon – Fri: 9:00am – 5:00pm
                  </p>
                  <p className="text-[14px] text-cloud/50">
                    Sat – Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-6 h-80 rounded-xl3 overflow-hidden shadow-card">
          <iframe
            title="IA Micro Lending location map"
            src="https://www.google.com/maps?q=3015+Merle+Hay+Road+Suite+6+Des+Moines+IA+50310&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
    </div>
  );
}
