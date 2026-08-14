"use client";

import { useEffect, useState } from "react";
import styles from "./VirtualCareModal.module.css";

type VirtualCareModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function VirtualCareModal({
  isOpen,
  onClose,
}: VirtualCareModalProps) {
  const [state, setState] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const canContinue = state !== "" && acceptedTerms;

  function handleStart() {
    if (!canContinue) return;

    const url =
      `https://care.twc.health/search_profile?search_key=&licensed_state=${encodeURIComponent(
        state
      )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={styles.modal}>
      <button
        type="button"
        className={styles.backdrop}
        onClick={onClose}
        aria-label="Close Virtual Care Portal"
      />

      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="virtual-care-title"
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h3
          id="virtual-care-title"
          className={styles.title}
        >
          Virtual Care
        </h3>

        <div className={styles.infoBox}>
          <p>
            This project preview recreates the entry step of The Wellness
            Company&apos;s Python-powered virtual care booking flow.
          </p>

          <p>
            care.twc.health is The Wellness Company&apos;s virtual care platform,
            where users can access online medical consultations, connect with
            licensed providers in their state, and begin treatment for common
            health concerns and prescription-related services.
          </p>

          <p>
            The platform is designed as a telehealth entry point that helps
            patients move from initial intake into provider selection and
            appointment booking within the live care experience.
          </p>

          <ul>
            <li>Start the booking flow similar to care.twc.health</li>
            <li>Select your state first</li>
            <li>Continue into the live care experience</li>
          </ul>
        </div>

        <h3 className={styles.sectionTitle}>
          Select the State you reside in.
        </h3>

        <div className={styles.field}>
          <label htmlFor="virtual-care-state">
            State
          </label>

          <select
            id="virtual-care-state"
            value={state}
            onChange={(event) => setState(event.target.value)}
          >
            <option value="">Choose...</option>

            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>

        <div className={styles.divider} />

        <label className={styles.terms}>
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) =>
              setAcceptedTerms(event.target.checked)
            }
          />

          <span>
            I accept the{" "}
            <a
              href="https://www.twc.health/pages/terms-of-service"
              target="_blank"
              rel="noreferrer"
              className={styles.termsLink}
            >
              Terms and Conditions of Service
            </a>
            .
          </span>

          {!acceptedTerms && (
            <span className={styles.validation}>
              You must agree before submitting.
            </span>
          )}
        </label>

        <div className={styles.divider} />

        <button
          type="button"
          className={styles.start}
          disabled={!canContinue}
          onClick={handleStart}
        >
          Click Here to Start
        </button>
      </div>
    </div>
  );
}