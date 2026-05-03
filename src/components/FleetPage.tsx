import Micrographics from "./Micrographics";
import WireframeCar from "./WireframeCar";

type Variant = "coupe" | "wagon" | "truck";

type Unit = {
  id: string;
  name: string;
  gloss: string;
  variant: Variant;
  spec: string;
  origin: string;
};

const FLEET: Unit[] = [
  { id: "F—01", name: "PNK / INTI",  gloss: "SUN",      variant: "coupe", spec: "2D · LOW · CHASSIS A", origin: "QOSQO · 3,399 M" },
  { id: "F—02", name: "PNK / KILLA", gloss: "MOON",     variant: "wagon", spec: "5D · MID · CHASSIS B", origin: "PUNO · 3,827 M"  },
  { id: "F—03", name: "PNK / APU",   gloss: "MOUNTAIN", variant: "truck", spec: "2D · HVY · CHASSIS C", origin: "AUSANGATE · 6,384 M" },
];

export default function FleetPage() {
  return (
    <div className="frame" id="fleet">
      <Micrographics
        sectionId="03"
        sectionName="FLEET"
        subtitle="AYLLU"
        ja="隊列"
        barcode="0—4839—2210—04"
        barcodeSeed={117}
      />

      <div className="frame__safe fleet">
        <header className="fleet__head">
          <h2 className="fleet__title">
            FLEET <span className="amp">&amp;</span> MESH
          </h2>
          <span className="fleet__count tech">03 / 03 · AYLLU</span>
        </header>

        <div className="fleet__grid">
          {FLEET.map((f) => (
            <article key={f.id} className="fleet__card">
              <div className="fleet__art">
                <WireframeCar variant={f.variant} />
              </div>
              <footer className="fleet__meta">
                <span className="fleet__id tech">{f.id}</span>
                <span className="fleet__name">
                  {f.name} <span className="fleet__gloss">/ {f.gloss}</span>
                </span>
                <span className="fleet__spec tech">{f.spec}</span>
                <span className="fleet__origin tech">{f.origin}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
