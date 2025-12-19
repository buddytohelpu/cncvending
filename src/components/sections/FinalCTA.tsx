"use client";

import { useState } from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/config/site";
import { trackFormSubmit, trackPhoneClick, trackEmailClick } from "@/lib/tracking";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (formData.get("website")) return;

    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Quick Quote Request",
          ...formDataObject,
        }),
      });

      if (response.ok) {
        trackFormSubmit("final_cta");
        setSubmitted(true);
      } else {
        alert("There was an error submitting your request. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again or call us directly.");
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 relative overflow-hidden">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Ready to Upgrade Your Break Room?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 leading-relaxed">
              Get a quote in 24 hours. No obligation, no pressure—just
              personalized recommendations for your space.
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={() => trackPhoneClick()}
                className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-h-[48px] text-base"
                aria-label={`Call ${siteConfig.contact.phoneFormatted}`}
              >
                <Phone className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold">
                  {siteConfig.contact.phoneFormatted}
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                onClick={() => trackEmailClick()}
                className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation min-h-[48px] text-base"
                aria-label={`Email ${siteConfig.contact.email}`}
              >
                <Mail className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold break-all sm:break-normal">{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-blue-700" />
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
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mb-6">
                  Takes less than a minute. We&apos;ll handle the rest.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <label htmlFor="cta-website-honeypot" className="sr-only">
                    Leave this field empty
                  </label>
                  <input
                    type="text"
                    id="cta-website-honeypot"
                    name="website"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-name" className="sr-only">
                        Your Name
                      </label>
                      <Input
                        id="cta-name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-company" className="sr-only">
                        Company
                      </label>
                      <Input
                        id="cta-company"
                        name="company"
                        placeholder="Company"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cta-email" className="sr-only">
                      Email
                    </label>
                    <Input
                      id="cta-email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="cta-phone" className="sr-only">
                      Phone (optional)
                    </label>
                    <Input
                      id="cta-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="cta-message" className="sr-only">
                      Additional Notes
                    </label>
                    <textarea
                      id="cta-message"
                      name="message"
                      rows={3}
                      placeholder="Additional notes or questions (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-colors text-slate-900 placeholder:text-slate-400 bg-white"
                    />
                  </div>

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

