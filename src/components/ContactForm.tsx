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
        {submitted ? "✓ DISPATCHED" : "▸ DISPATCH"}
      </button>
    </form>
  );
}
