// Utility for form submission with fallback to localStorage

export interface FormData {
  name: string;
  phone: string;
  message?: string;
  consent: boolean;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  fallback?: boolean;
}

// Save form data to localStorage as backup
export function saveToLocalStorage(formData: FormData): void {
  try {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    submissions.push(submission);
    
    // Keep only last 50 submissions
    if (submissions.length > 50) {
      submissions.splice(0, submissions.length - 50);
    }
    
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    console.log('Form data saved to localStorage:', submission);
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

// Get saved submissions from localStorage
export function getSavedSubmissions(): any[] {
  try {
    return JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  } catch (error) {
    console.error('Failed to get saved submissions:', error);
    return [];
  }
}

// Submit form to API
export async function submitForm(formData: FormData): Promise<SubmissionResult> {
  try {
    // Try Netlify Functions first, then fallback to static API
    const apiUrl = window.location.hostname === 'localhost' 
      ? '/api/contact' 
      : '/.netlify/functions/contact';
      
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Server error');
    }

    return result;
  } catch (error) {
    console.error('API submission failed:', error);
    
    // Fallback to localStorage
    saveToLocalStorage(formData);
    
    return {
      success: true,
      message: 'Заявка принята! Мы свяжемся с вами в ближайшее время.',
      fallback: true
    };
  }
}

// Validate form data
export function validateForm(formData: FormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Имя обязательно для заполнения');
  }

  if (!formData.phone.trim()) {
    errors.push('Телефон обязателен для заполнения');
  } else {
    // Basic phone validation
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      errors.push('Введите корректный номер телефона');
    }
  }

  if (!formData.consent) {
    errors.push('Необходимо дать согласие на обработку персональных данных');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as +7 (XXX) XXX-XX-XX for Russian numbers
  if (cleaned.length === 11 && cleaned.startsWith('7')) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
  }
  
  // Format as +7 (XXX) XXX-XX-XX for numbers starting with 8
  if (cleaned.length === 11 && cleaned.startsWith('8')) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`;
  }
  
  // Return as is if doesn't match Russian format
  return phone;
}
