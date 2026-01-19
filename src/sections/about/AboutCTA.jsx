import "./AboutCTA.css";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container cta-content">
        <h2>Have a project or story to share?</h2>

        <p>
          I'd love to connect, learn about your goals, and design something
          that truly resonates with people.
        </p>

        <a href="/contact" className="cta-btn">
          Let's Talk
        </a>
      </div>
    </section>
  );
}

