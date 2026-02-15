import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andres K.",
    source: "Google",
    rating: 5,
    text: "They responded within a minute of my inquiry. The roof is perfect — no leaks after two Estonian winters. Truly outstanding craftsmanship.",
    project: "Full Roof Replacement",
  },
  {
    name: "Maria L.",
    source: "Facebook",
    rating: 5,
    text: "I was skeptical at first, but they delivered ahead of schedule and under budget. Our energy bill dropped noticeably after the new insulation.",
    project: "Insulated Roofing",
  },
  {
    name: "Toomas R.",
    source: "Google",
    rating: 5,
    text: "Professional from start to finish. They sent a detailed quote the same day I called. Five contractors ghosted me — these guys showed up.",
    project: "Commercial Flat Roof",
  },
  {
    name: "Katrin S.",
    source: "Google",
    rating: 5,
    text: "Beautiful metal roof installed in just 4 days. The team was clean, organized, and respectful. Highly recommend to anyone in Tallinn.",
    project: "Metal Roofing",
  },
  {
    name: "Peeter V.",
    source: "Facebook",
    rating: 5,
    text: "Their 25-year warranty gave us peace of mind. It's been 3 years and the roof looks brand new. Worth every cent.",
    project: "Tile Roof Renovation",
  },
  {
    name: "Liis M.",
    source: "Google",
    rating: 5,
    text: "The price estimator on their site was spot-on. No surprises, no hidden costs. That transparency is rare in construction.",
    project: "Roof Repair",
  },
];

const sourceColors: Record<string, string> = {
  Google: "bg-primary/10 text-primary",
  Facebook: "bg-blue-500/10 text-blue-500",
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-surface-warm">
      <div className="container-narrow">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Why <span className="text-primary">100+ Homeowners</span> Picked Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real reviews from real Estonian homeowners. No fakes, no fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className={`text-xs font-medium rounded-full px-3 py-1 ${sourceColors[t.source]}`}>
                  {t.source}
                </span>
              </div>

              <p className="text-foreground/80 leading-relaxed">"{t.text}"</p>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.project}</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-charcoal flex items-center justify-center text-charcoal-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
