const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  statusEl.textContent = 'Sending...';

  const formData = new FormData(form);

  const payload = {
    name: formData.get('name')?.trim(),
    email: formData.get('email')?.trim(),
    message: formData.get('message')?.trim(),
    company: formData.get('company')?.trim(),
  };

  try {
    const response = await fetch('https://portfolio-backend-liard-beta.vercel.app/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong.');
    }

    statusEl.textContent = 'Message sent successfully.';
    form.reset();
  } catch (error) {
    statusEl.textContent = error.message || 'Failed to send message.';
  }
});


const projectsMarker = document.getElementById("projects-root");
const slidesHTML = projects.map(renderProjectSlide).join("");

projectsMarker.insertAdjacentHTML("beforebegin", slidesHTML);
projectsMarker.remove();

function escapeHtml(s="") {
  return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function renderProjectSlide(p){
  const listClass = `flex fixedSpaces later left ${p.cardsLayout === "mobileShots" ? "cards--mobile" : ""}`;
  const cardsHtml = (p.cards || []).map(c => `
    <li class="col-4-12 col-tablet-1-2 col-phone-1-1">
      <img class="wide" src="${escapeHtml(c.img)}" loading="lazy" decoding="async"/>
      ${c.heading ? `<h3 class="ae-6">${escapeHtml(c.heading)}</h3>` : ""}
      ${c.text ? `<div class="ae-5"><p class="tiny opacity-6">${escapeHtml(c.text)}</p></div>` : ""}
    </li>
  `).join("");

  const titleHtml = p.link
    ? `<a class="section-link" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:inherit;">
         <h1 class="section-title ae-1">${escapeHtml(p.title)}</h1>
       </a>`
    : `<h1 class="section-title ae-1">${escapeHtml(p.title)}</h1>`;

  const pagerHtml = (p.id === "wellness") ? `
    <div class="state-pager bookmark-pager" aria-label="Wellness projects">
      <button class="pager-dot" type="button" data-state="0">
        <span class="pager-label">The Wellness Company</span>
      </button>
      <div class="sub-wrap">
      <button class="sub-bm" type="button" data-sub="0">
        <span class="sub-bm__row">
          <span>Virtual Care Portal</span>
          <img
            class="sub-bm__icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width="14"
            height="14"
            loading="lazy"
          />
        </span>
      </button>
      </div>

      <button class="pager-dot" type="button" data-state="1">
        <span class="pager-label">Holistic Goddess</span>
      </button>

      <button class="pager-dot" type="button" data-state="2">
        <span class="pager-label">1775 Coffee</span>
      </button>
    </div>
  ` : "";

  return `
  <section id="${escapeHtml(p.id)}" class="slide fade-3">
    ${pagerHtml}
    <div class="content">
      <div class="container">
        <div class="wrap">
          <div class="fix-10-12 toCenter">
            ${p.role ? `<p class="margin-bottom-2 ae-1"><span class="opacity-6">${escapeHtml(p.role)}</span></p>` : ""}
            ${titleHtml}
            ${p.description ? `<p class="ae-2"><span class="opacity-8">${escapeHtml(p.description)}</span></p>` : ""}
          </div>
          ${cardsHtml ? `
            <div class="fix-12-12 margin-top-3 cards-wrap">
              <ul class="${listClass} cards-list">${cardsHtml}</ul>
            </div>` : ""}
        </div>
      </div>
    </div>
    <div
      class="section-bg background"
      data-bg="${escapeHtml(p.bg)}"
      data-mbbg="${escapeHtml(p.mbBg || p.bg)}"
      style="background-image:url(${escapeHtml(p.bg)})">
    </div>
  </section>`;
}

function applyResponsiveBgs() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  document.querySelectorAll(".section-bg[data-bg]").forEach((el) => {
    const desktop = el.dataset.bg;
    const mobile = el.dataset.mbbg || desktop;
    const next = isMobile ? mobile : desktop;

    if (!el.style.backgroundImage.includes(next)) {
      el.style.backgroundImage = `url(${next})`;
    }
  });
}

applyResponsiveBgs();
window.addEventListener("resize", applyResponsiveBgs);

(function initIntakeModal() {
  let contentLoaded = false;

  function getModal() {
    return document.getElementById('intakeModal');
  }

  function getModalContent() {
    return document.getElementById('intakeModalContent');
  }

  async function loadModalContent() {
    const content = getModalContent();
    if (!content || contentLoaded) return;

    try {
      const response = await fetch('sections/care-health.html');
      if (!response.ok) {
        throw new Error('Failed to load modal content.');
      }

      content.innerHTML = await response.text();
      contentLoaded = true;
      initCareHealthActions();
    } catch (error) {
      content.innerHTML = `<div class="intake-modal__header">
        <h3 class="intake-modal__title">Error</h3>
        <button class="intake-modal__close" type="button" data-intake-close="1">✕</button>
      </div>
      <div class="intake-modal__body">
        <p>${error.message}</p>
      </div>`;
    }
  }

  function openModal() {
    const modal = getModal();
    if (!modal) return;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const modal = getModal();
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initCareHealthActions() {
    const stateSelect = document.getElementById('usa_state');
    const terms = document.getElementById('terms');
    const linkButton = document.getElementById('link_button');

    if (!stateSelect || !terms || !linkButton) return;

    function updateButtonState() {
      const validState = stateSelect.value && stateSelect.value !== 'empty';
      const agreed = terms.checked;

      linkButton.disabled = !(validState && agreed);
      linkButton.classList.toggle('button-disabled', !(validState && agreed));
    }

    stateSelect.addEventListener('change', updateButtonState);
    terms.addEventListener('change', updateButtonState);

    linkButton.addEventListener('click', function (e) {
      e.preventDefault();

      const state = stateSelect.value;
      if (!state || state === 'empty' || !terms.checked) return;

      const url = `https://care.twc.health/search_profile?search_key=&licensed_state=${encodeURIComponent(state)}`;
      window.open(url, '_blank');
    });

    updateButtonState();
  }

  document.addEventListener('click', async (e) => {
    const sub = e.target.closest('.sub-bm[data-sub="0"]');
    if (!sub) return;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    await loadModalContent();
    openModal();
  }, true);

  document.addEventListener('click', (e) => {
    const closeHit = e.target.closest('[data-intake-close]');
    if (!closeHit) return;

    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });

  document.addEventListener('keydown', (e) => {
    const modal = getModal();
    if (!modal) return;

    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
})();