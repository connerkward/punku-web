import Micrographics from "./Micrographics";

type Work = {
  num: string;
  name: string;
  type: string;
  year: string;
  serial: string;
  status: "SHIPPED" | "FIELD" | "WIP" | "ARCHIVE";
};

const WORKS: Work[] = [
  { num: "01", name: "ANDESITE / OS", type: "INTERFACE", year: "2026", serial: "AND-001", status: "FIELD" },
  { num: "02", name: "QORI MEMORY UNIT", type: "OBJECT", year: "2026", serial: "QMU-014", status: "SHIPPED" },
  { num: "03", name: "INTI WATCHTOWER", type: "INSTALLATION", year: "2025", serial: "INT-007", status: "SHIPPED" },
  { num: "04", name: "PACHA TERMINAL", type: "INTERFACE", year: "2025", serial: "PCH-022", status: "WIP" },
  { num: "05", name: "ALPACA RELAY", type: "OBJECT", year: "2025", serial: "ALP-003", status: "SHIPPED" },
  { num: "06", name: "QUIPU LEDGER", type: "RESEARCH", year: "2024", serial: "QPU-018", status: "ARCHIVE" },
  { num: "07", name: "WAYRA WIND ARRAY", type: "INSTALLATION", year: "2024", serial: "WYR-001", status: "FIELD" },
];

export default function WorksPage() {
  return (
    <div className="frame" id="works">
      <Micrographics
        sectionId="01"
        sectionName="INDEX / WORKS"
        topLeftStamp={["INDEX 01—07", "BY PROJECT", "DESC. 2026—24"]}
        topRightStamp={["FORMAT TABULAR", "COL. 05", "ENCODING UTF—8"]}
        barcode="0—4839—2210—02"
        barcodeSeed={42}
      />

      <div className="frame__safe works">
        <header className="works__head">
          <h2 className="works__title">
            <span className="works__title-num tech">01 /</span>
            <span className="works__title-word">INDEX</span>
            <span className="amp">&amp;</span>
            <span className="works__title-word">WORKS</span>
          </h2>
          <div className="works__count tech">
            <span className="works__count-label">CATALOGUED</span>
            <span className="works__count-num">07</span>
            <span className="works__count-of">/ 14</span>
          </div>
        </header>

        <div className="works__legend tech">
          <span className="works__legend-cell works__legend-cell--num">№</span>
          <span className="works__legend-cell">DESIGNATION</span>
          <span className="works__legend-cell">TYPE</span>
          <span className="works__legend-cell">YEAR</span>
          <span className="works__legend-cell">SERIAL</span>
          <span className="works__legend-cell works__legend-cell--right">STATUS</span>
        </div>

        <ol className="works__list">
          {WORKS.map((w) => (
            <li key={w.num} className="works__row">
              <span className="works__cell works__cell--num tech">{w.num}</span>
              <span className="works__cell works__cell--name">
                <span className="works__name">{w.name}</span>
                <span className="works__arrow" aria-hidden="true">↗</span>
              </span>
              <span className="works__cell tech">{w.type}</span>
              <span className="works__cell tech">{w.year}</span>
              <span className="works__cell tech">{w.serial}</span>
              <span className="works__cell works__cell--right">
                <span
                  className={`works__status works__status--${w.status.toLowerCase()} tech`}
                >
                  ● {w.status}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <footer className="works__foot tech">
          <span>END OF PAGE 02</span>
          <span className="works__foot-mid">
            <span className="works__foot-bar" />
            <span className="works__foot-bar works__foot-bar--mid" />
            <span className="works__foot-bar" />
          </span>
          <span>NEXT — SPEC SHEET</span>
        </footer>
      </div>
    </div>
  );
}
