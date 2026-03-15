import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andres K.",
    source: "Google",
    rating: 5,
    text: "Nad vastasid minuti jooksul pärast mu päringut. Katus on täiuslik — ei mingeid lekkeid kahe Eesti talve järel. Tõeliselt silmapaistev käsitöö.",
    project: "Katuse täisvahetus",
  },
  {
    name: "Maria L.",
    source: "Facebook",
    rating: 5,
    text: "Olin alguses skeptiline, kuid nad tegid töö valmis enne tähtaega ja eelarvest väiksema summaga. Meie energiaarve langes märgatavalt pärast uut soojustust.",
    project: "Soojustatud katus",
  },
  {
    name: "Toomas R.",
    source: "Google",
    rating: 5,
    text: "Professionaalsed algusest lõpuni. Nad saatsid üksikasjaliku pakkumise samal päeval, kui helistasin. Viis ehitajat ignoreerisid mind — need mehed tulid kohale.",
    project: "Ärihoone lamekatus",
  },
  {
    name: "Katrin S.",
    source: "Google",
    rating: 5,
    text: "Ilus metallkatus paigaldati vaid 4 päevaga. Meeskond oli korralik, organiseeritud ja lugupidav. Soovitan soojalt kõigile Tallinnas.",
    project: "Metallkatus",
  },
  {
    name: "Peeter V.",
    source: "Facebook",
    rating: 5,
    text: "Nende 25-aastane garantii andis meile meelerahu. On möödunud 3 aastat ja katus näeb välja nagu uus. Iga sent seda väärt.",
    project: "Kivikatuse renoveerimine",
  },
  {
    name: "Liis M.",
    source: "Google",
    rating: 5,
    text: "Nende veebilehe hinnakalkulaator oli täpne. Ei mingeid üllatusi, ei mingeid varjatud kulusid. Selline läbipaistvus on ehituses haruldane.",
    project: "Katuse remont",
  },
];

const sourceColors: Record<string, string> = {
  Google: "bg-primary/10 text-primary",
  Facebook: "bg-blue-500/10 text-blue-500",
};

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-surface-warm">
      <div className="container-narrow">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Miks <span className="text-primary">100+ koduomanikku</span> valis meid
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tõelised arvustused tõelistelt Eesti koduomanikelt. Ei mingit võltsi ega liialdust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-6 space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className={`text-xs font-medium rounded-full px-3 py-1 ${sourceColors[t.source]}`}>
                  {t.source}
                </span>
              </div>

              <p className="text-foreground/80 leading-relaxed">"{t.text}"</p>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.project}</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-charcoal flex items-center justify-center text-charcoal-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
