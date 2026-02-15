import { PhoneOff, Clock, ShieldAlert, Zap } from "lucide-react";

const problems = [
  { icon: PhoneOff, text: "You call five contractors. Three don't answer." },
  { icon: Clock, text: "Two say they'll send a quote and never do." },
  { icon: ShieldAlert, text: "You're left waiting while your home stays at risk." },
];

const PainPointSection = () => {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal-foreground">
              Why Do Most Construction Projects{" "}
              <span className="text-primary">Fail</span> Before They Start?
            </h2>

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
          <div className="relative">
            <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/50 p-8 md:p-10 space-y-6 backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Lead Engine</span>
              </div>

              <h3 className="text-2xl md:text-3xl text-charcoal-foreground font-bold">
                Our system is different.
              </h3>

              <p className="text-charcoal-foreground/70 text-lg leading-relaxed">
                When you message us, our AI-powered bridge alerts our team instantly. 
                We value your time as much as our craft. No ghosting, no delays — just 
                a real person getting back to you in minutes, not days.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-charcoal-light">
                {[
                  { value: "2 min", label: "Avg. Response" },
                  { value: "100+", label: "Projects Done" },
                  { value: "25yr", label: "Guarantee" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-charcoal-foreground/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
