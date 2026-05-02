import Micrographics from "./Micrographics";

export default function Hero() {
  return (
    <div className="frame">
      <Micrographics sectionId="00" sectionName="COVER" barcode="0—4839—2210—01" />

      <div className="frame__safe hero">
        <h1 className="hero__title">
          <span className="hero__line">PUNKU</span>
        </h1>
        <div className="hero__sub tech">
          STUDIO <span className="amp">&amp;</span> FIELD LAB · EST. 2026
        </div>

        <p className="hero__lede">
          A small industrial workshop building <span className="amp">&amp;</span>{" "}
          shipping interface, system <span className="amp">&amp;</span> object —
          tested in the field, certified for the rack, made to outlast the brief.
        </p>

        <div className="hero__row">
          <a href="#works" className="hero__cta">
            <span className="hero__cta-icon" aria-hidden="true">▶</span>
            <span>VIEW INDEX</span>
          </a>
          <div className="hero__stats tech">
            <span>14 WORKS</span>
            <span className="hero__stats-sep">·</span>
            <span>2 CONTINENTS</span>
            <span className="hero__stats-sep">·</span>
            <span>SHIPPING</span>
          </div>
        </div>
      </div>
    </div>
  );
}
