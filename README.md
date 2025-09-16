# THE BUCKETLISTER - Frontend

A modern travel booking platform built with Next.js, featuring international tours and curated travel experiences.

## 🚀 Features

- **International Tours**: Explore curated journeys from Kyoto's temples to Tuscany's vineyards
- **Top Destinations**: Discover popular travel destinations with pricing
- **Tour Listings**: Browse and filter tour packages with advanced search
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Contact Forms**: Easy inquiry system for custom trips

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── layout.js                # Root layout with common header/footer
│   ├── page.js                  # Home page
│   └── explore/                 # New explore route
│       └── page.js              # International tours page
├── components/                   # Reusable components
│   ├── header/                  # Common header component
│   │   ├── components/
│   │   │   ├── Logo/
│   │   │   ├── Navigation/
│   │   │   └── ContactInfo/
│   │   ├── constants/
│   │   └── hooks/
│   ├── footer/                  # Common footer component
│   │   ├── components/
│   │   ├── constants/
│   │   └── hooks/
│   ├── home/                    # Home page components
│   │   ├── components/
│   │   ├── constants/
│   │   └── hooks/
│   └── explore/                 # Explore page components
│       ├── components/
│       │   ├── HeroSection/     # Hero with international tours
│       │   ├── TopDestinationsSection/  # Destination cards
│       │   ├── TestimonialsSection/     # Customer testimonials
│       │   ├── FeaturesBar/            # Feature highlights
│       │   ├── TourListingSection/     # Tour grid with filters
│       │   └── CurateTripSection/      # Features + contact form
│       └── style.module.scss
├── common/                      # Shared components
│   ├── CustomSelect/
│   ├── Pagination/
│   ├── PriceRangeSlider/
│   └── Tabs/
└── assets/                      # Static assets
    ├── png/
    └── svg/
```

## 🎯 New Explore Route

The `/explore` route contains the international tours section with:

1. **Hero Section**: Large banner with "International Tours" title
2. **Top Destinations**: Grid of destination cards with pricing
3. **Testimonials**: Customer reviews and feedback
4. **Features Bar**: Red bar highlighting key benefits
5. **Tour Listing**: Filterable grid of tour packages
6. **Curate Trip**: Features list + contact form

## 🧭 Navigation

Updated navigation includes:

- **International** → `/explore` (International tours)
- **Domestic** → `/domestic` (Domestic tours)
- **Upcoming Tours** → `/upcoming-tours`
- **Customise Your Trip** → `/customise-trip`
- **More** → `/more`

## 🎨 Design System

- **Colors**: White backgrounds, dark blue footer, red accents
- **Typography**: Clean, modern fonts with proper hierarchy
- **Components**: Reusable, responsive components with hover effects
- **Layout**: Grid-based responsive layouts with proper spacing

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Navigate to `/explore` to see the international tours page

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 968px
- Flexible grid layouts
- Touch-friendly interactions

## 🔧 Technologies Used

- **Next.js 14**: React framework with app router
- **SCSS Modules**: Scoped CSS styling
- **React Hooks**: State management and effects
- **Responsive Design**: Mobile-first approach
- **Modern JavaScript**: ES6+ features

## 📝 Notes

- Common header and footer are used across all pages
- The explore route is completely separate from the home page
- All components are modular and reusable
- Styles use SCSS modules for scoped styling
- Images are stored in the public/assets directory
