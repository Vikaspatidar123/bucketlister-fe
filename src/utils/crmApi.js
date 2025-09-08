let accessToken = null;
let csrfToken = null;
let authExpiry = null;

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_CRM_API_BASE_URL || 'http://localhost:5000'
  : '';
const API_EMAIL = process.env.NEXT_PUBLIC_CRM_API_EMAIL || 'romil@travyan.in';
const API_PASSWORD = process.env.NEXT_PUBLIC_CRM_API_PASSWORD || 'testpass123';

export const crmApi = {
  async login() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email_id: API_EMAIL,
          password: API_PASSWORD
        })
      });

      if (response.ok) {
        const responseData = await response.json();
        
        // In browser environment with Next.js proxy, cookies are automatically set
        // Extract CSRF token from response data if available, or from document.cookie
        if (responseData.csrf_token) {
          csrfToken = responseData.csrf_token;
        } else if (typeof document !== 'undefined') {
          // Extract from browser cookies as fallback
          const cookieMatch = document.cookie.match(/csrf_access_token=([^;]+)/);
          if (cookieMatch) {
            csrfToken = cookieMatch[1];
          }
        }
        
        // Set auth expiry
        authExpiry = Date.now() + (24 * 60 * 60 * 1000);
        
        return { success: true };
      } else {
        throw new Error(`Login failed: ${response.status}`);
      }
    } catch (error) {
      console.error('CRM Login Error:', error);
      return { success: false, error: error.message };
    }
  },

  async ensureAuthenticated() {
    if (!csrfToken || (authExpiry && Date.now() > authExpiry)) {
      const loginResult = await this.login();
      if (!loginResult.success) {
        throw new Error('Failed to authenticate with CRM');
      }
    }
    
    // Extract CSRF token from cookies if not already available
    if (!csrfToken && typeof document !== 'undefined') {
      const cookieMatch = document.cookie.match(/csrf_access_token=([^;]+)/);
      if (cookieMatch) {
        csrfToken = cookieMatch[1];
      }
    }
    
    return { accessToken, csrfToken };
  },

  async createLead(leadData) {
    try {
      const auth = await this.ensureAuthenticated();

      const { firstName, lastName, phone, email='website@bucketlister.com', source = 'Website', notes = '' } = leadData;
      
      if (!firstName || !email || !phone) {
        throw new Error('Required fields missing: firstName, email, phone');
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': auth.csrfToken || '',
        },
        credentials: 'include',
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName || '',
          email: email,
          phone_number: phone,
          source: source,
          lead_type: 'Warm',
          status: 'New',
          notes: notes
        })
      });

      if (response.ok) {
        const result = await response.json();
        return { success: true, data: result };
      } else {
        const errorText = await response.text();
        throw new Error(`Create lead failed: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('CRM Create Lead Error:', error);
      return { success: false, error: error.message };
    }
  },

  parseFullName(fullName) {
    if (!fullName) return { firstName: '', lastName: '' };
    
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    return { firstName, lastName };
  },

  formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    
    if (cleaned.length === 10) {
      return `+91${cleaned}`;
    }
    
    if (cleaned.startsWith('91') && cleaned.length === 12) {
      return `+${cleaned}`;
    }
    
    if (cleaned.startsWith('+')) {
      return phone;
    }
    
    return `+91${cleaned}`;
  }
};

export default crmApi;