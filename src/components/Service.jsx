import { useState } from "react";
import "./Sevices.css";

const CATEGORIES = [
  {
    id: "design",
    label: "Graphic Design",
    icon: "pen",
    title: "Graphic design that makes your brand memorable",
    blurb:
      "From your first logo to a complete brand identity, we create clean, creative visuals that look professional everywhere your customers find you.",
    services: [
      {
        title: "Logo Design",
        text: "A distinctive logo that fits your business, delivered with colour, black-and-white and icon versions.",
        items: ["3 initial concepts", "Revisions included", "PNG, SVG and PDF files"],
        time: "3–5 days",
      },
      {
        title: "Brand Identity Kit",
        text: "A complete visual identity so every page, post and print piece looks consistent.",
        items: ["Colour palette and fonts", "Brand guidelines", "Business card and letterhead"],
        time: "7–10 days",
      },
      {
        title: "Social Media Graphics",
        text: "Eye-catching post, story and cover designs that match your brand and keep your feed active.",
        items: ["Editable templates", "All platform sizes", "Monthly content packs"],
        time: "2–4 days",
      },
      {
        title: "Banners and Posters",
        text: "Print-ready and web banners, flyers and posters for promotions, events and ads.",
        items: ["Print-ready PDF", "Web-optimised files", "Custom sizes"],
        time: "2–3 days",
      },
    ],
  },
  {
    id: "web",
    label: "Web Development",
    icon: "code",
    title: "Websites that look great and work on every device",
    blurb:
      "We design and build fast, responsive and secure websites that help your business get found online and turn visitors into customers.",
    services: [
      {
        title: "Business Websites",
        text: "A professional multi-page website that presents your services clearly and builds trust.",
        items: ["Responsive design", "Contact form and map", "Basic SEO setup"],
        time: "7–14 days",
      },
      {
        title: "Portfolio Websites",
        text: "A stylish personal or agency portfolio to show your best work and attract new clients.",
        items: ["Project gallery", "Smooth animations", "Dark and light mode"],
        time: "5–7 days",
      },
      {
        title: "E-Commerce Stores",
        text: "An online store with product pages, cart and checkout so customers can order any time.",
        items: ["Product management", "Online payment setup", "Order notifications"],
        time: "14–21 days",
      },
      {
        title: "Maintenance and Support",
        text: "Monthly care for your site so it stays fast, secure and up to date after launch.",
        items: ["Updates and backups", "Security checks", "Priority support"],
        time: "Monthly plan",
      },
    ],
  },
];

const INCLUDED = [
  { title: "Clear written agreement", text: "Scope, price and deadline agreed before we start." },
  { title: "Agreed revisions", text: "We refine the work until it matches your brief." },
  { title: "Secure file delivery", text: "Final files delivered online, with your data kept private." },
  { title: "After-sales support", text: "Help and guidance even after the project is delivered." },
];

function Icon({ name }) {
  const paths = {
    pen: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </>
    ),
    code: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export default function Service() {
  const [tab, setTab] = useState("design");
  const current = CATEGORIES.find((c) => c.id === tab);

  return (
    <section id="services" className="svc">
      <div className="svc-head">
        <span className="svc-eyebrow">What we do</span>
        <h2>
          Services built to <span className="grad-text">grow your brand</span>
        </h2>
        <p>
          Two skills, one team. Choose graphic design, web development, or
          combine both for a complete online presence.
        </p>
      </div>

      <div className="svc-tabs" role="tablist" aria-label="Service categories">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={tab === c.id}
            className={`svc-tab ${tab === c.id ? "active" : ""}`}
            onClick={() => setTab(c.id)}
          >
            <Icon name={c.icon} />
            {c.label}
          </button>
        ))}
      </div>

      <div className="svc-panel" key={current.id}>
        <div className="svc-intro">
          <h3>{current.title}</h3>
          <p>{current.blurb}</p>
        </div>

        <div className="svc-grid">
          {current.services.map((s, i) => (
            <article className="svc-card" key={s.title}>
              <div className="svc-top">
                <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="svc-time">{s.time}</span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>
                    <Icon name="check" />
                    {it}
                  </li>
                ))}
              </ul>
              <a className="svc-link" href="#contact">
                Request this service <Icon name="arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="svc-included">
        <h3>Included with every project</h3>
        <div className="svc-inc-grid">
          {INCLUDED.map((x) => (
            <div className="svc-inc" key={x.title}>
              <span className="svc-inc-icon">
                <Icon name="check" />
              </span>
              <div>
                <b>{x.title}</b>
                <small>{x.text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="svc-cta">
        <div>
          <h3>Need both design and development?</h3>
          <p>Tell us about your project and we will send a clear quote within 24 hours.</p>
        </div>
        <a className="btn" href="#contact">Get a free quote</a>
      </div>
    </section>
  );
}