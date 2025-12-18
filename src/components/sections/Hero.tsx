"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, MapPin, Clock, Settings } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { trackCTAClick } from "@/lib/tracking";

const trustBadges = [
  { text: "Family-Owned", icon: Heart },
  { text: "Serving New England", icon: MapPin },
  { text: "24hr Response", icon: Clock },
  { text: "Custom Solutions", icon: Settings },
];

export function Hero() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleQuoteClick = () => {
    trackCTAClick("hero_primary");
    setQuoteModalOpen(true);
  };

  const handleScrollToSolutions = () => {
    trackCTAClick("hero_secondary");
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/vending1crop-1.png"
            alt="Modern vending machines and micro-markets for New England businesses - CNC Vending premium solutions"
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

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-32 lg:pt-44 lg:pb-40">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Premium Vending for New England Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Modern Vending &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Micro-Markets
              </span>{" "}
              for Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
              Fast restocking. Modern payment options. Custom product selection.
              White-glove service from a family-owned company that treats your
              business like our own.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={handleQuoteClick} size="lg">
                Get a Free Quote
              </Button>
              <Button
                onClick={handleScrollToSolutions}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                See Solutions
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
                >
                  <badge.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm font-medium">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden xl:block">
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-emerald-500/10 to-transparent" />
        </div>
      </section>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </>
  );
}

