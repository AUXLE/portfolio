import "./DesignProcess.css";
import { designProcess } from "../../data/process";

export default function DesignProcess() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-header">
          <img src="/star1.png" alt="" className="process-icon-left" />
          <h2 className="process-title">
            How I make it happen
          </h2>
          <img src="/star2.png" alt="" className="process-icon-right" />
        </div>

        <p className="process-subtitle">
          My design process transforms complex ideas into intuitive,
          human-centered experiences.
        </p>
        
        <img src="/lightbulb.png" alt="" className="process-icon-bottom" />

        <div className="process-grid">
          {designProcess.map(item => (
            <div key={item.step} className="process-card">
              <div className="process-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
