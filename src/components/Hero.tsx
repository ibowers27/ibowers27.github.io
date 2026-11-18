const RESUME_URL = "/Ivy_Bowers_Resume.pdf";

function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">
        Computer Science BA Graduate · Biology & Applied Math · New College of
        Florida
      </p>
      <h1>Hi, I'm Ivy.</h1>
      <p className="hero-lead">
        I build interactive, user-focused software for the web, mobile, and VR,
        from a real-time multiplayer game to a marine conservation simulation
        used in an annual university study. I've also led a four-person
        development team as project manager and lead full-stack developer.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          View projects
        </a>
        <a
          className="button"
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
        >
          Resume (PDF)
        </a>
        <a
          className="button"
          href="https://github.com/ibowers27"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="button"
          href="https://www.linkedin.com/in/ivy-bowers-42374a270"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;
