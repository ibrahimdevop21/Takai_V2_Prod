export const SITE = {
  name: 'TAKAI Paint Protection Films',
  site: 'https://www.takaifilms.jp',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const METADATA = {
  title: {
    default: 'TAKAI Paint Protection Films – Premium Japanese Automotive Protection',
    template: '%s | TAKAI Paint Protection Films',
  },
  description: 'World-class paint protection films engineered in Japan. Self-healing technology, superior clarity, and professional installation for luxury vehicles worldwide.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'TAKAI Paint Protection Films',
    images: [
      {
        url: '/images/takai-og-image.webp',
        width: 1200,
        height: 630,
        alt: 'TAKAI Paint Protection Films - Premium Japanese Automotive Protection',
      },
    ],
    type: 'website',
    title: 'TAKAI Paint Protection Films – Premium Japanese Automotive Protection',
    description: 'World-class paint protection films engineered in Japan. Self-healing technology, superior clarity, and professional installation for luxury vehicles worldwide.',
  },
  twitter: {
    handle: '@takaifilms',
    site: '@takaifilms',
    cardType: 'summary_large_image',
    title: 'TAKAI Paint Protection Films – Premium Japanese Automotive Protection',
    description: 'World-class paint protection films engineered in Japan. Self-healing technology and professional installation for luxury vehicles.',
  },
};

// I18N removed - not using internationalization

export const APP_BLOG = {
  isEnabled: false, // Disabled since we removed blog functionality
  postsPerPage: 6,
  post: {
    isEnabled: false,
    permalink: '/%slug%',
    robots: {
      index: true,
    },
  },
  list: {
    isEnabled: false,
    pathname: 'blog',
    robots: {
      index: true,
    },
  },
  category: {
    isEnabled: false,
    pathname: 'category',
    robots: {
      index: true,
    },
  },
  tag: {
    isEnabled: false,
    pathname: 'tag',
    robots: {
      index: false,
    },
  },
  isRelatedPostsEnabled: false,
  relatedPostsCount: 4,
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: null,
      partytown: false,
    },
  },
};

export const UI = {
  theme: 'system',
};
