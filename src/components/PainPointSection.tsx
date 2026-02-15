import { PhoneOff, Clock, ShieldAlert, Zap, Award, Milestone, Shield } from "lucide-react";

const problems = [
  { icon: PhoneOff, text: "You call five contractors. Three never pick up. That's not just rude — it's a red flag. If they can't manage a phone call, how will they manage your project?" },
  { icon: Clock, text: "Two promise a quote 'by Friday.' Friday comes and goes. Disorganization at the start means delays, cost overruns, and corners cut on-site." },
  { icon: ShieldAlert, text: "Ghosting isn't just poor service — it's a symptom of poor management. And poor management builds poor structures." },
];

const pillars = [
  {
    icon: Zap,
    title: "Speed-to-Lead",
    value: "2 min",
    label: "Avg. Response",
    description: "Our system alerts our team the instant you reach out. No voicemail tag, no waiting days — a real person, in minutes.",
  },
  {
    icon: Award,
    title: "Master-Grade Quality",
    value: "10 yr",
    label: "Structural Warranty",
    description: "With over a decade of hands-on experience, every project is backed by a 10-year warranty on all structural work. We build to last.",
  },
  {
    icon: Milestone,
    title: "Transparent Milestones",
    value: "100%",
    label: "Progress Visibility",
    description: "Our system doesn't stop after the first call. We keep you updated at every milestone — from permit to final inspection.",
  },
];

const PainPointSection = () => {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problem */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal-foreground">
              Why Do Most Construction Projects{" "}
              <span className="text-primary">Fail</span> Before They Start?
            </h2>

            <p className="text-lg text-charcoal-foreground/70 leading-relaxed">
              It always starts the same way. You need work done, so you start calling. 
              What happens next reveals everything about how a company operates.
            </p>

            <div className="space-y-6">
              {problems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 rounded-lg bg-charcoal-light p-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-charcoal-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="relative space-y-6">
            <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/50 p-8 md:p-10 space-y-6 backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Lead Engine</span>
              </div>

              <h3 className="text-2xl md:text-3xl text-charcoal-foreground font-bold">
                Elite Craftsmanship, Managed with Modern Precision.
              </h3>

              <p className="text-charcoal-foreground/70 text-lg leading-relaxed">
                Our speed isn't a gimmick — it's proof of an organized process. 
                The same discipline that gets you a callback in minutes is what keeps 
                your project on budget, on time, and built to the highest standard.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-6 flex items-start gap-5"
                >
                  <div className="flex-shrink-0 rounded-lg bg-primary/15 p-3">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl font-bold text-primary">{pillar.value}</span>
                      <span className="text-xs text-charcoal-foreground/50">{pillar.label}</span>
                    </div>
                    <h4 className="text-charcoal-foreground font-semibold">{pillar.title}</h4>
                    <p className="text-sm text-charcoal-foreground/60 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
