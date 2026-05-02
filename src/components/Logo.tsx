export default function Logo() {
  return (
    <button
      type="button"
      className="logo"
      aria-label="PUNKU — back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      PUNKU
    </button>
  );
}
