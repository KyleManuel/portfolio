(() => {
  const CONSENT_KEY = "portfolio-cookie-consent";
  const GA_MEASUREMENT_ID = "G-7344J5MSSB";
  
  const banner = document.getElementById("cookie-consent");
  const acceptButton = document.getElementById("accept-cookies");
  const necessaryButton = document.getElementById("necessary-cookies");

  let gaLoaded = false;

  if (!banner || !acceptButton || !necessaryButton) {
    console.warn("Cookie banner elements were not found.");
    return;
  }

  function loadGoogleAnalytics() {
    if (gaLoaded) return;

    gaLoaded = true;

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);

    const script = document.createElement("script");

    script.async = true;
    script.src =
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
        GA_MEASUREMENT_ID
      )}`;

    script.onerror = () => {
      console.error("Google Analytics failed to load.");
      gaLoaded = false;
    };

    document.head.appendChild(script);
  }

  function hideBanner() {
    banner.hidden = true;
  }

  function showBanner() {
    banner.hidden = false;
  }

  function saveConsent(choice) {
    localStorage.setItem(CONSENT_KEY, choice);
  }

  const savedConsent = localStorage.getItem(CONSENT_KEY);

  if (savedConsent === "accepted") {
    hideBanner();
    loadGoogleAnalytics();
  } else if (savedConsent === "necessary") {
    hideBanner();
  } else {
    showBanner();
  }

  acceptButton.addEventListener("click", () => {
    saveConsent("accepted");
    hideBanner();
    loadGoogleAnalytics();
  });

  necessaryButton.addEventListener("click", () => {
    saveConsent("necessary");
    hideBanner();
  });
})();