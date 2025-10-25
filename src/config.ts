export const SITE = {
  name: 'TAKAI Films Japan',
  site: 'https://www.takaifilms.jp',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const METADATA = {
  title: {
    default: 'TAKAI Films Japan – Invisible Armor for Your Most Precious Investment',
    template: '%s | TAKAI Films Japan',
  },
  description: 'Premium Paint Protection and Nano Ceramic Films from Nippon TAKAI Trading & Innovation Co., Ltd. Tokyo – Japanese Craftsmanship and Global Precision.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'TAKAI Films Japan',
    images: [
      {
        url: '/takai-logo-white-1.png',
        width: 1103,
        height: 249,
      },
    ],
    type: 'website',
    title: 'TAKAI Films Japan – Invisible Armor for Your Most Precious Investment',
    description: 'Premium Paint Protection and Nano Ceramic Films from Nippon TAKAI Trading & Innovation Co., Ltd. Tokyo – Japanese Craftsmanship and Global Precision.',
  },
  twitter: {
    handle: '@takaifilms',
    site: '@takaifilms',
    cardType: 'summary_large_image',
    title: 'TAKAI Films Japan – Invisible Armor for Your Most Precious Investment',
    description: 'Premium Paint Protection & Nano Ceramic Films by TAKAI Japan.',
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
