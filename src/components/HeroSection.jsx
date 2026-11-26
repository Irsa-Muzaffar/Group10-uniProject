import logoImg from "../assets/Logo.png";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Process from "./Process";
import Service from "./Service";
import Team from "./Team";

export default function HeroSection() {
  return (
    <main>
      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h1>
            Crafted for <br />
            <span>digital excellence.</span>
          </h1>
          <p>
            PixelCraft Agency designs logos, brands and websites for growing
            businesses.
          </p>
          <div className="hero-btns">
            <a className="btn" href="#portfolio">See our work</a>
            <a className="btn btn-ghost" href="#contact">Contact us</a>
          </div>
        </div>

        <div className="hero-art">
          <div className="ring">
            <img src={logoImg} alt="PixelCraft Agency" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {/* <section id="services">
        <h2>Services</h2>
        <div className="cards">
          <div className="card">
            <b>Graphic design</b>
            <small>Logos, banners, social media and branding.</small>
          </div>
          <div className="card">
            <b>Web development</b>
            <small>Business websites, online stores and maintenance plans.</small>
          </div>
        </div>
      </section> */}

      <Service/>

      {/* PORTFOLIO */}
      {/* <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="cards">
          <div className="card"><b>Project one</b><small>Add your first sample here.</small></div>
          <div className="card"><b>Project two</b><small>Add your second sample here.</small></div>
          <div className="card"><b>Project three</b><small>Add your third sample here.</small></div>
        </div>
      </section> */}

      <Portfolio/>


      {/* PROCESS */}
      {/* <section id="process">
        <h2>How we work</h2>
        <div className="cards">
          <div className="card"><b>1. Search</b><small>Client finds our portfolio.</small></div>
          <div className="card"><b>2. Order</b><small>We agree scope, price and deadline.</small></div>
          <div className="card"><b>3. Payment</b><small>Paid by an agreed method.</small></div>
          <div className="card"><b>4. Delivery</b><small>Final files plus support.</small></div>
        </div>
      </section> */}
      
       <Process/>


      {/* TEAM */}
      {/* <section id="team">
        <h2>Team</h2>
        <p>Group 10, University of Okara. Add member photos and roles here.</p>
      </section> */}

      <Team/>

      {/* CONTACT */}
      {/* <section id="contact">
        <h2>Contact</h2>
        <p>Tell us what you need and we will reply with a quote.</p>
        <div>
          <a className="btn" href="mailto:hello@example.com">Send an email</a>
        </div>
      </section> */}

   
       <Contact/>



    </main>
  );
}