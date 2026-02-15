import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-charcoal-light">
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        <a href="/" className="text-charcoal-foreground font-bold text-xl tracking-tight">
          Tallinn <span className="text-primary">Premium</span> Roofing
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#testimonials" className="text-sm text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors">Reviews</a>
          <a href="#calculator" className="text-sm text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors">Pricing</a>
          <a href="tel:+3721234567" className="text-sm text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" />
            +372 123 4567
          </a>
          <Button
            size="sm"
            onClick={scrollToForm}
            className="bg-primary hover:bg-orange-glow text-primary-foreground"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-charcoal-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-charcoal-light px-4 pb-6 pt-4 space-y-4">
          <a href="#testimonials" onClick={() => setOpen(false)} className="block text-charcoal-foreground/70 py-2">Reviews</a>
          <a href="#calculator" onClick={() => setOpen(false)} className="block text-charcoal-foreground/70 py-2">Pricing</a>
          <Button onClick={scrollToForm} className="w-full bg-primary hover:bg-orange-glow text-primary-foreground">
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
