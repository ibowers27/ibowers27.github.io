import { experience } from "../data/experience";

function Experience() {
  return (
    <section className="section" id="experience">
      <h2>
        <span className="section-number">03</span> Experience
      </h2>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.title} className="timeline-item">
            <div className="timeline-header">
              <h3>{item.title}</h3>
              <span className="timeline-dates">{item.dates}</span>
            </div>
            <p className="timeline-org">{item.org}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
