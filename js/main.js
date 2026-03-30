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
    ? `<a href="${escapeHtml(p.link)}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:inherit;">
         <h1 id="section-title" class="ae-1">${escapeHtml(p.title)}</h1>
       </a>`
    : `<h1 id="section-title" class="ae-1">${escapeHtml(p.title)}</h1>`;

  return `
  <section id="${escapeHtml(p.id)}" class="slide fade-6 ">
    <div class="content">
      <div class="container">
        <div class="wrap">
          <div class="fix-10-12 toCenter">
            ${p.role ? `<p class="margin-bottom-2 ae-1"><span class="opacity-6">${escapeHtml(p.role)}</span></p>` : ""}
            ${titleHtml}
            ${p.description ? `<p class="ae-2"><span class="opacity-8">${escapeHtml(p.description)}</span></p>` : ""}
          </div>
          ${cardsHtml ? `
          <div class="fix-12-12 margin-top-3">
            <ul class="${listClass}">${cardsHtml}</ul>
          </div>` : ""}
        </div>
      </div>
    </div>
    <div id="section-bg" class="background" style="background-image:url(${escapeHtml(p.bg)})"></div>
  </section>`;
}
