const EMAIL = "ivyjanebowers@gmail.com";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>
        <span className="section-number">05</span> Let's connect
      </h2>
      <p>
        I'm looking for an entry-level software engineering role on a team
        building interactive, user-facing products, remote or in the Tampa Bay
        area.
      </p>
      <a className="button button-primary" href={`mailto:${EMAIL}`}>
        Email me
      </a>
    </section>
  );
}

export default Contact;
