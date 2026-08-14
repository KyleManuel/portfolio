import { ContactForm } from "./ContactForm";
import { basePath } from "@/lib/basePath";

export function ContactSection() {
  return (
    <section 
      className="contact-section"
      id="contact"
      style={{
        backgroundImage: `
          linear-gradient(
          rgba(10, 10, 10, 0.45),
          rgba(10, 10, 10, 0.70)
          ),
          url("${basePath}/assets/img/background/img-10.jpg")
        `,
      }}
    >
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