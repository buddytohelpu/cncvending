import { Metadata } from "next";
import Image from "next/image";
import { Heart, Users, Sparkles, Shield, Clock, ThumbsUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Vending Company",
  description:
    "CNC Vending is a family-owned and operated vending company based in Brookfield, Massachusetts. We deliver personalized service and custom vending solutions for businesses within 60 miles, focusing on companies with 100+ employees.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    icon: Heart,
    title: "Family-Owned & Operated",
    description:
      "We're not a faceless corporation. We're a family that takes pride in building real relationships with our clients.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Every business is unique. We take the time to understand your needs and create solutions that actually work for your team.",
  },
  {
    icon: Sparkles,
    title: "Quality Products",
    description:
      "From healthy snacks to premium beverages, we curate our selection to include options your employees will love.",
  },
  {
    icon: Shield,
    title: "Reliability You Can Count On",
    description:
      "When we say we'll be there, we mean it. Regular service, responsive support, and machines that work.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description:
      "Issues happen. When they do, we respond quickly—often the same day. Your satisfaction is our priority.",
  },
  {
    icon: ThumbsUp,
    title: "No-Hassle Experience",
    description:
      "We handle everything: installation, stocking, maintenance, and repairs. You just provide the space.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-400 font-semibold text-base uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6">
              Not Your Average{" "}
              <span className="text-blue-400">Vending Company</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              CNC Vending is a family-owned business that believes in doing
              things differently. We combine modern vending technology with
              old-fashioned customer service to deliver an experience that
              truly stands out.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Built on <span className="text-blue-600">Relationships</span>
                , Not Transactions
              </h2>
              <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                <p>
                  We started CNC Vending with a simple belief: businesses
                  deserve better than the typical vending experience. You
                  deserve a partner who knows your name, understands your
                  needs, and shows up when they say they will.
                </p>
                <p>
                  Based in Brookfield, Massachusetts, we serve businesses within 60 miles, focusing on
                  New England with a focus on personalized service and
                  custom solutions. Whether you need a simple snack machine
                  or a full micro-market installation, we approach every
                  project with the same attention to detail.
                </p>
                <p>
                  Our team works directly with you to understand your space,
                  your team&apos;s preferences, and your goals. Then we design a
                  vending program that actually makes sense—not a
                  one-size-fits-all solution that doesn&apos;t quite fit.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-slate-50 rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-blue-600">
                    6
                  </p>
                  <p className="text-lg text-slate-600 mt-2">States Served</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-blue-600">
                    24hr
                  </p>
                  <p className="text-lg text-slate-600 mt-2">Response Time</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-blue-600">
                    100%
                  </p>
                  <p className="text-lg text-slate-600 mt-2">Family-Owned</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-blue-600">
                    $0
                  </p>
                  <p className="text-lg text-slate-600 mt-2">Cost to You*</p>
                </div>
              </div>
              <p className="text-base text-slate-500 text-center mt-6">
                * In most cases, our services are provided at no cost to your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              What We <span className="text-blue-600">Stand For</span>
            </h2>
            <p className="text-xl text-slate-600">
              These aren&apos;t just words on a page. They&apos;re the principles
              that guide how we work with every client.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-lg text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proudly Serving */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-slate-600 mb-4">
            {siteConfig.location.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.location.states.map((state) => (
              <span
                key={state}
                className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 font-medium text-base"
              >
                {state}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </>
  );
}

