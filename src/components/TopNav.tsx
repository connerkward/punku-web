const LINKS = [
  { label: "INDEX", href: "#index" },
  { label: "WORKS", href: "#works" },
  { label: "SPEC", href: "#spec" },
  { label: "CONTACT", href: "#contact" },
];

export default function TopNav() {
  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav__rail tech" aria-hidden="true">
        <span>REV.04</span>
        <span className="topnav__dot">●</span>
        <span>2026</span>
      </div>
      <div className="topnav__links">
        {LINKS.map((link, i) => (
          <a key={link.href} className="topnav__link" href={link.href}>
            <span className="topnav__num tech">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="topnav__label">{link.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
