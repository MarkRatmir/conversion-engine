import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle2, Zap } from "lucide-react";

const projectTypes = [
  "Full Roof Replacement",
  "Roof Repair",
  "New Construction",
  "Insulation & Waterproofing",
  "Inspection & Consultation",
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    projectType: "",
    location: "",
    size: "",
    phone: "",
    name: "",
  });

  const canProceed = () => {
    if (step === 1) return form.projectType !== "";
    if (step === 2) return form.location.trim() !== "" && form.size.trim() !== "";
    if (step === 3) return form.phone.trim() !== "" && form.name.trim() !== "";
    return false;
  };

  const handleSubmit = () => {
    // In production, this would POST to a Make.com webhook
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Quote Request Received!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Our site foreman has been notified via WhatsApp. Expect a call within 2 minutes
          during business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`h-2 rounded-full flex-1 transition-colors duration-300 ${
                s <= step ? "bg-primary" : "bg-border"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold mb-1">What project do you need?</h3>
            <p className="text-sm text-muted-foreground">Select the type of work</p>
          </div>
          <div className="grid gap-3">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setForm({ ...form, projectType: type })}
                className={`rounded-lg border px-5 py-4 text-left text-sm font-medium transition-all duration-200 ${
                  form.projectType === type
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground hover:border-foreground/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold mb-1">Location & Size</h3>
            <p className="text-sm text-muted-foreground">Help us understand the scope</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Location / Address</label>
              <Input
                placeholder="e.g. Tallinn, Haabersti district"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="py-5"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Approximate Size (m²)</label>
              <Input
                placeholder="e.g. 120"
                type="number"
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className="py-5"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold mb-1">Your Contact Details</h3>
            <p className="text-sm text-muted-foreground">We'll reach out within minutes</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Your Name</label>
              <Input
                placeholder="e.g. Andres"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="py-5"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Phone / WhatsApp</label>
              <Input
                placeholder="+372 ..."
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="py-5"
              />
            </div>
          </div>
        </div>
      )}

      {/* Nav */}
      <div className="flex gap-3">
        {step > 1 && (
          <Button
            variant="outline"
            onClick={() => setStep(step - 1)}
            className="py-5 px-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        )}
        {step < 3 ? (
          <Button
            disabled={!canProceed()}
            onClick={() => setStep(step + 1)}
            className="flex-1 py-5 bg-primary hover:bg-orange-glow text-primary-foreground"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            disabled={!canProceed()}
            onClick={handleSubmit}
            className="flex-1 py-5 bg-primary hover:bg-orange-glow text-primary-foreground"
          >
            Submit Quote Request
          </Button>
        )}
      </div>

      {/* Live sync badge */}
      <div className="flex justify-center">
        <div className="badge-live text-xs">
          <Zap className="h-3 w-3" />
          <span>Live Sync: Submissions alert our site foreman via WhatsApp instantly</span>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
