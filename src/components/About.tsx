// To add your photo: put it in the public/ folder (for example public/ivy.jpg)
// and set PHOTO_URL to "/ivy.jpg". Leave it empty to show your initials instead.
const PHOTO_URL = "";

const whoami = [
  { key: "role", value: "full-stack & VR developer" },
  { key: "studied", value: "CS + biology + applied math" },
  { key: "focus", value: "interactive, user-facing software" },
  { key: "building", value: "this portfolio (React + TypeScript)" },
  { key: "playing", value: "Valorant" },
];

function About() {
  return (
    <section className="section" id="about">
      <h2>
        <span className="section-number">01</span> About
      </h2>
      <div className="about-grid">
        <div className="about-text">
          {/* Draft: rewrite these in your own voice. */}
          <p>
            I studied computer science alongside biology and applied
            mathematics, which is why so much of my work sits where software
            meets science: an app that helps people identify local wildlife, and
            a VR simulation that teaches students how human activity endangers
            manatees.
          </p>
          <p>
            I'm happiest building things people interact with, whether that's a
            real-time multiplayer game, a mobile app, or a VR experience. I've
            also enjoyed the people side of software, leading a four-person team
            as project manager and teaching as a computer science TA.
          </p>
        </div>

        <div className="about-side">
          {PHOTO_URL ? (
            <img
              className="about-photo"
              src={PHOTO_URL}
              alt="Ivy Bowers"
              width={160}
              height={160}
            />
          ) : (
            <div
              className="about-photo about-photo-placeholder"
              aria-hidden="true"
            >
              IB
            </div>
          )}

          <div className="terminal" aria-label="Quick facts about Ivy">
            <div className="terminal-bar">
              <span className="terminal-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="terminal-title">ivy@portfolio</span>
            </div>
            <pre className="terminal-body">
              <code>
                <span className="terminal-comment"># whoami</span>
                {"\n"}
                {whoami.map((line, index) => (
                  <span key={line.key}>
                    <span className="terminal-key">{line.key.padEnd(9)}</span>
                    <span className="terminal-arrow">→ </span>
                    {line.value}
                    {index === whoami.length - 1 && (
                      <span className="terminal-cursor" aria-hidden="true" />
                    )}
                    {"\n"}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
