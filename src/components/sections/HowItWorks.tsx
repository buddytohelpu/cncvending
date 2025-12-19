import { MessageSquare, MapPin, Wrench } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Request a Quote",
    description:
      "Tell us about your space and what you're looking for. We respond within 24 hours with personalized recommendations.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Site Visit & Proposal",
    description:
      "We'll visit your location, assess your needs, and create a custom solution tailored to your team and space.",
    icon: MapPin,
  },
  {
    step: 3,
    title: "Install & Ongoing Service",
    description:
      "Professional installation with minimal disruption, followed by reliable restocking and maintenance—so you never have to think about it.",
    icon: Wrench,
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-semibold text-base uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 mb-6">
            Getting Started is{" "}
            <span className="text-blue-700">Simple</span>
          </h2>
          <p className="text-xl text-slate-600">
            From first contact to fully stocked, we handle everything so you
            can focus on your business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-blue-200 to-blue-100" />
              )}

              <div className="text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-50 to-blue-50 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-blue-700" />
                    </div>
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



