import {
  Clock,
  ShieldCheck,
  Sparkles,
  Wrench,
  BarChart3,
  Users,
} from "lucide-react";

const benefits = [
  {
    title: "Lightning-Fast Response",
    description:
      "Issues addressed within hours, not days. Your satisfaction is our priority.",
    icon: Clock,
  },
  {
    title: "Curated Product Selection",
    description:
      "Premium snacks, healthy options, and local favorites—customized for your team.",
    icon: Sparkles,
  },
  {
    title: "Modern Technology",
    description:
      "Touchless payments, mobile apps, and smart inventory tracking built-in.",
    icon: ShieldCheck,
  },
  {
    title: "Clean, Professional Installs",
    description:
      "We treat your space like our own. Expect spotless equipment and tidy setups.",
    icon: Wrench,
  },
  {
    title: "Transparent Reporting",
    description:
      "Know what's selling and when. We provide insights to optimize your offerings.",
    icon: BarChart3,
  },
  {
    title: "Dedicated Service Team",
    description:
      "Real people who know your account. No call centers, no runaround.",
    icon: Users,
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
            Why CNC Vending
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Not Your Average{" "}
            <span className="text-emerald-400">Vending Company</span>
          </h2>
          <p className="text-lg text-slate-300">
            We&apos;re a family-owned business that takes pride in delivering
            exceptional service. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



