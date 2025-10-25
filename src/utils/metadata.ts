import type { MetaData } from '~/types';
import { SITE, METADATA } from '~/config';

// Simple metadata that bypasses image processing
const SIMPLE_OG_IMAGE = {
  url: '/takai-logo-white-1.png',
  width: 1103,
  height: 249,
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
    image = '/takai-logo-white-1.png',
    type = 'website',
    noindex = false
  } = pageData;

  const fullTitle = title 
    ? `${title} | TAKAI Films Japan`
    : METADATA.title.default;

  const fullDescription = description || METADATA.description;
  
  const pageUrl = canonical 
    ? `${SITE.site}${canonical}`
    : SITE.site;

  // Use simple image object to avoid processing issues
  const imageObj = image === '/takai-logo-dark.png' 
    ? { url: '/takai-logo-dark.png', width: 1103, height: 250 }
    : SIMPLE_OG_IMAGE;

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
    title: 'Invisible Armor for Your Most Precious Investment',
    description: 'Premium Paint Protection and Nano Ceramic Films from Nippon TAKAI Trading & Innovation Co., Ltd. Tokyo – Japanese Craftsmanship and Global Precision.',
    canonical: '/',
  }),
  
  products: createMetadata({
    title: 'Products',
    description: "Explore TAKAI's complete range of protection films - Paint Protection Films, UV Nano Ceramic Films, and Windshield Protection Films.",
    canonical: '/products',
  }),
  
  contact: createMetadata({
    title: 'Contact',
    description: 'Get in touch with TAKAI for product information, technical support, or partnership opportunities.',
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
