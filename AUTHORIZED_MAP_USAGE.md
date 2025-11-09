# Authorized Map Component Usage Guide

## Overview
The `AuthorizedMap` component displays an interactive map showing all official Takai distributors and installers worldwide using Leaflet.js in a React component within the Astro/React/Tailwind environment.

## Features
- **Interactive Leaflet Map**: Displays distributors with custom markers
- **Responsive Design**: Adapts to desktop and mobile screens
- **SSR Safe**: Includes loading fallback for server-side rendering
- **Brand Styling**: Uses Takai brand colors (#bf1e2e) and dark theme
- **Hover Effects**: Markers pulse on hover with brand color animation
- **Custom Popups**: Dark-themed popups with company information
- **Legend**: Bottom-right legend identifying marker meaning

## Installation & Setup

### 1. Dependencies
The following packages have been installed:
```bash
npm install @astrojs/react react react-dom leaflet react-leaflet @types/leaflet
```

### 2. Astro Configuration
React integration has been added to `astro.config.ts`:
```typescript
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    react(),
    // ... other integrations
  ],
});
```

## Component Files

### 1. AuthorizedMap.jsx
Main React component located at: `src/components/AuthorizedMap.jsx`

**Features:**
- Displays 6 authorized distributors across Middle East and Asia
- Center coordinates: [25, 55] (Middle East focus)
- Default zoom: 4.5
- Responsive height: 400px desktop, 350px mobile
- Custom CircleMarker styling with Takai brand colors
- Hover animations and interactive popups

### 2. ContactMapSection.astro
Wrapper component located at: `src/components/ContactMapSection.astro`

**Features:**
- Complete section with heading and description
- Uses Astro's `client:load` directive for React hydration
- Responsive layout with Tailwind CSS
- Dark theme matching Takai aesthetic

## Usage Examples

### Basic Usage (Recommended)
```astro
---
import ContactMapSection from '~/components/ContactMapSection.astro';
---

<ContactMapSection />
```

### Direct Component Usage
```astro
---
import AuthorizedMap from '~/components/AuthorizedMap.jsx';
---

<section class="py-12 bg-[#0a0a0a] text-white">
  <h2 class="text-3xl font-semibold mb-6 text-center">
    Authorized Distributors & Installers
  </h2>
  <AuthorizedMap client:load />
</section>
```

### Integration in Contact Page
```astro
---
import Layout from '~/layouts/PageLayout.astro';
import ContactMapSection from '~/components/ContactMapSection.astro';
import TakaiContactForm from '~/components/widgets/TakaiContactForm.astro';
---

<Layout metadata={{ title: 'Contact Us' }}>
  <main>
    <!-- Other contact content -->
    <TakaiContactForm />
    
    <!-- Distributor Map Section -->
    <ContactMapSection />
  </main>
</Layout>
```

## Distributor Data

Current distributors included:
- **Nano Technic** - Singapore
- **Blackout Protection and Service Company** - Qatar  
- **Smart Shield** - Bahrain
- **Elite World for General Trading Company** - Iraq
- **SupaKoto** - Egypt
- **SupaKoto** - UAE

### Adding New Distributors
Edit the `distributors` array in `AuthorizedMap.jsx`:
```javascript
const distributors = [
  { name: "Company Name", country: "Country", lat: latitude, lng: longitude },
  // ... existing distributors
];
```

## Styling & Customization

### Brand Colors
- Primary marker color: `#bf1e2e` (Takai red)
- Hover color: `#ff2a3a` (lighter red)
- Background: `#0a0a0a` (dark)
- Popup background: `#1f2937` (dark gray)

### Responsive Breakpoints
- Desktop: 500px height
- Mobile (< 768px): 400px height
- Map container: Full width with max-width constraint

### Custom Styling
The component includes scoped styles for:
- Custom popup appearance
- Map tile filtering (darker theme)
- Responsive popup sizing
- Marker hover animations

## Browser Compatibility
- Modern browsers supporting ES6+
- Mobile Safari and Chrome
- Desktop Chrome, Firefox, Safari, Edge

## Performance Notes
- Component uses `client:load` for immediate hydration
- Leaflet CSS is imported only when needed
- Loading fallback prevents layout shift
- Map tiles are cached by browser

## Troubleshooting

### Map Not Loading
1. Check browser console for JavaScript errors
2. Verify internet connection for tile loading
3. Ensure React integration is properly configured

### Styling Issues
1. Verify Tailwind CSS is working
2. Check for CSS conflicts with existing styles
3. Ensure dark theme styles are applied

### SSR Issues
1. Component includes proper client-side checks
2. Loading fallback handles SSR gracefully
3. Use `client:load` directive for immediate hydration

## Test Page
A test page has been created at `/map-test` to verify the component works correctly.

## Future Enhancements
- Add clustering for many distributors
- Implement search/filter functionality
- Add contact information to popups
- Include driving directions integration
- Add distributor categories/types
