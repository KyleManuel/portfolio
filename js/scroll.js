(function () {
  const wellnessSection = document.getElementById("wellness");
  if (!wellnessSection) return;

  const titleEl = wellnessSection.querySelector(".section-title");
  const bgEl = wellnessSection.querySelector(".section-bg");
  const linkEl = wellnessSection.querySelector(".section-link");
  const dots = Array.from(wellnessSection.querySelectorAll(".pager-dot"));

  const states = [
    { title: "The Wellness Company", bg: "assets/img/gallery-6.png",     url: "https://twc.health" },
    { title: "Holistic Goddess",     bg: "assets/img/gallery-6.2.webp",  url: "https://holisticgoddess.com/" },
    { title: "1775 Coffee",          bg: "assets/img/gallery-6.3.webp",  url: "https://1775coffee.com/" }
  ];

  let index = 0;
  let lastSwitch = 0;

  function isWellnessActive() {
    const r = wellnessSection.getBoundingClientRect();
    const mid = window.innerHeight / 2;
    return r.top < mid && r.bottom > mid;
  }

  function setActiveDot(i){
    dots.forEach((d, idx) => d.classList.toggle("is-active", idx === i));
  }

  function applyState(i) {
    const s = states[i];

    // fade title
    if (titleEl) {
      titleEl.style.opacity = "0";
      setTimeout(() => {
        titleEl.textContent = s.title;
        titleEl.style.opacity = "1";
      }, 120);
    }

    // fade bg
    if (bgEl) {
      bgEl.style.opacity = "0";
      setTimeout(() => {
        bgEl.style.backgroundImage = `url(${s.bg})`;
        bgEl.style.opacity = "1";
      }, 180);
    }

    // link
    if (linkEl) linkEl.href = s.url;

    setActiveDot(i);
  }
  
  applyState(index);
  
  dots.forEach(d => {
    d.addEventListener("click", () => {
        const i = Number(d.dataset.state);
        if (Number.isFinite(i)) {
        index = i;
        applyState(index);
        }
    });
  });

})();