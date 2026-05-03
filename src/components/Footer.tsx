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
      <Micrographics
        sectionId="04"
        sectionName="CONTACT"
        subtitle="RIMAY"
        ja="連絡"
        barcode="0—4839—2210—05"
        barcodeSeed={144}
      />

      <footer ref={ref} className="frame__safe footer">
        <header className="footer__head">
          <h2 className="footer__title">
            ALLILLANCHU — FILE A REQUEST <span className="amp">&amp;</span> WE&apos;LL OPEN A TICKET
          </h2>
          <div className="footer__meta tech">
            <a href="mailto:hello@punku.studio">HELLO@PUNKU.STUDIO</a>
            <span className="footer__meta-sep">·</span>
            <span>QOSQO 13.53°S 71.97°W</span>
            <span className="footer__meta-sep">·</span>
            <span>NYC 40.69°N 74.04°W</span>
          </div>
        </header>

        <div className="footer__grid">
          <ContactForm />
          <div className="footer__cert-grid">
            <div className="footer__cert">
              <span className="ja footer__cert-jp">産業</span>
              <span className="tech">SANGYŌ · INDUSTRY</span>
            </div>
            <div className="footer__cert">
              <CEIcon size={32} stroke="currentColor" strokeWidth={1.6} />
              <span className="tech">CONFORMITÉ</span>
            </div>
            <div className="footer__cert">
              <svg width="36" height="36" viewBox="0 0 46 46">
                <polygon points="23,3 43,23 23,43 3,23" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="23" y="28" textAnchor="middle" fontFamily="Atkinson Hyperlegible Mono, ui-monospace, monospace" fontSize="11" fontWeight="700" fill="currentColor">IP67</text>
              </svg>
              <span className="tech">DUST · WATER</span>
            </div>
            <div className="footer__cert">
              <svg width="36" height="36" viewBox="0 0 46 46">
                <circle cx="23" cy="23" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="23" y="28" textAnchor="middle" fontFamily="Atkinson Hyperlegible Mono, ui-monospace, monospace" fontSize="11" fontWeight="700" fill="currentColor">FCC</text>
              </svg>
              <span className="tech">RF · CLASS A</span>
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
            <div>STUDIO <span className="amp">&amp;</span> FIELD LAB · ©2026</div>
            <div className="footer__sig-sub">
              TUKUY YACHAY · ALL KNOWLEDGE · ALL CRAFT
            </div>
            <div className="footer__sig-jp ja">凡ゆる知 · 凡ゆる工</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
