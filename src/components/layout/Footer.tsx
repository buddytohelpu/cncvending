import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div>
            <p className="text-slate-400 text-base leading-relaxed mb-4">
              Premium vending solutions, upscale micro-markets, and coffee & beverage services for businesses within 60 miles of Brookfield, MA. Family-owned, white-glove service.
            </p>
            <div className="flex items-center space-x-2 text-blue-500">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-base">{siteConfig.location.tagline}</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Solutions</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {siteConfig.solutions.map((solution) => (
                <li key={solution.id}>
                  <Link
                    href={solution.slug}
                    className="text-slate-400 hover:text-blue-500 active:text-blue-400 transition-colors text-base block py-1 touch-manipulation min-h-[32px] flex items-center"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions/vending"
                  className="text-slate-400 hover:text-blue-500 transition-colors text-base"
                >
                  Traditional Vending
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Company</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-blue-500 active:text-blue-400 transition-colors text-base block py-1 touch-manipulation min-h-[32px] flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service-area"
                  className="text-slate-400 hover:text-blue-500 active:text-blue-400 transition-colors text-base block py-1 touch-manipulation min-h-[32px] flex items-center"
                >
                  Service Area
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-slate-400 hover:text-blue-500 active:text-blue-400 transition-colors text-base block py-1 touch-manipulation min-h-[32px] flex items-center"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-blue-500 active:text-blue-400 transition-colors text-base block py-1 touch-manipulation min-h-[32px] flex items-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xl mb-4">Get in Touch</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center space-x-3 text-slate-400 hover:text-blue-500 active:text-blue-400 transition-colors touch-manipulation min-h-[44px]"
                  aria-label={`Call ${siteConfig.contact.phoneFormatted}`}
                >
                  <Phone className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base">{siteConfig.contact.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center space-x-3 text-slate-400 hover:text-blue-500 active:text-blue-400 transition-colors touch-manipulation min-h-[44px]"
                  aria-label={`Email ${siteConfig.contact.email}`}
                >
                  <Mail className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base break-all sm:break-normal">{siteConfig.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-8 sm:mt-10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <Link href="/" className="inline-block" aria-label="CNC Vending Home">
              <Image
                src="/images/logo-white.png"
                alt="CNC Vending"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </Link>
            <p className="text-slate-500 text-base">
              © {new Date().getFullYear()} CNC Vending. All rights reserved.
            </p>
          </div>
          <p className="text-slate-500 text-base">
            Family-owned & operated in {siteConfig.location.region}
          </p>
        </div>
      </div>
    </footer>
  );
}

