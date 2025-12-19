"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { trackFormSubmit, trackFormOpen } from "@/lib/tracking";
import { cn } from "@/lib/utils";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const businessTypes = [
  { value: "", label: "Select business type..." },
  { value: "office", label: "Corporate Office" },
  { value: "healthcare", label: "Healthcare Facility" },
  { value: "manufacturing", label: "Manufacturing / Warehouse" },
  { value: "apartments", label: "Apartments / Multi-tenant" },
  { value: "gym", label: "Gym / Fitness Center" },
  { value: "school", label: "School / University" },
  { value: "other", label: "Other" },
];

const employeeRanges = [
  { value: "", label: "Select range..." },
  { value: "1-25", label: "1-25 people" },
  { value: "26-50", label: "26-50 people" },
  { value: "51-100", label: "51-100 people" },
  { value: "101-250", label: "101-250 people" },
  { value: "251-500", label: "251-500 people" },
  { value: "500+", label: "500+ people" },
];

const solutions = [
  { id: "markets", label: "Upscale Markets" },
  { id: "vending", label: "Modern Vending" },
  { id: "kegerators", label: "Kegerators" },
  { id: "traditional", label: "Traditional Vending" },
];

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (formData.get("website")) {
      return;
    }

    console.log("Form submitted:", Object.fromEntries(formData.entries()));
    console.log("Selected solutions:", selectedSolutions);
    
    trackFormSubmit("quote_modal");
    setSubmitted(true);
  };

  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      trackFormOpen("quote_modal");
    }
    if (!newOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setSelectedSolutions([]);
      }, 200);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 mx-2 sm:mx-4 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 touch-manipulation">
          {/* Close Button */}
          <Dialog.Close 
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 active:bg-slate-200 rounded-lg transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close quote form"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </Dialog.Close>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <Dialog.Title className="text-2xl font-bold text-slate-900 mb-2">
                Thank You!
              </Dialog.Title>
              <Dialog.Description className="text-slate-600 mb-6">
                We&apos;ll be in touch within 24 hours to discuss your vending needs.
              </Dialog.Description>
              <Button onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-2xl font-bold text-slate-900 mb-2">
                Get a Free Quote
              </Dialog.Title>
              <Dialog.Description className="text-slate-600 mb-6">
                Tell us about your space and we&apos;ll create a custom vending solution.
              </Dialog.Description>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="John Smith"
                    required
                  />
                  <Input
                    id="company"
                    name="company"
                    label="Company"
                    placeholder="Acme Inc."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="john@company.com"
                    required
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <Select
                  id="businessType"
                  name="businessType"
                  label="Business Type"
                  options={businessTypes}
                  required
                />

                <Select
                  id="employees"
                  name="employees"
                  label="Number of Employees / Residents"
                  options={employeeRanges}
                />

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Solutions Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {solutions.map((solution) => (
                      <button
                        key={solution.id}
                        type="button"
                        onClick={() => toggleSolution(solution.id)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border",
                          selectedSolutions.includes(solution.id)
                            ? "bg-emerald-500 text-white border-emerald-500"
                            : "bg-white text-slate-600 border-slate-200 hover:border-emerald-300"
                        )}
                        aria-label={`Select ${solution.label}`}
                        aria-pressed={selectedSolutions.includes(solution.id)}
                      >
                        {solution.label}
                      </button>
                    ))}
                  </div>
                  <input
                    type="hidden"
                    name="solutions"
                    value={selectedSolutions.join(",")}
                  />
                </div>

                <Textarea
                  id="message"
                  name="message"
                  label="Additional Details (optional)"
                  placeholder="Tell us about your space, special requirements, or questions..."
                  rows={3}
                />

                <Button type="submit" className="w-full" size="lg">
                  Request Quote
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

