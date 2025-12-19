import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "CNC Vending transformed our break room into something our employees actually get excited about. The coffee machines and micro-market are always stocked with great options.",
    author: "Sarah M.",
    role: "Office Manager",
    company: "Tech Startup, Central MA",
    rating: 5,
  },
  {
    quote:
      "What impressed us most was the responsiveness. When we needed a restock or had a question, they were on it immediately. True white-glove service.",
    author: "Michael R.",
    role: "Facilities Director",
    company: "Healthcare Facility, Worcester",
    rating: 5,
  },
  {
    quote:
      "The premium coffee setup was a game-changer for our office culture. Fresh espresso and specialty drinks have become everyone's favorite perk. Highly recommend!",
    author: "Jessica L.",
    role: "HR Director",
    company: "Creative Agency, Cambridge",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-semibold text-base uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-3 mb-6">
            What Our <span className="text-blue-700">Clients</span> Say
          </h2>
          <p className="text-xl text-slate-600">
            Don&apos;t just take our word for it. Here&apos;s what businesses
            across New England have to say about working with CNC Vending.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100" />

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-slate-600 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-slate-100 pt-6">
                <p className="font-semibold text-lg text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-base text-slate-500">{testimonial.role}</p>
                <p className="text-base text-blue-700">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-base text-slate-400 mt-8">
          * Introductions and references available upon request.
        </p>
      </div>
    </section>
  );
}



