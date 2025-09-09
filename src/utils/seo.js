export const DEFAULT_SEO = {
  title: 'THE BUCKETLISTER - Curated Travel Experiences & Adventures',
  description: 'Discover curated travel experiences with THE BUCKETLISTER. From Himalayan treks to international adventures, find your perfect trip with small groups and expert guides.',
  keywords: [
    'travel', 'adventure', 'trekking', 'tours', 'vacation', 'travel packages', 'himalayan treks', 'international trips', 'small group travel', 'curated experiences',
    // High-traffic search queries for Indian travel market
    'adventure trip in india', 'adventure trip packages in india', 'adventure holiday packages in india', 'india travel packages',
    'weekend getaways from bangalore', 'weekend getaways from delhi', 'weekend getaways from hyderabad', 'weekend getaways near mumbai',
    'bucket list adventures', 'coorg tour packages', 'gokarna tour packages', 'hampi tour packages', 'kashmir tour packages',
    'uttarakhand tour packages', 'arunachal pradesh tour packages', 'andaman tour packages'
  ],
  siteUrl: 'https://thebucketlister.com',
  siteName: 'THE BUCKETLISTER',
  twitterHandle: '@thebucketlister',
  image: '/assets/png/logo.png',
  locale: 'en_US',
  type: 'website'
};

export const generateSEOTags = ({
  title,
  description,
  keywords = [],
  url,
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noIndex = false
}) => {
  // Clean title - remove undefined/null values
  const cleanTitle = title && title !== 'undefined' && title.trim() ? title.trim() : null;
  const seoTitle = cleanTitle ? `${cleanTitle} | ${DEFAULT_SEO.siteName}` : DEFAULT_SEO.title;
  const seoDescription = description || DEFAULT_SEO.description;
  const seoUrl = url ? `${DEFAULT_SEO.siteUrl}${url}` : DEFAULT_SEO.siteUrl;
  const seoImage = image ? `${DEFAULT_SEO.siteUrl}${image}` : `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.image}`;
  const seoKeywords = [...DEFAULT_SEO.keywords, ...keywords].join(', ');

  const metaTags = [
    { name: 'description', content: seoDescription },
    { name: 'keywords', content: seoKeywords },
    { name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#1a365d' },
    
    // Open Graph
    { property: 'og:title', content: seoTitle },
    { property: 'og:description', content: seoDescription },
    { property: 'og:type', content: type },
    { property: 'og:url', content: seoUrl },
    { property: 'og:image', content: seoImage },
    { property: 'og:site_name', content: DEFAULT_SEO.siteName },
    { property: 'og:locale', content: DEFAULT_SEO.locale },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: DEFAULT_SEO.twitterHandle },
    { name: 'twitter:title', content: seoTitle },
    { name: 'twitter:description', content: seoDescription },
    { name: 'twitter:image', content: seoImage },
  ];

  // Add article-specific meta tags
  if (type === 'article' && author) {
    metaTags.push({ name: 'author', content: author });
    metaTags.push({ property: 'article:author', content: author });
  }

  if (publishedTime) {
    metaTags.push({ property: 'article:published_time', content: publishedTime });
  }

  if (modifiedTime) {
    metaTags.push({ property: 'article:modified_time', content: modifiedTime });
  }

  if (section) {
    metaTags.push({ property: 'article:section', content: section });
  }

  // Add article tags
  if (tags.length > 0) {
    tags.forEach(tag => {
      metaTags.push({ property: 'article:tag', content: tag });
    });
  }

  return {
    title: seoTitle,
    metaTags,
    canonicalUrl: seoUrl,
    image: seoImage,
    description: seoDescription
  };
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${DEFAULT_SEO.siteUrl}${crumb.url}`
    }))
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'THE BUCKETLISTER',
    url: DEFAULT_SEO.siteUrl,
    logo: `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.image}`,
    description: DEFAULT_SEO.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.instagram.com/thebucketlister',
      'https://www.facebook.com/thebucketlister',
      'https://www.twitter.com/thebucketlister',
      'https://www.youtube.com/thebucketlister'
    ],
    foundingDate: '2020',
    slogan: 'Curated Travel Experiences & Adventures'
  };
};

export const generateTripSchema = (trip) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Trip',
    name: trip.title,
    description: trip.description,
    image: trip.images?.map(img => `${DEFAULT_SEO.siteUrl}${img}`) || [],
    url: `${DEFAULT_SEO.siteUrl}/trip?id=${trip.id}`,
    offers: {
      '@type': 'Offer',
      price: trip.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: trip.startDate,
      validThrough: trip.endDate
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'THE BUCKETLISTER',
      url: DEFAULT_SEO.siteUrl
    },
    duration: trip.duration,
    itinerary: trip.itinerary?.map((day, index) => ({
      '@type': 'Day',
      name: `Day ${index + 1}`,
      description: day.description
    })) || []
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: DEFAULT_SEO.siteName,
    url: DEFAULT_SEO.siteUrl,
    description: DEFAULT_SEO.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${DEFAULT_SEO.siteUrl}/explore?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
      logo: `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.image}`
    }
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': DEFAULT_SEO.siteUrl,
    name: 'THE BUCKETLISTER',
    description: DEFAULT_SEO.description,
    url: DEFAULT_SEO.siteUrl,
    telephone: '+91-XXXXXXXXXX', // Add actual phone number
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address', // Add actual address
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your Pin Code',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 'Your Latitude',
      longitude: 'Your Longitude'
    },
    openingHours: 'Mo-Su 09:00-18:00',
    priceRange: '$$',
    image: `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.image}`,
    logo: `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.image}`
  };
};