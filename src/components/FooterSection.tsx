const FooterSection = () => {
  return (
    <footer className="bg-charcoal border-t border-charcoal-light py-12 pb-24 md:pb-12">
      <div className="container-narrow px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-charcoal-foreground font-bold text-lg">
            Tallinn <span className="text-primary">Premium</span> Roofing
          </div>
          <div className="flex gap-8 text-sm text-charcoal-foreground/50">
            <span>© 2026 All rights reserved</span>
            <a href="#" className="hover:text-charcoal-foreground/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-charcoal-foreground/80 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
