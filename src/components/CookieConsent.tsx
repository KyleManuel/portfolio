"use client";

import { useEffect, useRef, useState } from "react";

const CONSENT_KEY = "portfolio-cookie-consent";
const GA_MEASUREMENT_ID = "G-7344J5MSSB";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const analyticsLoaded = useRef(false);

  function loadGoogleAnalytics() {
    if (analyticsLoaded.current) return;

    analyticsLoaded.current = true;

    window.dataLayer = window.dataLayer || [];

    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      GA_MEASUREMENT_ID
    )}`;

    document.head.appendChild(script);
  }

//   useEffect(() => {
//     const savedConsent = localStorage.getItem(CONSENT_KEY);

//     if (savedConsent === "accepted") {
//       loadGoogleAnalytics();
//     } else if (!savedConsent) {
//       setIsVisible(true);
//     }
//   }, []);

  function acceptAll() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setIsVisible(false);
    loadGoogleAnalytics();
  }

  function necessaryOnly() {
    localStorage.setItem(CONSENT_KEY, "necessary");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="cookie-consent__content">
        <div>
          <h2 id="cookie-title">This website uses cookies</h2>
          <p id="cookie-description">
            We use essential cookies to make this website work and optional
            analytics cookies. You can accept all cookies or continue with
            necessary cookies only.
          </p>
        </div>

        <div className="cookie-consent__actions">
          <button type="button" onClick={necessaryOnly}>
            Necessary only
          </button>
          <button type="button" onClick={acceptAll}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}