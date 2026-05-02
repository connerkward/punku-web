/* Decorative technical overlay. Lives ENTIRELY in the outer 0–64px frame
   band of its parent — never reaches into the inner content safe area, so
   text and graphics can't collide. Pointer-events: none on the wrapper.
   All SVG; scales clean, no raster assets. */

const TICKS = Array.from({ length: 41 }, (_, i) => i);

type Props = {
  sectionId: string;
  sectionName: string;
  topLeftStamp?: string[];
  topRightStamp?: string[];
  barcode?: string;
  /* Pseudo-barcode ASCII, regenerated per page so they don't all look identical */
  barcodeSeed?: number;
};

function CornerBracket({ className }: { className: string }) {
  return (
    <svg
      className={`micro__bracket ${className}`}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      aria-hidden="true"
    >
      <path d="M0 16 L0 0 L16 0" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="2" cy="2" r="1.4" fill="currentColor" />
    </svg>
  );
}

function TickRuler({ className }: { className: string }) {
  return (
    <div className={`micro__ruler ${className}`} aria-hidden="true">
      {TICKS.map((i) => (
        <span
          key={i}
          className={`micro__tick${i % 5 === 0 ? " micro__tick--major" : ""}`}
        />
      ))}
    </div>
  );
}

function pseudoBars(seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const widths: number[] = [];
  for (let i = 0; i < 28; i++) widths.push(1 + Math.floor(rand() * 4));
  return widths;
}

export default function Micrographics({
  sectionId,
  sectionName,
  topLeftStamp,
  topRightStamp,
  barcode,
  barcodeSeed = 0,
}: Props) {
  const widths = pseudoBars(barcodeSeed || sectionId.charCodeAt(0));
  let x = 0;
  const bars = widths.map((w, i) => {
    const out = { x, w, on: i % 2 === 0 };
    x += w;
    return out;
  });

  return (
    <div className="micro" aria-hidden="true">
      <CornerBracket className="micro__bracket--tl" />
      <CornerBracket className="micro__bracket--tr" />
      <CornerBracket className="micro__bracket--bl" />
      <CornerBracket className="micro__bracket--br" />

      <TickRuler className="micro__ruler--top" />
      <TickRuler className="micro__ruler--left" />
      <TickRuler className="micro__ruler--right" />
      <TickRuler className="micro__ruler--bottom" />

      {/* Section ID lives in the bottom-left margin so it never collides */}
      <div className="micro__section-id tech">
        <span className="micro__section-id-num">§ {sectionId}</span>
        <span className="micro__section-id-name">{sectionName}</span>
      </div>

      {topLeftStamp && (
        <div className="micro__stamp micro__stamp--tl tech">
          {topLeftStamp.map((row, i) => (
            <div key={i} className="micro__stamp-row">
              {row}
            </div>
          ))}
        </div>
      )}

      {topRightStamp && (
        <div className="micro__stamp micro__stamp--tr tech">
          {topRightStamp.map((row, i) => (
            <div key={i} className="micro__stamp-row">
              {row}
            </div>
          ))}
        </div>
      )}

      {barcode && (
        <div className="micro__barcode tech">
          <svg width="120" height="22" viewBox="0 0 120 22" preserveAspectRatio="none">
            {bars.map((b, i) =>
              b.on ? (
                <rect key={i} x={b.x} y={0} width={b.w} height={18} fill="currentColor" />
              ) : null,
            )}
          </svg>
          <div className="micro__barcode-num">{barcode}</div>
        </div>
      )}
    </div>
  );
}
