import "./ToolsExpertise.css";
import { skills } from "../../data/skills";
import { expertise } from "../../data/expertise";

export default function ToolsExpertise() {
  return (
    <section className="tools" id="about">
      <div className="container tools-grid">

        {/* Left Column */}
        <div className="tools-left">
          <h2>Tools & Expertise</h2>
          <p>
            I leverage industry-leading design tools and methodologies to
            create user-centered solutions that drive measurable business impact.
          </p>

          <a href="/resume.pdf" className="resume-btn">
            View My Resume
          </a>
        </div>

        {/* Right Column */}
        <div className="tools-right">
          <h3>Skills</h3>

          <div className="skills">
            {skills.map(skill => (
              <span 
                key={skill.name} 
                className="skill-pill"
                style={{ backgroundColor: skill.color }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="expertise-grid">
          {expertise.map(item => (
            <div key={item.title} className="expertise-card">
              {item.image && (
                <img src={item.image} alt={item.title} className="expertise-icon" />
              )}
              <div className="expertise-content">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
