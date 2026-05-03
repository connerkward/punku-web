import { useState } from "react";

const FIELDS = [
  { id: "name", label: "NAME", placeholder: "FULL NAME", type: "text" },
  { id: "email", label: "EMAIL", placeholder: "NAME@DOMAIN", type: "email" },
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="ghoform" onSubmit={handleSubmit} noValidate>
      <div className="ghoform__rows">
        {FIELDS.map((f) => (
          <label key={f.id} className="ghoform__row">
            <span className="ghoform__label tech">{f.label}</span>
            <input
              className="ghoform__input"
              id={f.id}
              name={f.id}
              type={f.type}
              placeholder={f.placeholder}
              autoComplete="off"
            />
          </label>
        ))}

        <label className="ghoform__row ghoform__row--full">
          <span className="ghoform__label tech">BRIEF</span>
          <textarea
            className="ghoform__input ghoform__textarea"
            id="brief"
            name="brief"
            rows={5}
            placeholder="WHAT ARE YOU TRYING TO BUILD, AND BY WHEN?"
          />
        </label>
      </div>

      <button type="submit" className="ghoform__submit">
        {submitted ? (
          <>
            <svg className="ghoform__submit-icon" width="11" height="9" viewBox="0 0 11 9" aria-hidden="true">
              <path d="M1 5 L4 8 L10 1" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            DISPATCHED
          </>
        ) : (
          <>
            <svg className="ghoform__submit-icon" width="9" height="10" viewBox="0 0 9 10" aria-hidden="true">
              <polygon points="0,0 9,5 0,10" fill="currentColor" />
            </svg>
            DISPATCH
          </>
        )}
      </button>
    </form>
  );
}
