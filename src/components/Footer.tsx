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
        sectionId="03"
        sectionName="CONTACT / DISPATCH"
        topLeftStamp={["INTAKE FORM", "PNK—04 · REV B", "CHANNEL OPEN"]}
        topRightStamp={["RESP. <72H", "PRIORITY · NORM", "ENCRYPTED IN TRANSIT"]}
        barcode="0—4839—2210—04"
        barcodeSeed={144}
      />

      <footer ref={ref} className="frame__safe footer">
        <div className="footer__strip tech" aria-hidden="true">
          <span>● TX / RX</span>
          <span className="footer__strip-bars">
            {Array.from({ length: 60 }).map((_, i) => (
              <span
                key={i}
                className={`footer__strip-bar${i % 7 === 0 ? " footer__strip-bar--on" : ""}`}
              />
            ))}
          </span>
          <span>SIG. 0.42</span>
          <span>·</span>
          <span>BUS A · CH 04 / 16</span>
          <span>·</span>
          <span>NO FAULT</span>
        </div>

        <div className="footer__grid">
          <section className="footer__form-block">
            <header className="footer__block-header">
              <span className="footer__block-num tech">01</span>
              <h2 className="footer__block-title">
                FILE A REQUEST{" "}
                <span className="amp" aria-hidden="true">
                  &amp;
                </span>{" "}
                WE&apos;LL OPEN A TICKET
              </h2>
              <span className="footer__block-id tech">FORM PNK—04</span>
            </header>
            <ContactForm />
          </section>

          <aside className="footer__meta-block">
            <div className="footer__meta-card">
              <div className="footer__meta-card-head tech">
                <span>WARNING</span>
                <span className="footer__meta-pulse" aria-hidden="true" />
              </div>
              <p className="footer__meta-card-body tech">
                CONTAINS ORIGINAL THINKING. HANDLE WITH INTENT. DO NOT EXPOSE TO
                GENERIC BRIEFS.
              </p>
            </div>

            <dl className="footer__meta-list tech">
              <div>
                <dt>HQ</dt>
                <dd>40.689°N · 74.044°W</dd>
              </div>
              <div>
                <dt>FIELD</dt>
                <dd>−13.163°S · 72.545°W</dd>
              </div>
              <div>
                <dt>EMAIL</dt>
                <dd>
                  <a href="mailto:hello@punku.studio">HELLO@PUNKU.STUDIO</a>
                </dd>
              </div>
              <div>
                <dt>SIGNAL</dt>
                <dd>+1 (000) 000—0000</dd>
              </div>
            </dl>

            <div className="footer__cert-grid">
              <div className="footer__cert">
                <CEIcon size={28} stroke="#0a0a0a" strokeWidth={1.6} />
                <span className="tech">CONFORMITÉ EUROPÉENNE</span>
              </div>
              <div className="footer__cert">
                <div className="footer__cert-glyph" aria-hidden="true">
                  <svg width="38" height="38" viewBox="0 0 46 46">
                    <polygon
                      points="23,3 43,23 23,43 3,23"
                      fill="none"
                      stroke="#0a0a0a"
                      strokeWidth="1.5"
                    />
                    <text
                      x="23"
                      y="28"
                      textAnchor="middle"
                      fontFamily="JetBrains Mono"
                      fontSize="11"
                      fontWeight="700"
                      fill="#0a0a0a"
                    >
                      IP67
                    </text>
                  </svg>
                </div>
                <span className="tech">DUST · WATER PROOF</span>
              </div>
              <div className="footer__cert">
                <div className="footer__cert-glyph" aria-hidden="true">
                  <svg width="38" height="38" viewBox="0 0 46 46">
                    <circle
                      cx="23"
                      cy="23"
                      r="20"
                      fill="none"
                      stroke="#0a0a0a"
                      strokeWidth="1.5"
                    />
                    <text
                      x="23"
                      y="28"
                      textAnchor="middle"
                      fontFamily="JetBrains Mono"
                      fontSize="11"
                      fontWeight="700"
                      fill="#0a0a0a"
                    >
                      FCC
                    </text>
                  </svg>
                </div>
                <span className="tech">RF EMISSIONS · A</span>
              </div>
              <div className="footer__cert">
                <div className="footer__cert-glyph" aria-hidden="true">
                  <svg width="38" height="38" viewBox="0 0 46 46">
                    <rect
                      x="3"
                      y="3"
                      width="40"
                      height="40"
                      fill="none"
                      stroke="#0a0a0a"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11 23 L 19 31 L 35 15"
                      fill="none"
                      stroke="#0a0a0a"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="tech">ISO 9001</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="footer__brand">
          <div
            className={`footer__big${revealed ? " footer__big--in" : ""}`}
            aria-label="PUNKU"
          >
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
          <div className="footer__sig">
            <div className="footer__sig-row tech">
              STUDIO <span className="amp">&amp;</span> FIELD LAB · ©2026
            </div>
            <div className="footer__sig-row footer__sig-row--icons">
              <span aria-hidden="true">⊞</span>
              <span aria-hidden="true">⌬</span>
              <span aria-hidden="true">◯</span>
              <span aria-hidden="true">⊕</span>
              <span aria-hidden="true">▲</span>
            </div>
            <div className="footer__sig-row tech">DESIGN · BUILD · DEPLOY</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
