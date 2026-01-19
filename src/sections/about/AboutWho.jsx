import "./AboutWho.css";

export default function AboutWho() {
  return (
    <section className="about-who">
      <div className="container who-grid">

        {/* LEFT CONTENT */}
        <div className="who-content">
          <div className="who-label">
            <img src="/logo.png" alt="icon" />
            <span>WHO AM I?</span>
          </div>

          <h2>
            Hi I'm Desiree, a UX Designer with a passion for storytelling and
            creating digital experiences that connect people in meaningful ways.
          </h2>

          <p>
            My journey began in the Marines, where I learned resilience,
            empathy, and adaptability, qualities that now shape how I design
            with intention.
          </p>

          <p>
            As an early product designer at Bonder, I helped define and grow
            the product from its early stages, leading initiatives that
            simplified workflows, built consistency, and made complex systems
            approachable.
          </p>

          <p>
            I believe great design tells a story — one that uplifts, empowers,
            and creates connection. Outside of work, I love mentoring other
            creatives and exploring new ways to blend technology, empathy,
            and design.
          </p>

          <a href="/resume.pdf" className="resume-btn">
            View My Resume
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="who-images">
          <img src="/about/about-1.jpg" alt="Work" />
          <img src="/about/about-2.jpg" alt="Military" />
          <img src="/about/about-3.jpg" alt="Collaboration" />
        </div>

      </div>
    </section>
  );
}
