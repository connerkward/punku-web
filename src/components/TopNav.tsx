const LINKS = [
  { label: "INDEX", href: "#works" },
  { label: "SPEC", href: "#spec" },
  { label: "CONTACT", href: "#contact" },
];

export default function TopNav() {
  return (
    <nav className="topnav" aria-label="Primary">
      {LINKS.map((link) => (
        <a key={link.href} className="topnav__link" href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
