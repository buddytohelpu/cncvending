"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Frequently Asked{" "}
            <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you don&apos;t see what
            you&apos;re looking for, feel free to reach out.
          </p>
        </div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-4">
          {siteConfig.faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-slate-50 rounded-xl overflow-hidden"
            >
              <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left group">
                <span className="font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-400 transition-transform duration-200",
                    "group-data-[state=open]:rotate-180"
                  )}
                />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}


