import { PhoneOff, Clock, ShieldAlert, Zap, Award, Milestone, Shield } from "lucide-react";

const problems = [
  { icon: PhoneOff, text: "Helistate viiele ehitajale. Kolm ei vasta kunagi. See pole lihtsalt ebaviisakas — see on hoiatusmärk. Kui nad ei suuda telefonikõnet hallata, kuidas nad teie projekti juhivad?" },
  { icon: Clock, text: "Kaks lubavad hinnapakkumist 'reedeks'. Reede tuleb ja läheb. Korralagedus alguses tähendab viivitusi, eelarve ületamist ja töö kvaliteedi langust." },
  { icon: ShieldAlert, text: "Ignoreerimine pole lihtsalt halb teenindus — see on halva juhtimise sümptom. Ja halb juhtimine ehitab halva kvaliteediga hooneid." },
];

const pillars = [
  {
    icon: Zap,
    title: "Kiire reageerimine",
    value: "2 min",
    label: "Keskm. vastamisaeg",
    description: "Meie süsteem teavitab meeskonda kohe, kui te pöördute. Ei mingit kõneposti ega päevade kaupa ootamist — päris inimene, minutitega.",
  },
  {
    icon: Award,
    title: "Meistriklass kvaliteet",
    value: "10 a",
    label: "Konstruktsiooni garantii",
    description: "Üle kümne aasta praktilise kogemusega toetab iga projekti 10-aastane garantii kõigile konstruktsioonitöödele. Me ehitame, et kestaks.",
  },
  {
    icon: Milestone,
    title: "Läbipaistvad vahe-eesmärgid",
    value: "100%",
    label: "Edenemise nähtavus",
    description: "Meie süsteem ei peatu pärast esimest kõnet. Hoiame teid kursis igal etapil — loast kuni lõppülevaatuseni.",
  },
];

const PainPointSection = () => {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Probleem */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-charcoal-foreground">
              Miks enamik ehitusprojekte{" "}
              <span className="text-primary">ebaõnnestub</span> enne algust?
            </h2>

            <p className="text-lg text-charcoal-foreground/70 leading-relaxed">
              See algab alati ühtemoodi. Teil on vaja töid teha, nii et hakkate helistama.
              See, mis järgneb, paljastab kõik selle kohta, kuidas ettevõte töötab.
            </p>

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

          {/* Lahendus */}
          <div className="relative space-y-6">
            <div className="rounded-2xl border border-charcoal-light bg-charcoal-light/50 p-8 md:p-10 space-y-6 backdrop-blur">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Meie süsteem</span>
              </div>

              <h3 className="text-2xl md:text-3xl text-charcoal-foreground font-bold">
                Tipptasemel käsitöö, juhitud kaasaegse täpsusega.
              </h3>

              <p className="text-charcoal-foreground/70 text-lg leading-relaxed">
                Meie kiirus pole trikk — see on tõend organiseeritud protsessist.
                Sama distsipliin, mis tagab teile tagasihelistuse minutitega, hoiab
                teie projekti eelarves, graafikus ja kõrgeima standardi järgi ehitatuna.
              </p>
            </div>

            {/* Kolm sammast */}
            <div className="grid gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-charcoal-light bg-charcoal-light/30 p-6 flex items-start gap-5"
                >
                  <div className="flex-shrink-0 rounded-lg bg-primary/15 p-3">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xl font-bold text-primary">{pillar.value}</span>
                      <span className="text-xs text-charcoal-foreground/50">{pillar.label}</span>
                    </div>
                    <h4 className="text-charcoal-foreground font-semibold">{pillar.title}</h4>
                    <p className="text-sm text-charcoal-foreground/60 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
