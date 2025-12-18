"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { siteConfig, Solution } from "@/config/site";
import { trackCTAClick, trackPhoneClick, trackEmailClick } from "@/lib/tracking";

interface SolutionCTAProps {
  solution: Solution;
}

export function SolutionCTA({ solution }: SolutionCTAProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleQuoteClick = () => {
    trackCTAClick(`solution_${solution.id}`);
    setQuoteModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get {solution.name}?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let&apos;s discuss how {solution.name.toLowerCase()} can transform
            your space. Get a free quote in 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button onClick={handleQuoteClick} size="lg">
              Get a Free Quote
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-slate-400">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              onClick={() => trackPhoneClick()}
              className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              onClick={() => trackEmailClick()}
              className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  );
}

