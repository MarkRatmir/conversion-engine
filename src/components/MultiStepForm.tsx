import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, CheckCircle2, Zap } from "lucide-react";

const projectTypes = [
  "Katuse täisvahetus",
  "Katuse remont",
  "Uusehitus",
  "Soojustus ja hüdroisolatsioon",
  "Ülevaatus ja konsultatsioon",
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

  const handleSubmit = async () => {
    try {
      const webhookUrl = "https://hook.eu1.make.com/lg1unpe79xflnp4riywk6lzdbcls644l";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        console.log("Form successfully sent to Make.com");
        setSubmitted(true);
      } else {
        console.error("Submission failed.");
        alert("Päringu saatmisel tekkis viga. Palun proovige uuesti.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Võrgu viga. Palun kontrollige ühendust.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center space-y-6 py-8">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">Hinnapäring vastu võetud!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Meie objektijuhti on teavitatud WhatsAppi kaudu. Oodake kõnet 2 minuti jooksul
          tööajal.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Edenemine */}
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

      {/* Samm 1 */}
      {step === 1 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold mb-1">Millist projekti vajate?</h3>
            <p className="text-sm text-muted-foreground">Valige töö tüüp</p>
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

      {/* Samm 2 */}
      {step === 2 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold mb-1">Asukoht ja suurus</h3>
            <p className="text-sm text-muted-foreground">Aidake meil mahtu mõista</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Asukoht / Aadress</label>
              <Input
                placeholder="nt Tallinn, Haabersti linnaosa"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="py-5"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Ligikaudne suurus (m²)</label>
              <Input
                placeholder="nt 120"
                type="number"
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className="py-5"
              />
            </div>
          </div>
        </div>
      )}

      {/* Samm 3 */}
      {step === 3 && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h3 className="text-xl font-bold mb-1">Teie kontaktandmed</h3>
            <p className="text-sm text-muted-foreground">Võtame teiega ühendust minutitega</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Teie nimi</label>
              <Input
                placeholder="nt Andres"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="py-5"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Telefon / WhatsApp</label>
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

      {/* Navigeerimine */}
      <div className="flex gap-3">
        {step > 1 && (
          <Button
            variant="outline"
            onClick={() => setStep(step - 1)}
            className="py-5 px-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tagasi
          </Button>
        )}
        {step < 3 ? (
          <Button
            disabled={!canProceed()}
            onClick={() => setStep(step + 1)}
            className="flex-1 py-5 bg-primary hover:bg-orange-glow text-primary-foreground"
          >
            Edasi
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            disabled={!canProceed()}
            onClick={handleSubmit}
            className="flex-1 py-5 bg-primary hover:bg-orange-glow text-primary-foreground"
          >
            Saada hinnapäring
          </Button>
        )}
      </div>

      {/* Reaalajas sünkroonimine */}
      <div className="flex justify-center">
        <div className="badge-live text-xs">
          <Zap className="h-3 w-3" />
          <span>Reaalajas sünkroonimine: Päringud teavitavad meie objektijuhti WhatsAppi kaudu koheselt</span>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
