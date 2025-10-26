export const SITE = {
  name: 'TAKAI Paint Protection Films',
  site: 'https://www.takaifilms.jp',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const METADATA = {
  title: {
    default: 'TAKAI – Premium Japanese Protection Films',
    template: '%s | TAKAI – Premium Japanese Protection Films',
  },
  description: 'Japanese precision, clarity, and strength – redefining automotive protection films.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'TAKAI – Premium Japanese Protection Films',
    images: [
      {
        url: '/og-cover.jpg', // This will be processed by getImage in Metadata.astro
        width: 1200,
        height: 630,
        alt: 'TAKAI – Premium Japanese Protection Films',
      },
    ],
    type: 'website',
    title: 'TAKAI – Premium Japanese Protection Films',
    description: 'Japanese precision, clarity, and strength – redefining automotive protection films.',
  },
  twitter: {
    handle: '@takaifilms',
    site: '@takaifilms',
    cardType: 'summary_large_image',
    title: 'TAKAI – Premium Japanese Protection Films',
    description: 'Japanese precision, clarity, and strength – redefining automotive protection films.',
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
