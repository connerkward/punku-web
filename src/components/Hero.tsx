import Micrographics from "./Micrographics";

export default function Hero() {
  return (
    <div className="frame">
      <Micrographics
        sectionId="00"
        sectionName="COVER"
        topLeftStamp={["SECTION A—A", "SCALE 1:1", "SHEET 01 / 04"]}
        topRightStamp={["DOC# PNK—2026—042", "REV. D", "CLASS II / TYPE B"]}
        barcode="0—4839—2210—01"
      />

      <div className="frame__safe hero">
        <div className="hero__overline tech">
          <span className="hero__pill">MODEL — PNK/03</span>
          <span className="hero__sep">·</span>
          <span>BATCH 2026—Q2</span>
          <span className="hero__sep">·</span>
          <span>LOT 0042</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line">PUNKU</span>
          <span className="hero__line hero__line--meta">
            <span>STUDIO</span>
            <span className="amp">&amp;</span>
            <span>FIELD&nbsp;LAB</span>
          </span>
        </h1>

        <div className="hero__readout">
          <dl className="hero__stats tech">
            <div>
              <dt>OPERATING&nbsp;TEMP</dt>
              <dd>−40 / +85 °C</dd>
            </div>
            <div>
              <dt>INPUT</dt>
              <dd>100—240 V</dd>
            </div>
            <div>
              <dt>SERIAL</dt>
              <dd>P—0042—XX</dd>
            </div>
            <div>
              <dt>WEIGHT</dt>
              <dd>2.18 KG</dd>
            </div>
          </dl>
        </div>

        <p className="hero__lede">
          A small industrial workshop building <span className="amp">&amp;</span>{" "}
          shipping interface, system <span className="amp">&amp;</span> object —
          tested in the field, certified for the rack, made to outlast the brief.
        </p>

        <div className="hero__row">
          <a href="#works" className="hero__cta">
            <span className="hero__cta-icon" aria-hidden="true">
              ▶
            </span>
            <span className="hero__cta-label">VIEW INDEX</span>
            <span className="tech hero__cta-meta">[01—14]</span>
          </a>
          <div className="hero__certs tech" aria-label="Certifications">
            <span className="cert">CE</span>
            <span className="cert">FCC</span>
            <span className="cert">RoHS</span>
            <span className="cert">IP67</span>
            <span className="cert">ISO·9001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
