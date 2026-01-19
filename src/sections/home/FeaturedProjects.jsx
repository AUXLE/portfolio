import "./FeaturedProjects.css";
import { featuredProjects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of recent work spanning from mobile apps, web applications,
          and comprehensive UX research projects.
        </p>

        <div className="projects-grid">
          {featuredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-meta">
                  {project.type} <br />
                  <span>{project.role}</span>
                </p>

                <p className="project-desc">{project.description}</p>

                <a href={project.link} className="project-btn">
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="/projects">[ View All Projects → ]</a>
        </div>

        <p className="section-label">Design Process</p>
      </div>
    </section>
  );
}
