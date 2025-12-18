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
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" aria-label="CNC Vending Home">
              <Image
                src="/images/logo.png"
                alt="CNC Vending"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
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
            <div className="lg:hidden flex items-center space-x-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                onClick={handlePhoneClick}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isScrolled
                    ? "text-emerald-600 bg-emerald-50"
                    : "text-white bg-white/10"
                )}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isScrolled
                    ? "text-slate-600 hover:bg-slate-100"
                    : "text-white hover:bg-white/10"
                )}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button onClick={handleQuoteClick} className="w-full">
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
        className="lg:hidden fixed bottom-6 right-4 sm:right-6 z-40 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/30 font-semibold text-base min-h-[48px] flex items-center justify-center space-x-2 hover:shadow-xl active:scale-95 transition-all duration-200 touch-manipulation"
        aria-label="Get a free quote"
      >
        <span>Get Quote</span>
      </button>
    </>
  );
}

