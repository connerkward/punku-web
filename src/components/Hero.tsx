import Micrographics from "./Micrographics";
import WireframeCar from "./WireframeCar";

export default function Hero() {
  return (
    <div className="frame">
      <Micrographics
        sectionId="00"
        sectionName="COVER"
        subtitle="QHAWAY"
        ja="表紙"
        barcode="0—4839—2210—01"
      />

      <div className="frame__safe hero">
        <div className="hero__art" aria-hidden="true">
          <WireframeCar variant="coupe" />
        </div>

        <div className="hero__pretitle tech">
          <span>PUNKU</span>
          <span className="hero__pretitle-sep">·</span>
          <span className="hero__pretitle-gloss">QHESWA · DOOR / GATE / THRESHOLD</span>
          <span className="hero__pretitle-sep">·</span>
          <span className="ja">門 · 入口</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line">PUNKU</span>
        </h1>
        <div className="hero__sub tech">
          STUDIO <span className="amp">&amp;</span> FIELD LAB · EST. 2026 · QOSQO
          <svg className="hero__sub-arrow" width="22" height="8" viewBox="0 0 22 8" aria-hidden="true">
            <path d="M0 4 H22 M18 1 L22 4 L18 7 M4 1 L0 4 L4 7" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          NEW YORK
          <span className="hero__sub-jp ja">·  京都  ·  産業</span>
        </div>

        <p className="hero__lede">
          A small industrial workshop building <span className="amp">&amp;</span>{" "}
          shipping interface, system <span className="amp">&amp;</span> object —
          tested between sea level <span className="amp">&amp;</span> 4,200 m,
          certified for the rack, made to outlast the brief.
        </p>

        <div className="hero__row">
          <a href="#works" className="hero__cta">
            <svg className="hero__cta-icon" width="9" height="10" viewBox="0 0 9 10" aria-hidden="true">
              <polygon points="0,0 9,5 0,10" fill="currentColor" />
            </svg>
            <span>VIEW INDEX</span>
            <span className="ja hero__cta-jp">索引</span>
          </a>
          <div className="hero__stats tech">
            <span>14 WORKS</span>
            <span className="hero__stats-sep">·</span>
            <span>3,399 M · QOSQO</span>
            <span className="hero__stats-sep">·</span>
            <span>SHIPPING</span>
            <span className="hero__stats-sep">·</span>
            <span className="ja">出荷中</span>
          </div>
        </div>
      </div>
    </div>
  );
}
