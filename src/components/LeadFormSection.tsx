import MultiStepForm from "./MultiStepForm";

const LeadFormSection = () => {
  return (
    <section id="lead-form" className="section-padding bg-charcoal">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal-foreground">
              Ready for a Roof That <span className="text-primary">Lasts a Lifetime?</span>
            </h2>
            <p className="text-charcoal-foreground/70 text-lg leading-relaxed">
              Fill out the quick form and our team will get back to you faster than any other 
              contractor in Estonia. That's not marketing — that's our system.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "No-obligation precision quote",
                "Response within 2 minutes",
                "25-year craftsmanship guarantee",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-charcoal-foreground/80">
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 md:p-8 shadow-xl">
            <MultiStepForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
