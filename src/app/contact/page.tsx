import { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Vending Quote",
  description:
    "Contact CNC Vending for a free quote on vending machines, micro-markets, and kegerators. Serving businesses across New England. Call (508) 713-1874 or email Team@cnc-vending.com.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phoneFormatted,
    href: `tel:${siteConfig.contact.phone}`,
    description: "Call us directly for immediate assistance",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    description: "We typically respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location.region,
    href: null,
    description: siteConfig.location.tagline,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 8am-6pm",
    href: null,
    description: "Service available for emergencies",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/vending1crop-1.png"
            alt="CNC Vending Contact"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-400 font-semibold text-base uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
              Let&apos;s <span className="text-blue-400">Talk</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300">
              Ready to upgrade your break room? Have questions about our
              services? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Reach out directly or fill out the form and we&apos;ll get back
                to you within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-base text-slate-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl font-semibold text-slate-900">
                          {item.value}
                        </p>
                      )}
                      <p className="text-base text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="mt-10 p-6 bg-blue-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Our Response Promise
                </h3>
                <p className="text-blue-800 text-base">
                  We respond to all inquiries within 24 hours during business
                  days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Tell us about your space and what you&apos;re looking for.
                  We&apos;ll create a custom recommendation just for you.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Promo */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {siteConfig.location.tagline}
          </h2>
          <p className="text-slate-300 mb-6">
            Based in Brookfield, Massachusetts, we provide fast, reliable service within 60 miles
            throughout the New England region.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.location.states.map((state) => (
              <span
                key={state}
                className="px-4 py-2 bg-white/10 rounded-full text-white font-medium text-sm"
              >
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

