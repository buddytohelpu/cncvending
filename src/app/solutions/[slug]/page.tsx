import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { siteConfig, Solution } from "@/config/site";
import { SolutionCTA } from "@/components/sections/SolutionCTA";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all solutions
export async function generateStaticParams() {
  return siteConfig.solutions.map((solution) => ({
    slug: solution.id,
  }));
}

// Generate metadata for each solution page
export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = siteConfig.solutions.find((s) => s.id === slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: `${solution.name} | Premium Vending Solutions`,
    description: solution.description,
    alternates: {
      canonical: `${siteConfig.url}${solution.slug}`,
    },
    openGraph: {
      title: `${solution.name} | CNC Vending`,
      description: solution.description,
      url: `${siteConfig.url}${solution.slug}`,
      images: [
        {
          url: `${siteConfig.url}${solution.image}`,
          width: 1200,
          height: 630,
          alt: `${solution.name} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.name} | CNC Vending`,
      description: solution.description,
      images: [`${siteConfig.url}${solution.image}`],
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = siteConfig.solutions.find((s) => s.id === slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={solution.image}
            alt={solution.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {solution.name}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What You Get with{" "}
                <span className="text-emerald-600">{solution.name}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We handle everything from installation to ongoing maintenance,
                so you can focus on what matters most—your business.
              </p>

              <ul className="space-y-4">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={solution.image}
                alt={solution.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Locations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Perfect For These{" "}
              <span className="text-emerald-600">Locations</span>
            </h2>
            <p className="text-lg text-slate-600">
              {solution.name} work great in a variety of settings. Here are some
              of the most common locations where our clients install them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="font-medium text-slate-900">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SolutionCTA solution={solution} />
    </>
  );
}

