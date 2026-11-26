import "./Process.css";

/* EDIT THE STEPS AND FAQ HERE */
const STEPS = [
  {
    title: "Discover",
    text: "You tell us your goals, audience, preferred style, budget and deadline. We ask the right questions so we fully understand what you need.",
    output: "Project brief",
  },
  {
    title: "Plan",
    text: "We define deliverables, milestones, price, revision limits and responsibilities, and put everything in a clear written agreement.",
    output: "Quote and agreement",
  },
  {
    title: "Design and build",
    text: "Our team creates your graphics or develops and tests your website, sharing drafts and previews along the way.",
    output: "Drafts and previews",
  },
  {
    title: "Review",
    text: "You review the work and request the agreed revisions. We refine it until it matches your brief.",
    output: "Approved version",
  },
  {
    title: "Payment and delivery",
    text: "Payment is completed by the agreed method, and we deliver the final files or website access securely online.",
    output: "Final files",
  },
  {
    title: "Support",
    text: "We handle agreed changes after delivery, ask for your feedback and stay available for future work.",
    output: "After-sales support",
  },
];

const FAQ = [
  {
    q: "How long does a project take?",
    a: "It depends on the size of the work. A logo usually takes a few days, while a full website can take one to three weeks. We agree the deadline with you before we start.",
  },
  {
    q: "How does payment work?",
    a: "We agree on a payment method and clear payment milestones in the written agreement, so both sides know what to expect before any work begins.",
  },
  {
    q: "How many revisions are included?",
    a: "The number of revisions is set in your agreement and depends on the service you choose. Extra revisions can be added if you need them.",
  },
  {
    q: "Is my project information kept private?",
    a: "Yes. We keep project files organised and protect client information, and we only share work with the people you approve.",
  },
];

export default function Process() {
  return (
    <section id="process" className="pr">
      <div className="pr-wrap">
        {/* left: heading (stays in view while scrolling on desktop) */}
        <div className="pr-side">
          <span className="pr-eyebrow">Our process</span>
          <h2>
            How we work, <span className="pr-grad">from idea to delivery</span>
          </h2>
          <p>
            A simple, transparent process in six steps. You always know what
            is happening, what comes next and what you will receive.
          </p>
          <a className="btn" href="#contact">Start your project</a>
          <div className="pr-note">
            <b>Clear communication</b>
            <small>We reply to every inquiry promptly and keep you updated at each step.</small>
          </div>
        </div>

        {/* right: timeline */}
        <ol className="pr-steps">
          {STEPS.map((s, i) => (
            <li className="pr-step" key={s.title}>
              <span className="pr-badge">{String(i + 1).padStart(2, "0")}</span>
              <div className="pr-card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="pr-out">
                  <i /> Output: {s.output}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* FAQ */}
      <div className="pr-faq">
        <h3>Frequently asked questions</h3>
        {FAQ.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}