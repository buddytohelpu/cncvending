"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { QuoteModal } from "@/components/forms/QuoteModal";
import { trackPhoneClick, trackCTAClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuoteClick = () => {
    trackCTAClick("navbar");
    setQuoteModalOpen(true);
  };

  const handlePhoneClick = () => {
    trackPhoneClick();
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 touch-manipulation" aria-label="CNC Vending Home">
              <Image
                src="/images/logo.png"
                alt="CNC Vending"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors duration-200",
                    isScrolled
                      ? "text-slate-600 hover:text-emerald-600"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-5">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={handlePhoneClick}
                className={cn(
                  "flex items-center space-x-2 text-base font-medium transition-colors duration-200",
                  isScrolled
                    ? "text-slate-600 hover:text-emerald-600"
                    : "text-white hover:text-white"
                )}
                aria-label={`Call ${siteConfig.contact.phoneFormatted}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>
              <Button onClick={handleQuoteClick} size="md">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={handlePhoneClick}
                className={cn(
                  "p-3 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation",
                  isScrolled
                    ? "text-emerald-600 bg-emerald-50 active:bg-emerald-100"
                    : "text-white bg-white/10 active:bg-white/20"
                )}
                aria-label={`Call ${siteConfig.contact.phoneFormatted}`}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-3 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation",
                  isScrolled
                    ? "text-slate-600 hover:bg-slate-100 active:bg-slate-200"
                    : "text-white hover:bg-white/10 active:bg-white/20"
                )}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3.5 text-base text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 rounded-lg transition-colors touch-manipulation min-h-[48px] flex items-center"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Button onClick={handleQuoteClick} className="w-full" size="lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Quote Modal */}
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Floating Mobile CTA */}
      <button
        onClick={handleQuoteClick}
        className="lg:hidden fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-3.5 sm:px-6 rounded-full shadow-xl shadow-emerald-500/40 font-semibold text-sm sm:text-base min-h-[52px] min-w-[120px] flex items-center justify-center space-x-2 hover:shadow-2xl active:scale-95 transition-all duration-200 touch-manipulation"
        style={{ paddingBottom: `calc(0.875rem + env(safe-area-inset-bottom))` }}
        aria-label="Get a free quote"
      >
        <span>Get Quote</span>
      </button>
    </>
  );
}

