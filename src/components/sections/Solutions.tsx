"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Solutions() {
  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-blue-700 font-semibold text-sm sm:text-base uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 mb-4 sm:mb-6 leading-tight">
            Vending Solutions That{" "}
            <span className="text-blue-700">Elevate</span> Your Space
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 px-2">
            From premium micro-markets to self-serve kegerators, we deliver
            modern amenities that keep your team satisfied and productive.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.solutions.map((solution) => (
            <div
              key={solution.id}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                  {solution.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-base sm:text-lg text-slate-600 mb-4 leading-relaxed">{solution.shortDescription}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-base text-slate-500 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={solution.slug}
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-emerald-700 active:text-emerald-800 group/link touch-manipulation min-h-[44px]"
                  aria-label={`Learn more about ${solution.name}`}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Traditional Vending Note */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-slate-500">
            Looking for traditional snack and beverage vending?{" "}
            <Link
              href="/solutions/vending"
              className="text-blue-700 font-semibold hover:underline"
              aria-label="Learn more about traditional vending solutions"
            >
              Learn about traditional vending →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

