import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="section" id="skills">
      <h2>
        <span className="section-number">04</span> Skills
      </h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.name} className="card">
            <h3>{group.name}</h3>
            <ul className="tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
