/* Decorative technical overlay: corner brackets, tick rulers, registration
   marks, serial / lot stamps, CE-style icon. All SVG — scales clean, no
   raster assets. Pointer-events: none on the wrapper, so nothing here
   intercepts clicks. */

const TICKS = Array.from({ length: 41 }, (_, i) => i);

function CornerBracket({
  className,
}: {
  className: string;
}) {
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

export default function Micrographics() {
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

      <div className="micro__stamp micro__stamp--tl tech">
        <div className="micro__stamp-row">SECTION A—A</div>
        <div className="micro__stamp-row">SCALE 1:1</div>
        <div className="micro__stamp-row">SHEET 01 / 04</div>
      </div>

      <div className="micro__stamp micro__stamp--tr tech">
        <div className="micro__stamp-row">DOC# PNK—2026—042</div>
        <div className="micro__stamp-row">REV. D</div>
        <div className="micro__stamp-row">CLASS II / TYPE B</div>
      </div>

      <div className="micro__crosshair micro__crosshair--c1" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="0.6" />
          <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      </div>
      <div className="micro__crosshair micro__crosshair--c2" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="0.7" fill="none" />
          <line x1="11" y1="0" x2="11" y2="22" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="11" x2="22" y2="11" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="micro__barcode tech" aria-hidden="true">
        <svg width="120" height="22" viewBox="0 0 120 22" preserveAspectRatio="none">
          {/* Pseudo-barcode: alternating bars of varying widths */}
          {[2, 1, 3, 1, 1, 2, 1, 4, 1, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 1, 3, 1, 2, 1, 4, 1].reduce<{
            x: number;
            bars: { x: number; w: number; on: boolean }[];
          }>(
            (acc, w, i) => {
              acc.bars.push({ x: acc.x, w, on: i % 2 === 0 });
              acc.x += w;
              return acc;
            },
            { x: 0, bars: [] },
          ).bars.map((b, i) =>
            b.on ? <rect key={i} x={b.x} y={0} width={b.w} height={18} fill="currentColor" /> : null,
          )}
        </svg>
        <div className="micro__barcode-num">0—4839—2210—01</div>
      </div>
    </div>
  );
}
