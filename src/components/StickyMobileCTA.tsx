import { Phone } from "lucide-react";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:+3721234567"
        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-semibold text-lg shadow-lg shadow-primary/30"
      >
        <Phone className="h-5 w-5" />
        Call Now — Free Estimate
      </a>
    </div>
  );
};

export default StickyMobileCTA;
