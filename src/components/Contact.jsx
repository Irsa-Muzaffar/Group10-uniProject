import { useState } from "react";
import "./Contact.css";

/* ===== CHANGE THESE 2 LINES ===== */
const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";      // from web3forms.com (sent to your email)
const CONTACT_EMAIL = "your-email@gmail.com";   // your real email (shown on the page)
/* ================================ */

const SERVICES = ["Graphic Design", "Web Development", "Both design and development", "Something else"];

function Icon({ name }) {
  const paths = {
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [note, setNote] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setStatus("error");
      setNote("Setup needed: add your Web3Forms access key in Contact.jsx.");
      return;
    }

    setStatus("sending");
    setNote("");

    const data = Object.fromEntries(new FormData(form));
    data.access_key = ACCESS_KEY;
    data.from_name = "PixelCraft Website";
    data.subject = `New message from ${data.name} (PixelCraft website)`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setNote("Thank you! Your message has been sent. We will reply soon.");
        form.reset();
      } else {
        setStatus("error");
        setNote(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setNote("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="ct">
      <div className="ct-head">
        <span className="ct-eyebrow">Contact us</span>
        <h2>
          Let’s build something <span className="ct-grad">great together</span>
        </h2>
        <p>
          Tell us about your project and we will reply with a clear quote.
          Every message goes straight to our inbox.
        </p>
      </div>

      <div className="ct-wrap">
        {/* left: details */}
        <div className="ct-info">
          <div className="ct-item">
            <span className="ct-ic"><Icon name="mail" /></span>
            <div>
              <small>Email us</small>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div className="ct-item">
            <span className="ct-ic"><Icon name="clock" /></span>
            <div>
              <small>Response time</small>
              <b>Within 24 hours</b>
            </div>
          </div>
          <div className="ct-item">
            <span className="ct-ic"><Icon name="pin" /></span>
            <div>
              <small>Based in</small>
              <b>Okara, Punjab, Pakistan</b>
            </div>
          </div>

          <div className="ct-box">
            <b>What happens next?</b>
            <ol>
              <li>You send us your idea.</li>
              <li>We reply with questions and a quote.</li>
              <li>We agree the plan and start work.</li>
            </ol>
          </div>
        </div>

        {/* right: form */}
        <form className="ct-form" onSubmit={onSubmit}>
          <div className="ct-row">
            <label>
              Your name
              <input type="text" name="name" placeholder="Ali Khan" required maxLength={80} />
            </label>
            <label>
              Your email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>

          <label>
            Service needed
            <select name="service" defaultValue={SERVICES[0]}>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>

          <label>
            Your message
            <textarea name="message" rows="5" placeholder="Tell us about your project, deadline and budget…" required />
          </label>

          {/* hidden spam trap (bots fill it, people don't see it) */}
          <input type="checkbox" name="botcheck" className="ct-bot" tabIndex={-1} autoComplete="off" />

          <button className="btn ct-btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : (<>Send message <Icon name="send" /></>)}
          </button>

          <p className={`ct-note ${status}`} role="status" aria-live="polite">{note}</p>
        </form>
      </div>
    </section>
  );
}