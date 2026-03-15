import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roofing.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tallinn Premium Roofing valmis katuseprojekt"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow section-padding w-full">
        <div className="max-w-2xl space-y-8">
          <div className="badge-live">
            <span>Teenindame Tallinna ja Harjumaad</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-charcoal-foreground">
            Saage eluaegselt garanteeritud katus, mis vähendab energiakulusid{" "}
            <span className="text-primary">20%</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-foreground/80 max-w-xl leading-relaxed">
            Professionaalne Eesti käsitöö koos meie 60-sekundilise reageerimissüsteemiga.
            Me ei ehita lihtsalt — me kaitseme teie investeeringut.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-8 py-6 bg-primary hover:bg-orange-glow text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Küsige täpset hinnapakkumist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary/50 text-primary hover:bg-primary/10 hover:text-white backdrop-blur"
              asChild
            >
              <a href="tel:+3721234567">
                <Phone className="mr-2 h-5 w-5" />
                Helista kohe
              </a>
            </Button>
          </div>

          <p className="text-sm text-charcoal-foreground/60">
            ⚡ Keskmine reageerimisaeg: <span className="font-semibold text-primary">2 minutit</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
