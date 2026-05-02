import { useState } from "react";

type Field = {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
};

const FIELDS: Field[] = [
  { id: "name", label: "OPERATOR", placeholder: "FULL NAME", required: true },
  {
    id: "email",
    label: "RETURN ADDRESS",
    type: "email",
    placeholder: "NAME@DOMAIN",
    required: true,
  },
  { id: "company", label: "ORG / CALL—SIGN", placeholder: "OPTIONAL" },
];

const SCOPES = [
  "INTERFACE",
  "OBJECT",
  "INSTALLATION",
  "RESEARCH",
  "OTHER",
];

export default function ContactForm() {
  const [scope, setScope] = useState<string>(SCOPES[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="ghoform" onSubmit={handleSubmit} noValidate>
      <div className="ghoform__head tech">
        <span>FORM ID</span>
        <span className="ghoform__id">PNK—04 / INTAKE</span>
        <span className="ghoform__sep">·</span>
        <span>FIELDS 06</span>
        <span className="ghoform__sep">·</span>
        <span className="ghoform__pulse" aria-hidden="true" />
        <span>READY</span>
      </div>

      <div className="ghoform__rows">
        {FIELDS.map((f, i) => (
          <label key={f.id} className="ghoform__row">
            <span className="ghoform__label tech">
              <span className="ghoform__num">{String(i + 1).padStart(2, "0")}</span>
              <span>{f.label}</span>
              {f.required && <span className="ghoform__req">REQ</span>}
            </span>
            <input
              className="ghoform__input"
              id={f.id}
              name={f.id}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              autoComplete="off"
            />
          </label>
        ))}

        <fieldset className="ghoform__row ghoform__row--scope">
          <legend className="ghoform__label tech">
            <span className="ghoform__num">04</span>
            <span>SCOPE</span>
          </legend>
          <div className="ghoform__chips">
            {SCOPES.map((s) => (
              <label
                key={s}
                className={`ghoform__chip${scope === s ? " ghoform__chip--on" : ""}`}
              >
                <input
                  type="radio"
                  name="scope"
                  value={s}
                  checked={scope === s}
                  onChange={() => setScope(s)}
                />
                <span className="tech">{s}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="ghoform__row">
          <span className="ghoform__label tech">
            <span className="ghoform__num">05</span>
            <span>BUDGET</span>
          </span>
          <input
            className="ghoform__input"
            id="budget"
            name="budget"
            placeholder="USD · RANGE"
          />
        </label>

        <label className="ghoform__row ghoform__row--full">
          <span className="ghoform__label tech">
            <span className="ghoform__num">06</span>
            <span>BRIEF</span>
            <span className="ghoform__req">REQ</span>
          </span>
          <textarea
            className="ghoform__input ghoform__textarea"
            id="brief"
            name="brief"
            rows={5}
            placeholder="WHAT ARE YOU TRYING TO BUILD, AND BY WHEN?"
          />
        </label>
      </div>

      <div className="ghoform__foot">
        <div className="ghoform__caution tech" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14">
            <polygon
              points="7,1 13,12 1,12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line x1="7" y1="5" x2="7" y2="9" stroke="currentColor" strokeWidth="1" />
            <circle cx="7" cy="10.5" r="0.6" fill="currentColor" />
          </svg>
          <span>FIELDS WITH REQ ARE LOAD—BEARING</span>
        </div>
        <button type="submit" className="ghoform__submit">
          <span className="tech ghoform__submit-num">▸ DISPATCH</span>
          <span className="ghoform__submit-meta tech">
            01 / SECURE / RECEIPT
          </span>
        </button>
      </div>

      {submitted && (
        <div className="ghoform__receipt tech" role="status">
          ✓ TICKET OPENED · CONFIRMATION SENT TO RETURN ADDRESS
        </div>
      )}
    </form>
  );
}
