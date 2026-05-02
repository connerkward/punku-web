/* Minimal frame: four corner brackets + one bottom-left section id +
   one small barcode bottom-right. Nothing else. Pointer-events: none. */

type Props = {
  sectionId: string;
  sectionName: string;
  barcode?: string;
  barcodeSeed?: number;
};

function CornerBracket({ className }: { className: string }) {
  return (
    <svg
      className={`micro__bracket ${className}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M0 12 L0 0 L12 0" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}

function pseudoBars(seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const widths: number[] = [];
  for (let i = 0; i < 22; i++) widths.push(1 + Math.floor(rand() * 4));
  return widths;
}

export default function Micrographics({
  sectionId,
  sectionName,
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

      <div className="micro__section-id tech">
        § {sectionId} &nbsp;/&nbsp; {sectionName}
      </div>

      {barcode && (
        <div className="micro__barcode tech">
          <svg width="80" height="14" viewBox={`0 0 ${x} 14`} preserveAspectRatio="none">
            {bars.map((b, i) =>
              b.on ? (
                <rect key={i} x={b.x} y={0} width={b.w} height={14} fill="currentColor" />
              ) : null,
            )}
          </svg>
          <span className="micro__barcode-num">{barcode}</span>
        </div>
      )}
    </div>
  );
}
