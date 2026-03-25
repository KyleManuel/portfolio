export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://kylemanuel.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, company } = req.body;

    if (company) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All required fields must be filled.' });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    console.log('Contact form submission:', {
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    return res.status(200).json({ ok: true, message: 'Message received.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}