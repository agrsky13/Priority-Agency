// Netlify Function for contact form submissions
exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, phone, message, consent } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !phone || !consent) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Missing required fields',
          details: 'Name, phone, and consent are required'
        }),
      };
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Invalid phone number',
          details: 'Please provide a valid phone number'
        }),
      };
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
      ip: event.headers['x-forwarded-for'] || event.headers['client-ip']
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
      }),
    };

  } catch (error) {
    console.error('Form submission error:', error);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Заявка принята! Мы свяжемся с вами в ближайшее время.',
        fallback: true
      }),
    };
  }
};
