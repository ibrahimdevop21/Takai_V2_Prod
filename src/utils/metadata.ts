import type { MetaData } from '~/types';
import { SITE, METADATA } from '~/config';

// Default OG image - will be processed by Metadata.astro component
const DEFAULT_OG_IMAGE = {
  url: '/og-cover.jpg', // This gets processed by getImage in Metadata.astro
  width: 1200,
  height: 630,
};

export interface PageMetadata {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export function createMetadata(pageData: PageMetadata = {}): MetaData {
  const {
    title,
    description,
    canonical,
    image = '/og-cover.jpg',
    type = 'website',
    noindex = false
  } = pageData;

  const fullTitle = title 
    ? `${title} | TAKAI – Premium Japanese Protection Films`
    : METADATA.title.default;

  const fullDescription = description || METADATA.description;
  
  const pageUrl = canonical 
    ? `${SITE.site}${canonical}`
    : SITE.site;

  // Use default image object - processing handled by Metadata.astro
  const imageObj = image === '/og-cover.jpg' 
    ? DEFAULT_OG_IMAGE
    : { url: image, width: 1200, height: 630 };

  return {
    title: fullTitle,
    description: fullDescription,
    canonical: pageUrl,
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      url: pageUrl,
      siteName: SITE.name,
      images: [imageObj],
      type,
    },
    twitter: {
      handle: '@takaifilms',
      site: '@takaifilms',
      cardType: 'summary_large_image',
    },
  };
}

// Predefined metadata for common pages
export const PAGE_METADATA = {
  home: createMetadata({
    title: 'Premium Japanese Automotive Protection',
    description: 'World-class paint protection films engineered in Japan. Self-healing technology, superior clarity, and professional installation for luxury vehicles worldwide.',
    canonical: '/',
  }),
  
  products: createMetadata({
    title: 'Products',
    description: 'TAKAI Films – Premium Japanese paint protection and nano-ceramic film technology with advanced TPU and infrared rejection.',
    canonical: '/products',
  }),
  
  contact: createMetadata({
    title: 'Contact TAKAI | Expert Support & Information',
    description: 'Contact TAKAI for expert advice on premium Japanese paint protection films. Get quotes, technical support, or explore partnership opportunities. 24-hour response time guaranteed.',
    canonical: '/contact',
  }),
  
  company: createMetadata({
    title: 'Company',
    description: 'Learn about TAKAI, a leading manufacturer of premium paint protection films with a commitment to innovation and quality.',
    canonical: '/company',
  }),
  
  distributors: createMetadata({
    title: 'Distributors',
    description: 'Find authorized TAKAI distributors and installers near you. Join our network of certified professionals.',
    canonical: '/distributors',
  }),
  
  technology: createMetadata({
    title: 'Technology',
    description: 'Discover the advanced technology behind TAKAI paint protection films, featuring self-healing properties and superior durability.',
    canonical: '/technology',
  }),
  
  faq: createMetadata({
    title: 'FAQs',
    description: 'Common questions about TAKAI Japanese Paint Protection Films.',
    canonical: '/faq',
  }),
};
