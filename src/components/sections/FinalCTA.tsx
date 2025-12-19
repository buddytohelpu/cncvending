"use client";

import { useState } from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/config/site";
import { trackFormSubmit, trackPhoneClick, trackEmailClick } from "@/lib/tracking";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (formData.get("website")) return;

    console.log("Quick form:", Object.fromEntries(formData.entries()));
    trackFormSubmit("final_cta");
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to Upgrade Your Break Room?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
              Get a quote in 24 hours. No obligation, no pressure—just
              personalized recommendations for your space.
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackPhoneClick()}
                className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-h-[48px] text-sm sm:text-base"
                aria-label={`Call ${siteConfig.contact.phoneFormatted}`}
              >
                <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold">
                  {siteConfig.contact.phoneFormatted}
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => trackEmailClick()}
                className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-h-[48px] text-sm sm:text-base"
                aria-label={`Email ${siteConfig.contact.email}`}
              >
                <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold break-all sm:break-normal">{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Request Received!
                </h3>
                <p className="text-slate-600">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6">
                  Takes less than a minute. We&apos;ll handle the rest.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="cta-name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <Input
                      id="cta-company"
                      name="company"
                      placeholder="Company"
                      required
                    />
                  </div>

                  <Input
                    id="cta-email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />

                  <Input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone (optional)"
                  />

                  <Button type="submit" className="w-full" size="lg">
                    Request Quote
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

