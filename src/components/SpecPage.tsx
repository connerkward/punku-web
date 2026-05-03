import Micrographics from "./Micrographics";

const SPECS: Array<[string, string]> = [
  ["DESIGNATION",  "PNK / 03 · ANDESITE"],
  ["BUILD",        "RACK 19″ · 1U"],
  ["WEIGHT",       "2.18 KG"],
  ["DIMENSION",    "218 × 176 × 44 MM"],
  ["MATERIAL",     "AL 6061—T6 · ANDESITE INLAY"],
  ["PROVENANCE",   "QOSQO · 13.53°S 71.97°W"],
  ["ALTITUDE",     "3,399 M.A.S.L."],
  ["INPUT",        "100—240 V · 50/60 HZ"],
  ["TEMP RANGE",   "−40 / +85 °C"],
  ["INGRESS",      "IP67 · DUST · WATER · GRIT"],
  ["TUTELARY",     "APU SALKANTAY · 6,271 M"],
  ["CERT",         "CHAKANA · CE · FCC · ISO 9001"],
];

export default function SpecPage() {
  return (
    <div className="frame" id="spec">
      <Micrographics
        sectionId="02"
        sectionName="SPEC"
        subtitle="RUWAY"
        ja="仕様"
        barcode="0—4839—2210—03"
        barcodeSeed={88}
      />

      <div className="frame__safe spec">
        <header className="spec__head">
          <h2 className="spec__title">
            SPEC <span className="amp">&amp;</span> DIAGRAM
          </h2>
          <span className="spec__id tech">
            UNIT PNK / 03 · ANDESITE · <span className="ja">仕様書</span>
          </span>
        </header>

        <div className="spec__body">
          <div className="spec__diagram">
            <svg viewBox="0 0 360 320" width="100%" height="100%" role="img" aria-label="PNK/03 schematic">
              {/* chassis */}
              <rect x="80" y="100" width="200" height="160" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <rect x="100" y="120" width="160" height="80" fill="none" stroke="currentColor" strokeWidth="1" />

              {/* central aperture — punku (door) */}
              <rect x="158" y="138" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="172" y="156" width="16" height="20" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="184" cy="166" r="0.9" fill="currentColor" />

              {/* dial */}
              <circle cx="180" cy="240" r="14" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="180" cy="240" r="2" fill="currentColor" />

              {/* port row */}
              {Array.from({ length: 8 }).map((_, i) => (
                <rect key={i} x={100 + i * 20} y={222} width="14" height="10" fill="none" stroke="currentColor" strokeWidth="0.8" />
              ))}

              {/* chassis screws */}
              {[[90, 110], [270, 110], [90, 250], [270, 250]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
              ))}

              {/* annotation tag */}
              <g fontFamily="Atkinson Hyperlegible Mono, ui-monospace, monospace" fontSize="7" fill="currentColor" letterSpacing="1">
                <line x1="202" y1="160" x2="244" y2="138" stroke="currentColor" strokeWidth="0.6" />
                <text x="246" y="138">PUNKU APERTURE</text>
                <line x1="158" y1="160" x2="116" y2="138" stroke="currentColor" strokeWidth="0.6" />
                <text x="62" y="138">CHAKANA SHIELD</text>
              </g>
            </svg>
          </div>

          <dl className="spec__table">
            {SPECS.map(([k, v]) => (
              <div key={k} className="spec__table-row">
                <dt className="tech">{k}</dt>
                <dd className="tech">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
