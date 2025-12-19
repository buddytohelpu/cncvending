"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { trackFormSubmit } from "@/lib/tracking";
import { cn } from "@/lib/utils";

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

interface ContactFormProps {
  variant?: "default" | "compact";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
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

    trackFormSubmit("contact_form");
    setSubmitted(true);
  };

  const toggleSolution = (id: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-emerald-50 rounded-2xl">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-600">
          Thank you for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          id="contact-name"
          name="name"
          label="Name"
          placeholder="John Smith"
          required
        />
        <Input
          id="contact-company"
          name="company"
          label="Company"
          placeholder="Acme Inc."
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="contact-email"
          name="email"
          type="email"
          label="Email"
          placeholder="john@company.com"
          required
        />
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          label="Phone"
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="contact-city"
          name="city"
          label="City / State"
          placeholder="Boston, MA"
        />
        <Select
          id="contact-employees"
          name="employees"
          label="# of Employees / Residents"
          options={employeeRanges}
        />
      </div>

      <Select
        id="contact-businessType"
        name="businessType"
        label="Business Type"
        options={businessTypes}
        required
      />

      {variant === "default" && (
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
      )}

      <Textarea
        id="contact-message"
        name="message"
        label="Message"
        placeholder="Tell us about your vending needs..."
        rows={4}
      />

      <Button type="submit" className="w-full" size="lg">
        Send Message
      </Button>

      <p className="text-xs text-slate-500 text-center">
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}

