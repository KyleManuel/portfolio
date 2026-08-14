import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="contact-copy">
          <p className="contact-eyebrow">Contact</p>

          <h2>Let&apos;s build something together.</h2>

          <p>
            Have a project, role, or collaboration in mind? Send me a message
            and I&apos;ll get back to you.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}