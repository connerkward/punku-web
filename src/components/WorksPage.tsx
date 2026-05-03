import Micrographics from "./Micrographics";

type Work = {
  num: string;
  name: string;
  gloss: string;
  type: string;
  alt: string;
  status: "SHIPPED" | "FIELD" | "WIP" | "ARCHIVE";
};

const WORKS: Work[] = [
  { num: "01", name: "ANDESITE / OS",      gloss: "STONE",      type: "INTERFACE",    alt: "3,399 M", status: "FIELD"    },
  { num: "02", name: "QORI MEMORY UNIT",   gloss: "GOLD",       type: "OBJECT",       alt: "0,008 M", status: "SHIPPED"  },
  { num: "03", name: "INTI WATCHTOWER",    gloss: "SUN",        type: "INSTALLATION", alt: "4,212 M", status: "SHIPPED"  },
  { num: "04", name: "PACHA TERMINAL",     gloss: "EARTH·TIME", type: "INTERFACE",    alt: "3,820 M", status: "WIP"      },
  { num: "05", name: "ALPACA RELAY",       gloss: "HERD MESH",  type: "OBJECT",       alt: "4,604 M", status: "SHIPPED"  },
  { num: "06", name: "QUIPU LEDGER",       gloss: "KNOT·DATA",  type: "RESEARCH",     alt: "—",       status: "ARCHIVE"  },
  { num: "07", name: "WAYRA WIND ARRAY",   gloss: "WIND",       type: "INSTALLATION", alt: "5,128 M", status: "FIELD"    },
  { num: "08", name: "CHASKIY DISPATCH",   gloss: "MESSENGER",  type: "INTERFACE",    alt: "—",       status: "WIP"      },
  { num: "09", name: "APU SENSOR NODE",    gloss: "MOUNTAIN",   type: "OBJECT",       alt: "6,271 M", status: "FIELD"    },
];

export default function WorksPage() {
  return (
    <div className="frame" id="works">
      <Micrographics
        sectionId="01"
        sectionName="INDEX"
        subtitle="KILLKA"
        ja="索引"
        barcode="0—4839—2210—02"
        barcodeSeed={42}
      />

      <div className="frame__safe works">
        <header className="works__head">
          <h2 className="works__title">
            INDEX <span className="amp">&amp;</span> WORKS
          </h2>
          <span className="works__count tech">
            09 / 14 · KILLKA · <span className="ja">索引</span>
          </span>
        </header>

        <ol className="works__list">
          {WORKS.map((w) => (
            <li key={w.num} className="works__row">
              <span className="works__num tech">{w.num}</span>
              <span className="works__name">{w.name}</span>
              <span className="works__gloss tech">{w.gloss}</span>
              <span className="works__type tech">{w.type}</span>
              <span className="works__alt tech">{w.alt}</span>
              <span className={`works__status works__status--${w.status.toLowerCase()} tech`}>
                {w.status}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
