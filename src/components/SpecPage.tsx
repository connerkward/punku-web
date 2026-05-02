import Micrographics from "./Micrographics";

export default function SpecPage() {
  return (
    <div className="frame" id="spec">
      <Micrographics
        sectionId="02"
        sectionName="SPEC SHEET"
        topLeftStamp={["DRG. 042—B", "ORTHO. PROJ.", "1ST ANGLE"]}
        topRightStamp={["MATERIAL: 6061—T6", "FINISH: BEAD", "TOL. ±0.05"]}
        barcode="0—4839—2210—03"
        barcodeSeed={88}
      />

      <div className="frame__safe spec">
        <header className="spec__head">
          <h2 className="spec__title">
            <span className="spec__title-num tech">02 /</span>
            <span className="spec__title-word">SPEC</span>
            <span className="amp">&amp;</span>
            <span className="spec__title-word">DIAGRAM</span>
          </h2>
          <div className="spec__id tech">
            <span>UNIT &nbsp;PNK/03</span>
            <span className="spec__id-sep">·</span>
            <span>SHEET 03 / 04</span>
          </div>
        </header>

        <div className="spec__body">
          <div className="spec__diagram">
            <svg
              viewBox="0 0 360 360"
              width="100%"
              height="100%"
              role="img"
              aria-label="PNK/03 schematic"
            >
              {/* dashed framing */}
              <rect
                x="20"
                y="20"
                width="320"
                height="320"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="2 4"
                opacity="0.5"
              />
              {/* main body */}
              <rect
                x="80"
                y="100"
                width="200"
                height="160"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              {/* inset slot */}
              <rect
                x="100"
                y="120"
                width="160"
                height="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* center disc */}
              <circle cx="180" cy="160" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="180" cy="160" r="3" fill="currentColor" />
              <line x1="180" y1="138" x2="180" y2="182" stroke="currentColor" strokeWidth="0.6" />
              <line x1="158" y1="160" x2="202" y2="160" stroke="currentColor" strokeWidth="0.6" />
              {/* lower vents */}
              {Array.from({ length: 8 }).map((_, i) => (
                <rect
                  key={i}
                  x={100 + i * 20}
                  y={222}
                  width="14"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              ))}
              {/* corner mounting holes */}
              {[
                [90, 110],
                [270, 110],
                [90, 250],
                [270, 250],
              ].map(([cx, cy], i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="3" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx={cx} cy={cy} r="0.8" fill="currentColor" />
                </g>
              ))}
              {/* dimension lines */}
              <line x1="80" y1="80" x2="280" y2="80" stroke="currentColor" strokeWidth="0.6" />
              <line x1="80" y1="76" x2="80" y2="84" stroke="currentColor" strokeWidth="0.6" />
              <line x1="280" y1="76" x2="280" y2="84" stroke="currentColor" strokeWidth="0.6" />
              <text
                x="180"
                y="74"
                textAnchor="middle"
                fontFamily="JetBrains Mono"
                fontSize="9"
                fill="currentColor"
              >
                218.0 MM
              </text>
              <line x1="300" y1="100" x2="300" y2="260" stroke="currentColor" strokeWidth="0.6" />
              <line x1="296" y1="100" x2="304" y2="100" stroke="currentColor" strokeWidth="0.6" />
              <line x1="296" y1="260" x2="304" y2="260" stroke="currentColor" strokeWidth="0.6" />
              <text
                x="310"
                y="183"
                fontFamily="JetBrains Mono"
                fontSize="9"
                fill="currentColor"
              >
                176.0
              </text>
              {/* callouts */}
              <g>
                <line x1="180" y1="160" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="9" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <text x="60" y="63" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor">A</text>
              </g>
              <g>
                <line x1="180" y1="234" x2="320" y2="300" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="320" cy="300" r="9" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <text x="320" y="303" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor">B</text>
              </g>
            </svg>
          </div>

          <aside className="spec__table">
            <div className="spec__table-head tech">
              <span>FIELD</span>
              <span>VALUE</span>
            </div>
            {[
              ["DESIGNATION", "PNK/03"],
              ["BUILD", "RACK 19″ · 1U"],
              ["WEIGHT", "2.18 KG"],
              ["DIMENSION", "218 × 176 × 44 MM"],
              ["MATERIAL", "AL 6061—T6"],
              ["FINISH", "BEAD BLAST · ANODISED"],
              ["INPUT", "100—240 V · 50/60 HZ"],
              ["DRAW", "0.42 A @ 230 V"],
              ["TEMP RANGE", "−40 / +85 °C"],
              ["INGRESS", "IP67"],
              ["INTERFACES", "USB—C · ETH · DB9"],
              ["FIRMWARE", "v3.04—FIELD"],
            ].map(([k, v]) => (
              <div key={k} className="spec__table-row">
                <span className="spec__table-key tech">{k}</span>
                <span className="spec__table-value tech">{v}</span>
              </div>
            ))}
          </aside>
        </div>

        <div className="spec__notes tech" aria-label="Drawing notes">
          <span className="spec__note">⚠ HANDLE WITH ESD STRAP</span>
          <span className="spec__note">A — PRIMARY SENSOR PORT</span>
          <span className="spec__note">B — VENT / PASSIVE COOLING</span>
          <span className="spec__note">CONFORMS · CE · FCC—A · ROHS · IP67</span>
        </div>
      </div>
    </div>
  );
}
