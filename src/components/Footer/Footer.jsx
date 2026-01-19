import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Desiree J. Walker</h3>
          <p>
            UX Designer creating meaningful
            <br />
            digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Social</h4>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@desiree.com">Email</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>

      </div>
    </footer>
  );
}
