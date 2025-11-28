# 🛡️ TAKAI Paint Protection Films

**Professional-grade paint protection films engineered in Japan for premium automotive applications.**

TAKAI is a comprehensive corporate website showcasing premium paint protection film products, global distributor network, and advanced Japanese engineering technology. Built with modern web technologies and designed with Japanese minimalist aesthetics.

## 🌟 Features

### 🎨 **Modern Design System**
- ✅ **Japanese Minimalist Aesthetic** - Clean, precision-engineered design language
- ✅ **TAKAI Brand Colors** - Navy (#01407a), Gold (#c9a227), Red (#bf1e2e)
- ✅ **Unified Icon System** - Consistent Tabler outline icons with 1.5px stroke width
- ✅ **Typography Hierarchy** - Standardized H1-H6 structure for accessibility and SEO
- ✅ **Responsive Design** - Mobile-first approach with seamless desktop scaling

### 🌍 **Global Presence**
- ✅ **Certified Partner Network** - UAE, Egypt, Qatar, Iraq, Bahrain, Colombia, Croatia, New Zealand
- ✅ **Regional Distributor Hubs** - Strategic hubs in UAE (Middle East & Asia), Egypt (Middle East & Africa), Colombia (South America)
- ✅ **Country Flag Integration** - Visual country representation with emoji flags
- ✅ **Partnership Tiers** - Distinguished hub vs. standard partner visual hierarchy

### 🚗 **Product Showcase**
- ✅ **Complete Product Range** - TAKAI 5, Gold, Gold+, Steel, Steel+ paint protection films
- ✅ **Solar Control Films** - Advanced UV and heat resistance solutions
- ✅ **Safety Window Films** - Glass Guard technology for security applications
- ✅ **Technical Specifications** - Detailed product features and warranty information

### 🔧 **Advanced Functionality**
- ✅ **Modern Contact System** - Enhanced contact form with inquiry categorization
- ✅ **Product Authenticity Verification** - Serial number verification system
- ✅ **Installation Process** - Step-by-step Japanese precision installation guide
- ✅ **Partnership Application** - Comprehensive distributor/installer certification process

### ⚡ **Technical Excellence**
- ✅ **Astro 5.0** - Lightning-fast static site generation
- ✅ **Tailwind CSS** - Utility-first styling with custom TAKAI theme
- ✅ **TypeScript** - Type-safe development
- ✅ **SEO Optimized** - Semantic HTML structure and meta optimization
- ✅ **Performance Focused** - Optimized images and minimal JavaScript

## 🏗️ **Architecture**

### **Pages Structure**
```
├── Home (/)                    - Hero, features, installation process
├── Company (/company)          - About TAKAI, values, story, team
├── Products (/products)        - Complete product range and specifications
├── Technology (/technology)    - Core technologies and R&D
├── Partners (/distributors)    - Global network and partnership info
└── Contact (/contact)          - Modern contact form and support
```

### **Component System**
```
├── widgets/
│   ├── Hero.astro             - Japanese-styled hero sections
│   ├── Features3.astro        - 3-column feature grids
│   ├── Steps.astro            - Installation process component
│   ├── TakaiContactForm.astro - Enhanced contact form
│   └── Content.astro          - Flexible content sections
├── ui/
│   ├── Headline.astro         - Standardized headings
│   ├── Button.astro           - TAKAI-branded buttons
│   └── Form.astro             - Form components
└── common/
    ├── Image.astro            - Optimized image handling
    └── Icon.astro             - Unified icon system
```

## 🎨 **Design System**

### **Color Palette**
- **TAKAI Navy**: `#01407a` - Primary brand color
- **TAKAI Gold**: `#c9a227` - Accent and highlights  
- **TAKAI Red**: `#bf1e2e` - Call-to-action elements
- **Neutral Grays**: Various shades for text and backgrounds

### **Typography Scale**
- **H1**: Hero titles (5xl-7xl, font-semibold)
- **H2**: Major sections (3xl-4xl, font-bold)
- **H3**: Sub-sections (xl-2xl, font-semibold)
- **Body**: Consistent line heights and spacing

### **Icon System**
- **Library**: Tabler Icons (outline style)
- **Stroke Width**: 1.5px consistent
- **Colors**: TAKAI Navy primary, Gold accents
- **Sizes**: 4h-4, 5h-5, 8h-8 based on context

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone [repository-url]
cd Takai

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Development**
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 📧 **Contact Information**

- **Email**: info@takaifilms.jp
- **Response Time**: Within 24 hours
- **Global Network**: 8 countries across 4 continents

## 🛡️ **Product Authentication**

TAKAI products include serial number verification to ensure authenticity. Use the contact form with "Product Authenticity Verification" inquiry type to verify your TAKAI film.

## 🌐 **Global Distributor Network**

### **Authorized Distributor Hubs**
- 🇦🇪 **UAE** - Middle East & Asia Hub
- 🇪🇬 **Egypt** - Middle East & Africa Hub  
- 🇨🇴 **Colombia** - South America Hub

### **Certified Partners**
- 🇶🇦 Qatar - Installer Network
- 🇮🇶 Iraq - Installation Specialists
- 🇧🇭 Bahrain - Professional Services
- 🇭🇷 Croatia - European Market
- 🇳🇿 New Zealand - Pacific Region

## 📁 **Assets & Images**

All images used throughout the TAKAI website must be placed in the `public/images` directory with the exact filenames below.

### **Hero Carousel Images (Main Priority)**
These 5 images are used in the home page hero carousel:

1. `hero-car-1.jpg` – Luxury sports car  
2. `hero-car-2.jpg` – Premium luxury sedan  
3. `hero-car-3.jpg` – High-performance vehicle  
4. `hero-car-4.jpg` – Luxury SUV  
5. `hero-car-5.jpg` – Electric luxury vehicle

> Recommended: 1920x1080 resolution, optimized JPG for web.

### **Content Section Images**

6. `takai-installation.jpg` – Installation process  
7. `takai-luxury-car.jpg` – Luxury sports car  
8. `takai-protected-vehicle.jpg` – Protected vehicle  
9. `takai-process-steps.jpg` – Process steps / illustration

> Recommended: ~800x600 JPG for content images.

### **Product Images**

10. `takai-premium-film.jpg` – TAKAI Premium product  
11. `takai-premium-plus-film.jpg` – TAKAI Premium Plus product  
12. `takai-solar-control.jpg` – Solar Control Films  
13. `takai-safety-films.jpg` – Safety Window Films

### **Image Preparation Instructions**
- Download/source each image (or suitable licensed alternatives).  
- Resize/optimize for web:
  - Hero images: ~1920x1080  
  - Content/product images: ~800x600  
- Save as **JPG** with the exact filenames listed above.  
- Ensure all images are properly licensed for **commercial use**.  
- All paths in the code base assume `/images/<filename>.jpg`.

The website will show broken images until these assets are present in `public/images` with the correct filenames.

---

**Built with Japanese precision. Engineered for excellence.**
