import Micrographics from "./Micrographics";

const SPECS = [
  ["DESIGNATION", "PNK / 03"],
  ["BUILD", "RACK 19″ · 1U"],
  ["WEIGHT", "2.18 KG"],
  ["DIMENSION", "218 × 176 × 44 MM"],
  ["MATERIAL", "AL 6061—T6"],
  ["INPUT", "100—240 V"],
  ["TEMP RANGE", "−40 / +85 °C"],
  ["INGRESS", "IP67"],
];

export default function SpecPage() {
  return (
    <div className="frame" id="spec">
      <Micrographics sectionId="02" sectionName="SPEC" barcode="0—4839—2210—03" barcodeSeed={88} />

      <div className="frame__safe spec">
        <header className="spec__head">
          <h2 className="spec__title">
            SPEC <span className="amp">&amp;</span> DIAGRAM
          </h2>
          <span className="spec__id tech">UNIT PNK / 03</span>
        </header>

        <div className="spec__body">
          <div className="spec__diagram">
            <svg viewBox="0 0 360 320" width="100%" height="100%" role="img" aria-label="PNK/03 schematic">
              <rect x="80" y="100" width="200" height="160" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <rect x="100" y="120" width="160" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="180" cy="160" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="180" cy="160" r="3" fill="currentColor" />
              {Array.from({ length: 8 }).map((_, i) => (
                <rect key={i} x={100 + i * 20} y={222} width="14" height="24" fill="none" stroke="currentColor" strokeWidth="0.8" />
              ))}
              {[[90, 110], [270, 110], [90, 250], [270, 250]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
              ))}
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
