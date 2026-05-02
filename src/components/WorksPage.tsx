import Micrographics from "./Micrographics";

type Work = {
  num: string;
  name: string;
  type: string;
  status: "SHIPPED" | "FIELD" | "WIP" | "ARCHIVE";
};

const WORKS: Work[] = [
  { num: "01", name: "ANDESITE / OS", type: "INTERFACE", status: "FIELD" },
  { num: "02", name: "QORI MEMORY UNIT", type: "OBJECT", status: "SHIPPED" },
  { num: "03", name: "INTI WATCHTOWER", type: "INSTALLATION", status: "SHIPPED" },
  { num: "04", name: "PACHA TERMINAL", type: "INTERFACE", status: "WIP" },
  { num: "05", name: "ALPACA RELAY", type: "OBJECT", status: "SHIPPED" },
  { num: "06", name: "QUIPU LEDGER", type: "RESEARCH", status: "ARCHIVE" },
  { num: "07", name: "WAYRA WIND ARRAY", type: "INSTALLATION", status: "FIELD" },
];

export default function WorksPage() {
  return (
    <div className="frame" id="works">
      <Micrographics sectionId="01" sectionName="INDEX" barcode="0—4839—2210—02" barcodeSeed={42} />

      <div className="frame__safe works">
        <header className="works__head">
          <h2 className="works__title">
            INDEX <span className="amp">&amp;</span> WORKS
          </h2>
          <span className="works__count tech">07 / 14</span>
        </header>

        <ol className="works__list">
          {WORKS.map((w) => (
            <li key={w.num} className="works__row">
              <span className="works__num tech">{w.num}</span>
              <span className="works__name">{w.name}</span>
              <span className="works__type tech">{w.type}</span>
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
