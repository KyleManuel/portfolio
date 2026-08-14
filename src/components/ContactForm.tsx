"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setMessage("Sending...");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      company: String(formData.get("company") || "").trim(),
    };

    try {
      const response = await fetch(
        "https://portfolio-backend-liard-beta.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("Message sent successfully.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Failed to send message."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {message && (
        <p className={`form-status form-status--${status}`}>{message}</p>
      )}
    </form>
  );
}