import { useState } from "react";
import "./Portfolio.css";

/*
  EDIT YOUR PROJECTS HERE.
  - category: "design" or "web"
  - kind: look of the preview when there is no image
          (logo | social | poster | web | store | folio)
  - To use a real image: put it in src/assets, import it at the top
    (import cafe from "../assets/cafe.png") and add  image: cafe
*/
const PROJECTS = [
  {
    title: "Bloom Café",
    category: "design",
    kind: "logo",
    letter: "B",
    type: "Logo and brand identity",
    text: "A fresh logo, colour palette and menu design for a local coffee shop.",
    tools: ["Illustrator", "Figma"],
    c1: "#f43f5e",
    c2: "#fbbf24",
  },
  {
    title: "Urban Fit Gym",
    category: "design",
    kind: "social",
    type: "Social media pack",
    text: "A set of post and story templates that keep the gym’s feed consistent.",
    tools: ["Photoshop", "Canva"],
    c1: "#8b5cf6",
    c2: "#f43f5e",
  },
  {
    title: "Glow Beauty Salon",
    category: "design",
    kind: "poster",
    type: "Poster and banner",
    text: "Print-ready posters and web banners for a seasonal offer campaign.",
    tools: ["Photoshop", "Illustrator"],
    c1: "#fb7185",
    c2: "#fb923c",
  },
  {
    title: "Okara Fresh Mart",
    category: "web",
    kind: "store",
    type: "E-commerce website",
    text: "An online grocery store with product pages, cart and order notifications.",
    tools: ["React", "Node.js", "MongoDB"],
    c1: "#ec4899",
    c2: "#8b5cf6",
  },
  {
    title: "CareFirst Clinic",
    category: "web",
    kind: "web",
    type: "Business website",
    text: "A clean, mobile-friendly clinic website with services and appointment form.",
    tools: ["React", "CSS"],
    c1: "#f97316",
    c2: "#f43f5e",
  },
  {
    title: "Creative Studio",
    category: "web",
    kind: "folio",
    type: "Portfolio website",
    text: "A personal portfolio with a project gallery and dark and light mode.",
    tools: ["React", "Vite"],
    c1: "#d946ef",
    c2: "#fb7185",
  },
];

const FILTERS = [
  { id: "all", label: "All work" },
  { id: "design", label: "Graphic Design" },
  { id: "web", label: "Web Development" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* Preview picture (drawn with CSS, so no image files are needed) */
function Thumb({ p }) {
  if (p.image) {
    return (
      <div className="pf-thumb">
        <img className="pf-img" src={p.image} alt={p.title} />
      </div>
    );
  }

  let mock = null;
  if (p.kind === "logo") {
    mock = <div className="mk-logo">{p.letter}</div>;
  } else if (p.kind === "social") {
    mock = (
      <div className="mk-social">
        <i /><i /><i /><i />
      </div>
    );
  } else if (p.kind === "poster") {
    mock = (
      <div className="mk-poster">
        <b /><span /><span /><em />
      </div>
    );
  } else {
    mock = (
      <div className="mk-browser">
        <div className="mk-bar"><i /><i /><i /></div>
        <div className="mk-body">
          {p.kind === "store" ? (
            <div className="mk-products"><i /><i /><i /><i /></div>
          ) : (
            <>
              <b />
              <span />
              <span className="short" />
              <em />
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pf-thumb" style={{ background: `linear-gradient(135deg, ${p.c1}, ${p.c2})` }}>
      {mock}
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const shown = PROJECTS.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="portfolio" className="pf">
      <div className="pf-head">
        <span className="pf-eyebrow">Our work</span>
        <h2>
          Projects we are <span className="pf-grad">proud of</span>
        </h2>
        <p>
          A selection of sample projects showing our graphic design and web
          development skills.
        </p>
      </div>

      <div className="pf-tabs" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={filter === f.id}
            className={`pf-tab ${filter === f.id ? "active" : ""}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="pf-grid" key={filter}>
        {shown.map((p) => (
          <article className="pf-card" key={p.title}>
            <Thumb p={p} />
            <div className="pf-body">
              <div className="pf-meta">
                <span className="pf-tag">
                  {p.category === "design" ? "Graphic Design" : "Web Development"}
                </span>
              </div>
              <h3>{p.title}</h3>
              <small className="pf-type">{p.type}</small>
              <p>{p.text}</p>
              <div className="pf-tools">
                {p.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a className="pf-link" href="#contact">
                Start a similar project <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="pf-cta">
        <div>
          <h3>Have a project in mind?</h3>
          <p>Tell us your idea and we will turn it into something you are proud to show.</p>
        </div>
        <a className="btn" href="#contact">Let’s work together</a>
      </div>
    </section>
  );
}