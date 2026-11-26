import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

function Icon({ name }) {
  const paths = {
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </>
    ),
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    close: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
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

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(
    () => window.matchMedia("(prefers-color-scheme: light)").matches
  );
  const [bar, setBar] = useState({ left: 0, width: 0 });

  const linkRefs = useRef({});
  const progressRef = useRef(null);

  /* sliding underline under the active link */
  const measure = () => {
    const a = linkRefs.current[active];
    if (!a) return;
    setBar({ left: a.offsetLeft + 16, width: a.offsetWidth - 32 });
  };
  useLayoutEffect(measure, [active]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  /* which section is on screen */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* shrink on scroll + progress bar */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* dark / light theme */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", light ? "light" : "dark");
  }, [light]);

  /* drawer: lock page scroll, close with Esc or when screen gets wide */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* brand */}
          <a className="nav-brand" href="#home" aria-label="PixelCraft home">
            <span className="nav-mark">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff" aria-hidden="true">
                <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
              </svg>
            </span>
            <span className="nav-name">
              Pixel<b>Craft</b>
            </span>
          </a>

          {/* links (desktop) */}
          <nav className="nav-links" aria-label="Main">
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                ref={(el) => (linkRefs.current[id] = el)}
                className={active === id ? "active" : ""}
              >
                {label}
              </a>
            ))}
            <span
              className="nav-bar"
              style={{ width: bar.width, transform: `translateX(${bar.left}px)` }}
            />
          </nav>

          {/* actions */}
          <div className="nav-actions">
            <button
              className="nav-icon"
              onClick={() => setLight((v) => !v)}
              aria-label="Switch light or dark theme"
            >
              <Icon name={light ? "moon" : "sun"} />
            </button>
            <a className="nav-cta" href="#contact">
              Hire us <Icon name="arrow" />
            </a>
            <button
              className="nav-icon nav-burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        <div className="nav-progress"><i ref={progressRef} /></div>
      </header>

      {/* mobile drawer */}
      <div className={`nav-backdrop ${open ? "show" : ""}`} onClick={close} />
      <aside className={`nav-drawer ${open ? "open" : ""}`} aria-label="Menu">
        <div className="nav-drawer-top">
          <span className="nav-name">
            Pixel<b>Craft</b>
          </span>
          <button className="nav-icon" onClick={close} aria-label="Close menu">
            <Icon name="close" />
          </button>
        </div>

        <ul className="nav-dlinks">
          {LINKS.map(({ id, label }, i) => (
            <li key={id} style={{ "--i": i }}>
              <a href={`#${id}`} className={active === id ? "active" : ""} onClick={close}>
                <small>{String(i + 1).padStart(2, "0")}</small>
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-cta nav-dcta" href="#contact" onClick={close}>
          Hire us <Icon name="arrow" />
        </a>
        <p className="nav-dtag">Crafted for Digital Excellence.</p>
      </aside>
    </>
  );
}