// API endpoint for contact form submissions
// This will be served as a static file and can be used with services like Netlify Functions

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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

    // Prepare email data
    const emailData = {
      to: 'priorityagency@proton.me', // Replace with your email
      subject: `Новая заявка от ${name}`,
      html: `
        <h2>Новая заявка с сайта Priority Agency</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong> ${message || 'Не указано'}</p>
        <p><strong>Согласие на обработку:</strong> ${consent ? 'Да' : 'Нет'}</p>
        <p><strong>Время:</strong> ${new Date().toLocaleString('ru-RU')}</p>
        <p><strong>IP:</strong> ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}</p>
      `,
      text: `
        Новая заявка с сайта Priority Agency
        
        Имя: ${name}
        Телефон: ${phone}
        Сообщение: ${message || 'Не указано'}
        Согласие на обработку: ${consent ? 'Да' : 'Нет'}
        Время: ${new Date().toLocaleString('ru-RU')}
        IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}
      `
    };

    // Try to send email via Formspree (free tier)
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
        _replyto: 'noreply@priority-agency.ru'
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
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ 
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    
    // Fallback: save to localStorage (will be handled by frontend)
    res.status(200).json({ 
      success: true,
      message: 'Заявка принята! Мы свяжемся с вами в ближайшее время.',
      fallback: true
    });
  }
}
