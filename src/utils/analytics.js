import { 
  event, 
  trackConversion, 
  trackTripView, 
  trackSearch 
} from '@/components/common/GoogleAnalytics';

// Travel-specific analytics events for your website

// Track trip inquiries/interest
export const trackTripInquiry = (tripData) => {
  trackConversion('generate_lead', {
    event_category: 'Trip Inquiry',
    event_label: tripData.title || tripData.destination,
    value: tripData.price || 0,
    currency: 'INR',
    trip_id: tripData.id,
    destination: tripData.destination
  });
};

// Track booking attempts
export const trackBookingAttempt = (tripData, step = 'initiated') => {
  trackConversion('begin_checkout', {
    event_category: 'Booking',
    event_label: `${tripData.title} - ${step}`,
    value: tripData.price || 0,
    currency: 'INR',
    items: [{
      item_id: tripData.id,
      item_name: tripData.title,
      item_category: tripData.category || 'Trip',
      price: tripData.price || 0,
      quantity: 1
    }]
  });
};

// Track successful bookings
export const trackBookingComplete = (tripData, bookingData = {}) => {
  trackConversion('purchase', {
    event_category: 'Booking Complete',
    transaction_id: bookingData.transactionId || Date.now(),
    value: tripData.price || 0,
    currency: 'INR',
    items: [{
      item_id: tripData.id,
      item_name: tripData.title,
      item_category: tripData.category || 'Trip',
      price: tripData.price || 0,
      quantity: bookingData.travelers || 1
    }]
  });
};

// Track contact form submissions
export const trackContactForm = (formType = 'general') => {
  trackConversion('generate_lead', {
    event_category: 'Contact',
    event_label: formType,
    lead_type: 'contact_form'
  });
};

// Track newsletter signups
export const trackNewsletterSignup = () => {
  trackConversion('sign_up', {
    event_category: 'Newsletter',
    method: 'email'
  });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  event({
    action: 'click',
    category: 'Social Media',
    label: platform
  });
};

// Track phone number clicks
export const trackPhoneClick = () => {
  trackConversion('generate_lead', {
    event_category: 'Contact',
    event_label: 'Phone Click',
    lead_type: 'phone_call'
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (context = 'general') => {
  trackConversion('generate_lead', {
    event_category: 'WhatsApp',
    event_label: context,
    lead_type: 'whatsapp'
  });
};

// Track filter usage on explore page
export const trackFilterUsage = (filterType, filterValue) => {
  event({
    action: 'filter_applied',
    category: 'Explore',
    label: `${filterType}: ${filterValue}`
  });
};

// Track brochure downloads
export const trackBrochureDownload = (tripTitle) => {
  event({
    action: 'download',
    category: 'Brochure',
    label: tripTitle
  });
};

// Track video plays (for reels/trip videos)
export const trackVideoPlay = (videoTitle, videoType = 'reel') => {
  event({
    action: 'play',
    category: 'Video',
    label: `${videoType}: ${videoTitle}`
  });
};

// Track blog post engagement
export const trackBlogEngagement = (action, postTitle) => {
  event({
    action: action, // 'read', 'share', 'comment'
    category: 'Blog',
    label: postTitle
  });
};

// Export the original functions for direct use
export { 
  event, 
  trackConversion, 
  trackTripView, 
  trackSearch 
};