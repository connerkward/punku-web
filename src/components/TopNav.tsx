const LINKS = [
  { label: "INDEX",   sub: "KILLKA", ja: "索引",   href: "#works"   },
  { label: "SPEC",    sub: "RUWAY",  ja: "仕様",   href: "#spec"    },
  { label: "FLEET",   sub: "AYLLU",  ja: "隊列",   href: "#fleet"   },
  { label: "CONTACT", sub: "RIMAY",  ja: "連絡",   href: "#contact" },
];

export default function TopNav() {
  return (
    <nav className="topnav" aria-label="Primary">
      {LINKS.map((link) => (
        <a key={link.href} className="topnav__link" href={link.href}>
          <span className="topnav__link-en">{link.label}</span>
          <span className="topnav__link-qu">{link.sub}</span>
          <span className="topnav__link-ja ja">{link.ja}</span>
        </a>
      ))}
    </nav>
  );
}
