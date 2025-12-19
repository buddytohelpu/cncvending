import {
  Building2,
  Heart,
  Factory,
  Home,
  Dumbbell,
  GraduationCap,
} from "lucide-react";

const industries = [
  {
    name: "Corporate Offices",
    description: "Keep your team fueled and focused with convenient on-site options",
    icon: Building2,
  },
  {
    name: "Healthcare",
    description: "24/7 refreshment options for staff, patients, and visitors",
    icon: Heart,
  },
  {
    name: "Manufacturing",
    description: "Reliable service across all shifts to keep your workforce energized",
    icon: Factory,
  },
  {
    name: "Apartments",
    description: "Premium amenities that attract and retain quality residents",
    icon: Home,
  },
  {
    name: "Gyms & Fitness",
    description: "Healthy snacks, protein drinks, and hydration on demand",
    icon: Dumbbell,
  },
  {
    name: "Schools",
    description: "Smart choices for students and staff throughout the day",
    icon: GraduationCap,
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-semibold text-base uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 mb-6">
            Trusted by Businesses{" "}
            <span className="text-blue-700">Across New England</span>
          </h2>
          <p className="text-xl text-slate-600">
            From corporate headquarters to healthcare facilities, we provide
            tailored vending solutions for every environment.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <industry.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {industry.name}
              </h3>
              <p className="text-lg text-slate-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



