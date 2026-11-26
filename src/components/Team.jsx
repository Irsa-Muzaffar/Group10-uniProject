import "./Team.css";

/*
  EDIT YOUR TEAM HERE.
  - Names and roll numbers come from your project report.
  - role, skills and links are SAMPLE values: change them to match your group.
  - To show a real photo: put it in src/assets, import it at the top
    (import harees from "../assets/harees.jpg") and add  image: harees
*/
const MEMBERS = [
  {
    name: "Harees Shahzad",
    roll: "5011",
    role: "Project Lead and Web Developer",
    skills: ["React", "Node.js"],
    links: { linkedin: "https://www.linkedin.com", github: "https://github.com", email: "mailto:name@example.com" },
  },
  {
    name: "Nafisa Bibi",
    roll: "5007",
    role: "UI/UX and Graphic Designer",
    skills: ["Figma", "Illustrator"],
    links: { linkedin: "https://www.linkedin.com", email: "mailto:name@example.com" },
  },
  {
    name: "Ersa Muzaffar",
    roll: "5019",
    role: "Brand and Social Media Designer",
    skills: ["Photoshop", "Canva"],
    links: { linkedin: "https://www.linkedin.com", email: "mailto:name@example.com" },
  },
  {
    name: "Faryad Nasir",
    roll: "5027",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    links: { linkedin: "https://www.linkedin.com", github: "https://github.com", email: "mailto:name@example.com" },
  },
  {
    name: "Nayyab Nawaz",
    roll: "5016",
    role: "Content and Client Communication",
    skills: ["Research", "Writing"],
    links: { linkedin: "https://www.linkedin.com", email: "mailto:name@example.com" },
  },
];

const FACTS = [
  { label: "Course", value: "E-Commerce-1" },
  { label: "Class", value: "BBIT 5th (Self-Support)" },
  { label: "Submitted to", value: "Ms. Malaika Asif" },
  { label: "Department", value: "Management Sciences, University of Okara" },
];

function initials(name) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

function SocialIcon({ type }) {
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
    email: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="tm">
      <div className="tm-head">
        <span className="tm-eyebrow">Our team</span>
        <h2>
          Meet the people <span className="tm-grad">behind PixelCraft</span>
        </h2>
        <p>
          A group of BBIT students combining design, development and
          communication skills to deliver quality digital work.
        </p>
      </div>

      <div className="tm-grid">
        {MEMBERS.map((m) => (
          <article className="tm-card" key={m.name}>
            <div className="tm-avatar">
              {m.image ? (
                <img src={m.image} alt={m.name} />
              ) : (
                <span>{initials(m.name)}</span>
              )}
            </div>
            <h3>{m.name}</h3>
            <small className="tm-role">{m.role}</small>
            <span className="tm-roll">Roll No: {m.roll}</span>

            <div className="tm-skills">
              {m.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <div className="tm-links">
              {Object.entries(m.links).map(([type, href]) => (
                <a
                  key={type}
                  href={href}
                  target={type === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on ${type}`}
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="tm-info">
        <h3>About this project</h3>
        <div className="tm-facts">
          {FACTS.map((f) => (
            <div key={f.label}>
              <small>{f.label}</small>
              <b>{f.value}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}