/* Faithful-ish CE conformity mark: two near-circles on a 5-unit grid. The
   E mark sits inside an arc that mirrors the C, with the inner stem at
   3/5 of the diameter. Sized via the `size` prop in pixels. */
export default function CEIcon({
  size = 40,
  stroke = "currentColor",
  strokeWidth = 1.4,
}: {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size * 1.95}
      height={size}
      viewBox="0 0 78 40"
      aria-label="CE marking"
      role="img"
    >
      {/* C */}
      <path
        d="M30 7 a13 13 0 1 0 0 26"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M16 14 L 30 14 M16 26 L 30 26"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        opacity="0"
      />
      {/* E (drawn as an open C with a horizontal stem) */}
      <path
        d="M65 7 a13 13 0 1 0 0 26"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <path
        d="M51 20 L 62 20"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
