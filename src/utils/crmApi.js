let accessToken = null;
let csrfToken = null;
let authExpiry = null;

const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_CRM_API_BASE_URL || "http://localhost:5000"
    : "http://localhost:5000";
const API_EMAIL = process.env.NEXT_PUBLIC_CRM_API_EMAIL || "romil@travyan.in";
const API_PASSWORD = process.env.NEXT_PUBLIC_CRM_API_PASSWORD || "testpass123";

export const crmApi = {
  async login() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/token-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email_id: API_EMAIL,
          password: API_PASSWORD,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.access_token) {
          accessToken = responseData.access_token;
        }

        // Set auth expiry
        authExpiry = Date.now() + 24 * 60 * 60 * 1000;

        return { success: true };
      } else {
        const errorText = await response.text();
        throw new Error(`Login failed: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error("CRM Login Error:", error);
      return { success: false, error: error.message };
    }
  },

  async ensureAuthenticated() {
    if (!accessToken || (authExpiry && Date.now() > authExpiry)) {
      const loginResult = await this.login();
      if (!loginResult.success) {
        throw new Error("Failed to authenticate with CRM");
      }
    }

    return { accessToken };
  },

  async createLead(leadData) {
    try {
      const auth = await this.ensureAuthenticated();

      const {
        firstName,
        lastName,
        phone,
        email,
        source = "Website",
        notes = "",
      } = leadData;

      if (!firstName || !phone) {
        throw new Error("Required fields missing: firstName, phone");
      }

      const requestBody = {
        first_name: firstName,
        last_name: lastName || "",
        email: email || "noemail@example.com",
        phone_number: phone,
        source: source,
        lead_type: "Warm",
        status: "New",
        notes: notes,
      };

      const response = await fetch(`${API_BASE_URL}/api/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.accessToken || ""}`,
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", [...response.headers.entries()]);

      if (response.ok) {
        const result = await response.json();
        console.log("Lead created successfully:", result);
        return { success: true, data: result };
      } else {
        const errorText = await response.text();
        console.error("Lead creation failed:", {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
          csrfToken: auth.csrfToken,
          url: `${API_BASE_URL}/api/v1/leads`,
        });
        throw new Error(
          `Create lead failed: ${response.status} - ${errorText}`,
        );
      }
    } catch (error) {
      console.error("CRM Create Lead Error:", error);
      return { success: false, error: error.message };
    }
  },

  parseFullName(fullName) {
    if (!fullName) return { firstName: "", lastName: "" };

    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    return { firstName, lastName };
  },

  formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length === 10) {
      return `+91${cleaned}`;
    }

    if (cleaned.startsWith("91") && cleaned.length === 12) {
      return `+${cleaned}`;
    }

    if (cleaned.startsWith("+")) {
      return phone;
    }

    return `+91${cleaned}`;
  },
};

export default crmApi;
