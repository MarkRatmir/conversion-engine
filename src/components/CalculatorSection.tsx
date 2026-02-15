import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const roofTypes = [
  { label: "Metal", pricePerSqm: [45, 75] },
  { label: "Tile", pricePerSqm: [55, 90] },
  { label: "Flat / Bitumen", pricePerSqm: [35, 60] },
  { label: "Slate", pricePerSqm: [70, 120] },
];

const CalculatorSection = () => {
  const [sqm, setSqm] = useState(120);
  const [selectedType, setSelectedType] = useState(0);

  const type = roofTypes[selectedType];
  const low = sqm * type.pricePerSqm[0];
  const high = sqm * type.pricePerSqm[1];

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Calculator className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wider">Price Estimator</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Get an Instant <span className="text-primary">Price Range</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Select your roof type and area to see an estimated price range. 
              For a precise quote, submit the form below.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 space-y-8 shadow-sm">
            {/* Roof Type */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Roof Type</label>
              <div className="grid grid-cols-2 gap-3">
                {roofTypes.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setSelectedType(i)}
                    className={`rounded-lg border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      i === selectedType
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-foreground">Roof Area</label>
                <span className="text-2xl font-bold text-primary">{sqm} m²</span>
              </div>
              <Slider
                value={[sqm]}
                onValueChange={(v) => setSqm(v[0])}
                min={20}
                max={500}
                step={10}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>20 m²</span>
                <span>500 m²</span>
              </div>
            </div>

            {/* Result */}
            <div className="rounded-xl bg-charcoal p-6 text-center space-y-2">
              <p className="text-sm text-charcoal-foreground/60">Estimated Price Range</p>
              <p className="text-3xl font-bold text-charcoal-foreground">
                €{low.toLocaleString()} – €{high.toLocaleString()}
              </p>
              <p className="text-xs text-charcoal-foreground/40">
                Includes materials, labor & warranty
              </p>
            </div>

            <Button
              onClick={scrollToForm}
              className="w-full py-6 text-lg bg-primary hover:bg-orange-glow text-primary-foreground shadow-lg shadow-primary/20"
            >
              Get Your Exact Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
