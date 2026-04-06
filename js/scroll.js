(function () {
  const wellnessSection = document.getElementById("wellness");
  if (!wellnessSection) return;

  const titleEl = wellnessSection.querySelector(".section-title");
  const bgEl = wellnessSection.querySelector(".section-bg");
  const linkEl = wellnessSection.querySelector(".section-link");
  const dots = Array.from(wellnessSection.querySelectorAll(".pager-dot"));

  const states = [
    {
        title: "The Wellness Company",
        bg: "assets/img/gallery-6.png",
        mbBg: "assets/img/mob-twc-bg.png",
        url: "https://twc.health"
    },
    {
        title: "Holistic Goddess",
        bg: "assets/img/gallery-6.2.webp",
        mbBg: "assets/img/mob-hg-bg.png",
        url: "https://holisticgoddess.com/"
    },
    {
        title: "1775 Coffee",
        bg: "assets/img/gallery-6.3.webp",
        mbBg: "assets/img/mob-1775-bg.png",
        url: "https://1775coffee.com/"
    }
  ];

  let index = 0;
  
  function setActiveDot(i){
    dots.forEach((d, idx) => {
        const active = idx === i;
        d.classList.toggle("is-active", active);
        d.disabled = active;
        d.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function applyState(i) {
    const s = states[i];

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const chosenBg = (isMobile && s.mbBg) ? s.mbBg : s.bg;

    if (titleEl) {
      titleEl.style.opacity = "0";
      setTimeout(() => {
        titleEl.textContent = s.title;
        titleEl.style.opacity = "1";
      }, 120);
    }

    if (bgEl) {
      bgEl.style.opacity = "0";
      setTimeout(() => {
        bgEl.style.backgroundImage = `url(${chosenBg})`;
        bgEl.style.opacity = "1";
      }, 180);
    }
    
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