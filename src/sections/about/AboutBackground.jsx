import "./AboutBackground.css";

export default function AboutBackground() {
  return (
    <section className="about-background">
      <div className="container background-grid">

        <div className="background-spacer"></div>

        {/* RIGHT CONTENT */}
        <div className="background-content">
          <p className="section-label">BACKGROUND & EDUCATION</p>

          <h2>
            My background in Interactive Media taught me that great design is
            more than visuals. It's about crafting experiences that connect
            people.
          </h2>

          <p>
            My background in Interactive Media has given me a foundation in
            blending storytelling, design, and technology to create experiences
            that feel intuitive and meaningful.
          </p>

          <p>
            Through hands-on coursework and creative projects, I've learned how
            human behavior, aesthetics, and usability intersect, and how
            thoughtful design can make complex ideas feel simple.
          </p>

          <p>
            Alongside my studies, I completed the Google UX Design Certificate,
            where I gained practical experience in user research, wireframing,
            and usability testing. This program helped me strengthen my
            process-driven side and apply design thinking to real-world
            challenges.
          </p>

          <p>
            These experiences have shaped the way I approach every project:
            with curiosity, empathy, and a genuine desire to create designs
            that connect with people on a deeper level.
          </p>
        </div>

      </div>

      {/* EDUCATION CARD */}
      <div className="container education-wrapper">
        <div className="education-spacer"></div>
        <div className="education-card">
          <h3>Education</h3>

          <div className="education-item">
            <strong>
              Bachelor of Science – Interactive Media (In Progress)
            </strong>
            <p className="school">University of Miami</p>
            <p className="focus">
              Focus: UX Design, Visual Design & Interactive Technologies
            </p>
          </div>

          <div className="education-item">
            <strong>User Experience Certification – Google (2023)</strong>
            <p className="school">Coursera</p>
            <p className="focus">
              Hands-on training in user research, prototyping, and usability
              testing
            </p>
          </div>
        </div>
      </div>

      {/* CONTINUOUS LEARNING */}
      <div className="container learning-wrapper">
        <div className="learning-spacer"></div>
        <div className="learning">
          <p>
            Beyond formal education, I'm a continuous learner who stays curious
            about emerging design trends and tools. I actively seek out workshops,
            online courses, and collaborative projects that challenge my thinking
            and strengthen my design process.
          </p>
        </div>
      </div>
    </section>
  );
}
