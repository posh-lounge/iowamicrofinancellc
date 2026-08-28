import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-midnight text-cloud">
      <div className="container-page py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
           <img
              src="/imllogo.webp"
              alt="Gia Property Talks"
              className="h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="text-cloud/60 text-[14px] leading-relaxed max-w-xs">
            Micro loans built around your life. We believe a little help at
            the right moment can change everything.
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-gold-sunrise mb-4">Explore</h4>
          <ul className="space-y-3 text-[14px] text-cloud/75">
            <li>
              <Link href="/" className="hover:text-cloud transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/what-we-do" className="hover:text-cloud transition-colors">
                What We Do
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cloud transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-sunrise mb-4">Contact</h4>
          <ul className="space-y-3 text-[14px] text-cloud/75">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-sunrise" />
              3015 Merle Hay Road, Suite 6
              <br />
              Des Moines, IA 50310
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-gold-sunrise" />
              <a href="tel:5158097947" className="hover:text-cloud transition-colors">
                515.809.7947
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-gold-sunrise" />
              <a
                href="mailto:christophe@iamicrolending.com"
                className="hover:text-cloud transition-colors"
              >
                christophe@iamicrolending.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold-sunrise mb-4">Hours</h4>
          <ul className="space-y-3 text-[14px] text-cloud/75">
            <li className="flex items-center gap-2.5">
              <Clock size={16} className="shrink-0 text-gold-sunrise" />
              Mon – Fri: 9:00am – 5:00pm
            </li>
            <li className="pl-6 text-cloud/50">Sat – Sun: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cloud/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-cloud/45">
          <p>© {new Date().getFullYear()} IA Micro Lending. All rights reserved.</p>
          <p>Licensed Iowa micro lender · Equal Opportunity Lender</p>
        </div>
      </div>
    </footer>
  );
}
