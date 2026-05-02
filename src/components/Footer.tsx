import { useEffect, useRef, useState } from "react";
import CEIcon from "./CEIcon";
import ContactForm from "./ContactForm";
import Micrographics from "./Micrographics";

const PUNKU_LETTERS = "PUNKU".split("");

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="frame frame--bsod" id="contact">
      <Micrographics sectionId="03" sectionName="CONTACT" barcode="0—4839—2210—04" barcodeSeed={144} />

      <footer ref={ref} className="frame__safe footer">
        <header className="footer__head">
          <h2 className="footer__title">
            FILE A REQUEST <span className="amp">&amp;</span> WE&apos;LL OPEN A TICKET
          </h2>
          <div className="footer__meta tech">
            <a href="mailto:hello@punku.studio">HELLO@PUNKU.STUDIO</a>
            <span className="footer__meta-sep">·</span>
            <span>40.689°N · 74.044°W</span>
          </div>
        </header>

        <div className="footer__grid">
          <ContactForm />
          <div className="footer__cert-grid">
            <div className="footer__cert">
              <CEIcon size={32} stroke="currentColor" strokeWidth={1.6} />
              <span className="tech">CONFORMITÉ</span>
            </div>
            <div className="footer__cert">
              <svg width="36" height="36" viewBox="0 0 46 46">
                <polygon points="23,3 43,23 23,43 3,23" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="23" y="28" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="currentColor">IP67</text>
              </svg>
              <span className="tech">DUST · WATER</span>
            </div>
            <div className="footer__cert">
              <svg width="36" height="36" viewBox="0 0 46 46">
                <circle cx="23" cy="23" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="23" y="28" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill="currentColor">FCC</text>
              </svg>
              <span className="tech">RF · CLASS A</span>
            </div>
            <div className="footer__cert">
              <svg width="36" height="36" viewBox="0 0 46 46">
                <rect x="3" y="3" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 23 L 19 31 L 35 15" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="tech">ISO 9001</span>
            </div>
          </div>
        </div>

        <div className="footer__brand">
          <div className={`footer__big${revealed ? " footer__big--in" : ""}`} aria-label="PUNKU">
            {PUNKU_LETTERS.map((letter, i) => (
              <span
                key={i}
                className="footer__big-letter"
                style={{ animationDelay: `${i * 90}ms` }}
                aria-hidden="true"
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="footer__sig tech">
            STUDIO <span className="amp">&amp;</span> FIELD LAB · ©2026
          </div>
        </div>
      </footer>
    </div>
  );
}
