import "./Footer.css";

/* ===== CHANGE THESE ===== */
const CONTACT_EMAIL = "your-email@gmail.com";   // same email you used in Contact.jsx
const SOCIALS = [
  { type: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com" },
  { type: "github", label: "GitHub", href: "https://github.com" },
  { type: "instagram", label: "Instagram", href: "https://www.instagram.com" },
];
/* ======================== */

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "How we work", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Logo Design",
  "Brand Identity Kit",
  "Social Media Graphics",
  "Business Websites",
  "E-Commerce Stores",
  "Maintenance and Support",
];

function Icon({ name }) {
  const paths = {
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
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
    up: (
      <>
        <path d="m18 15-6-6-6 6" />
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-grid">
          {/* brand */}
          <div className="ft-brand">
            <a className="ft-logo" href="#home">PixelCraft</a>
            <b className="ft-tag">Crafted for Digital Excellence.</b>
            <p>
              A graphic design and web development agency helping businesses
              look professional and grow online.
            </p>
            <div className="ft-social">
              {SOCIALS.map((s) => (
                <a key={s.type} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon name={s.type} />
                </a>
              ))}
              <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email us">
                <Icon name="mail" />
              </a>
            </div>
          </div>

          {/* quick links */}
          <nav className="ft-col" aria-label="Footer">
            <h4>Quick links</h4>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* services */}
          <div className="ft-col">
            <h4>Services</h4>
            <ul>
              {SERVICE_LINKS.map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="ft-col">
            <h4>Get in touch</h4>
            <ul className="ft-contact">
              <li>
                <Icon name="mail" />
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>
                <Icon name="pin" />
                <span>Okara, Punjab, Pakistan</span>
              </li>
              <li>
                <Icon name="clock" />
                <span>We reply within 24 hours</span>
              </li>
            </ul>
            <a className="btn ft-btn" href="#contact">Start a project</a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="ft-bottom">
          <div>
            <span>© {year} PixelCraft Agency. All rights reserved.</span>
            <small>
              A project by Group 10 · E-Commerce-1 · Department of Management
              Sciences, University of Okara
            </small>
          </div>
          <a className="ft-top" href="#home" aria-label="Back to top">
            Back to top <Icon name="up" />
          </a>
        </div>
      </div>
    </footer>
  );
}