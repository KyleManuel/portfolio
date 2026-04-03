(function () {
  const wellnessSection = document.getElementById("wellness");
  if (!wellnessSection) return;

  const titleEl = document.getElementById("section-title");
  const bgEl = document.getElementById("section-bg");
  const linkEl = document.getElementById("section-link");

  const states = [
    {
      title: "The Wellness Company",
      bg: "assets/img/gallery-6.png",
      url: "https://twc.health"
    },
    {
      title: "Holistic Goddess",
      bg: "assets/img/gallery-6.2.webp",
      url: "https://holisticgoddess.com/"
    },
    {
      title: "1775 Coffee",
      bg: "assets/img/gallery-6.3.webp",
      url: "https://1775coffee.com/"
    }
  ];

  let index = 0;
  let lastSwitch = 0;

  // Helper: is #wellness currently centered in the viewport?
  function isWellnessActive() {
    const r = wellnessSection.getBoundingClientRect();
    const mid = window.innerHeight / 2;
    return r.top < mid && r.bottom > mid;
  }

  function applyState(i) {
    const s = states[i];
    if (titleEl) titleEl.textContent = s.title;
    if (bgEl) bgEl.style.backgroundImage = `url(${s.bg})`;
    if (linkEl && s.url) linkEl.href = s.url;

    if (titleEl){
      titleEl.style.opacity = "0";
      setTimeout(() => { titleEl.textContent = s.title; titleEl.style.opacity="1"; }, 120);
    }
    bgEl.style.opacity = "0";
    setTimeout(() => {
      bgEl.style.backgroundImage = `url(${s.bg})`;
      bgEl.style.opacity = "1";
    }, 180);
  }

  applyState(index);

  window.addEventListener("wheel", (e) => {
    if (!isWellnessActive()) return;

    const now = Date.now();
    if (now - lastSwitch < 450) { e.preventDefault(); return; }

    const goingDown = e.deltaY > 0;
    const goingUp = e.deltaY < 0;

    if (goingDown && index < states.length - 1) {
      e.preventDefault();
      index++;
      lastSwitch = now;
      applyState(index);
      return;
    }

    if (goingUp && index > 0) {
      e.preventDefault();
      index--;
      lastSwitch = now;
      applyState(index);
      return;
    }

  }, { passive: false });

})();