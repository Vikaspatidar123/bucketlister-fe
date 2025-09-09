let accessToken = null;
let csrfToken = null;
let authExpiry = null;

const API_BASE_URL = process.env.NEXT_PUBLIC_CRM_API_BASE_URL || 'http://localhost:5000';
const API_EMAIL = process.env.NEXT_PUBLIC_CRM_API_EMAIL || 'romil@travyan.in';
const API_PASSWORD = process.env.NEXT_PUBLIC_CRM_API_PASSWORD || 'testpass123';

export const crmApi = {
  // Helper method to get CSRF token from cookies manually
  getCsrfFromCookies() {
    if (typeof document === 'undefined') return null;
    
    const cookiePatterns = [
      /csrf_access_token=([^;]+)/,
      /csrf-token=([^;]+)/,
      /CSRF-TOKEN=([^;]+)/,
      /X-CSRF-Token=([^;]+)/
    ];
    
    for (const pattern of cookiePatterns) {
      const cookieMatch = document.cookie.match(pattern);
      if (cookieMatch) {
        return decodeURIComponent(cookieMatch[1]);
      }
    }
    
    return null;
  },


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
        console.log('Login response:', responseData);
        
        // Extract CSRF token from response - check various possible fields
        csrfToken = responseData.csrf_token || 
                   responseData.csrfToken || 
                   responseData.data?.csrf_token ||
                   responseData.data?.csrfToken ||
                   null;
        
        // If not in response, extract from cookies immediately
        if (!csrfToken) {
          csrfToken = this.getCsrfFromCookies();
        }
        
        console.log('CSRF token after login:', csrfToken);
        
        // Set auth expiry
        authExpiry = Date.now() + (24 * 60 * 60 * 1000);
        
        return { success: true };
      } else {
        const errorText = await response.text();
        throw new Error(`Login failed: ${response.status} - ${errorText}`);
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
    if (!csrfToken) {
      csrfToken = this.getCsrfFromCookies();
    }
    
    
    console.log('Final CSRF token for request:', csrfToken);
    return { accessToken, csrfToken };
  },

  async createLead(leadData) {
    try {
      console.log('API Base URL:', API_BASE_URL);
      console.log('Lead data received:', leadData);
      
      const auth = await this.ensureAuthenticated();

      const { firstName, lastName, phone, email='website@bucketlister.com', source = 'Website', notes = '' } = leadData;
      
      if (!firstName || !email || !phone) {
        throw new Error('Required fields missing: firstName, email, phone');
      }

      console.log('Creating lead with CSRF token:', auth.csrfToken);
      console.log('All cookies:', typeof document !== 'undefined' ? document.cookie : 'No document');

      const requestBody = {
        first_name: firstName,
        last_name: lastName || '',
        email: email,
        phone_number: phone,
        source: source,
        lead_type: 'Warm',
        status: 'New',
        notes: notes
      };

      console.log('Lead request body:', requestBody);
      console.log('Making request to:', `${API_BASE_URL}/api/v1/leads`);

      const response = await fetch(`${API_BASE_URL}/api/v1/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': auth.csrfToken || '',
        },
        credentials: 'include',
        body: JSON.stringify(requestBody)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);

      if (response.ok) {
        const result = await response.json();
        console.log('Lead created successfully:', result);
        return { success: true, data: result };
      } else {
        const errorText = await response.text();
        console.error('Lead creation failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
          csrfToken: auth.csrfToken,
          url: `${API_BASE_URL}/api/v1/leads`
        });
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