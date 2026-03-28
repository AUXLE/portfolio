import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-intro">Hi, I'm <span className="hero-accent">Desiree</span>,</p>

        <h1 className="hero-title">
          UX Designer turning complex problems into elegant,
          user-centered solutions.
        </h1>

        <p className="hero-location">
          Based in <span>Miami, FL</span>
        </p>

        <div className="hero-buttons">
          <button className="hero-btn">Projects</button>
                    {/* RESUME — VIEWABLE + DOWNLOADABLE */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="scroll-indicator">⌄</div>
    </section>
  );
}
