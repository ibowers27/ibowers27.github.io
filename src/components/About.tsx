const whoami = [
  { key: "studied", value: "CS w/ biology + applied math" },
  { key: "learning", value: "Unreal Engine + Roblox Development" },
  {
    key: "passion",
    value: "User-centered software that solves real-world problems",
  },
  { key: "playing", value: "Minecraft, Valorant, or Stardew Valley" },
];

function About() {
  return (
    <section className="section" id="about">
      <h2>
        <span className="section-number">01</span> About
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I studied computer science alongside biology and applied
            mathematics, so I tend to see software as a way to understand and
            improve the world around us. Everything I build is made with the
            hope of making people's lives easier or more fun.
          </p>
          <p>
            I'm always picking up new side projects or trying to build a new
            skill. Right now, I'm coding a product stock tracker for one of my
            favorite brands, experimenting with asset building for Roblox, and
            transferring my Unity knowledge to Unreal Engine.
          </p>
          <p>
            When I'm not coding, you'll probably find me gaming, reading, or
            hanging out with my pets, Harry and Yoko.
          </p>
        </div>

        <div className="about-side">
          <div className="terminal" aria-label="Quick facts about Ivy">
            <div className="terminal-bar">
              <span className="terminal-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="terminal-title">ivy@portfolio</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-comment"># whoami</p>
              <dl className="terminal-lines">
                {whoami.map((line, index) => (
                  <div key={line.key} className="terminal-line">
                    <dt className="terminal-key">{line.key}</dt>
                    <dd>
                      <span className="terminal-arrow">→</span>
                      <span>
                        {line.value}
                        {index === whoami.length - 1 && (
                          <span
                            className="terminal-cursor"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
