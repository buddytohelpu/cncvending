import { Metadata } from "next";
import Image from "next/image";
import { MapPin, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Service Area | Serving All of New England",
  description:
    "CNC Vending proudly serves businesses across Massachusetts, Rhode Island, Connecticut, New Hampshire, Vermont, and Maine. Based in Central Massachusetts.",
  alternates: {
    canonical: `${siteConfig.url}/service-area`,
  },
  openGraph: {
    title: "Service Area | CNC Vending - Proudly Serving New England",
    description:
      "CNC Vending serves businesses across all six New England states. Based in Central Massachusetts with fast, reliable service throughout the region.",
    url: `${siteConfig.url}/service-area`,
  },
};

const regions = [
  {
    state: "Massachusetts",
    areas: [
      "Boston Metro",
      "Worcester",
      "Springfield",
      "Cambridge",
      "Lowell",
      "Cape Cod",
    ],
    primary: true,
  },
  {
    state: "Rhode Island",
    areas: ["Providence", "Newport", "Warwick", "Cranston"],
    primary: false,
  },
  {
    state: "Connecticut",
    areas: ["Hartford", "New Haven", "Stamford", "Bridgeport"],
    primary: false,
  },
  {
    state: "New Hampshire",
    areas: ["Manchester", "Nashua", "Concord", "Portsmouth"],
    primary: false,
  },
  {
    state: "Vermont",
    areas: ["Burlington", "Montpelier", "Rutland"],
    primary: false,
  },
  {
    state: "Maine",
    areas: ["Portland", "Lewiston", "Bangor"],
    primary: false,
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-base">
                {siteConfig.location.tagline}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Serving <span className="text-blue-400">New England</span>{" "}
              Businesses
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300">
              Based in Central Massachusetts, we provide premium vending
              solutions and responsive service across all six New England
              states.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/map.png"
                alt="CNC Vending Service Area - New England"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Local Service,{" "}
                <span className="text-blue-600">Regional Reach</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                As a family-owned business based in Central Massachusetts, we
                understand the unique needs of New England businesses. Our
                proximity means faster response times, better service, and a
                team that truly knows your region.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Same-day response for emergencies
                    </p>
                    <p className="text-slate-600">
                      We&apos;re local, so we can be there when you need us
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Regular service routes throughout the region
                    </p>
                    <p className="text-slate-600">
                      Consistent restocking and maintenance schedules
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Products sourced from local vendors when possible
                    </p>
                    <p className="text-slate-600">
                      Supporting New England businesses like yours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Areas We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-xl text-slate-600">
              From Boston to Burlington, Portland to Providence—we&apos;ve got
              New England covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div
                key={region.state}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                  region.primary ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {region.state}
                  </h3>
                  {region.primary && (
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      Home Base
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {region.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center text-slate-600 text-base"
                    >
                      <MapPin className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8">
            Don&apos;t see your area listed? Reach out—we may still be able to
            serve you!
          </p>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </>
  );
}

