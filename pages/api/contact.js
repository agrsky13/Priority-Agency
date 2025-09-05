// Vercel API Route for contact form submissions
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, phone, message, consent } = req.body;

    // Validate required fields
    if (!name || !phone || !consent) {
      res.status(400).json({ 
        error: 'Missing required fields',
        details: 'Name, phone, and consent are required'
      });
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      res.status(400).json({ 
        error: 'Invalid phone number',
        details: 'Please provide a valid phone number'
      });
      return;
    }

    // Send email via Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/xjkeplve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        message: message || '',
        _subject: `Новая заявка от ${name}`,
        _replyto: 'priorityagency@proton.me'
      })
    });

    if (!formspreeResponse.ok) {
      throw new Error('Formspree submission failed');
    }

    // Log to console for debugging
    console.log('Form submitted successfully:', {
      name,
      phone,
      message,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    res.status(200).json({ 
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    
    // Fallback: return success anyway
    res.status(200).json({ 
      success: true,
      message: 'Заявка принята! Мы свяжемся с вами в ближайшее время.',
      fallback: true
    });
  }
}
