import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-intro">Hi, I'm Desiree,</p>

        <h1 className="hero-title">
          UX Designer turning complex problems into elegant,
          user-centered solutions.
        </h1>

        <p className="hero-location">
          Based in <span>Miami, FL</span>
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Projects</button>
          <button className="btn secondary">Resume</button>
        </div>
      </div>

      <div className="scroll-indicator">⌄</div>
    </section>
  );
}
