export default function Logo() {
  return (
    <button
      type="button"
      className="logo"
      aria-label="PUNKU — back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="logo__mark" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect
            x="1.5"
            y="1.5"
            width="19"
            height="19"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M6 6 L16 16 M16 6 L6 16"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="11" cy="11" r="3.5" stroke="currentColor" strokeWidth="1" />
        </svg>
      </span>
      <span className="logo__word">PUNKU</span>
      <span className="logo__sub tech">SYSTEMS / 01</span>
    </button>
  );
}
