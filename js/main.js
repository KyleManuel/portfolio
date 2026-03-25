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