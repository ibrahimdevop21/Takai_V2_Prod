export const SITE = {
  name: 'AstroWind',
  site: 'https://astrowind.vercel.app',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const METADATA = {
  title: {
    default: 'AstroWind',
    template: '%s — AstroWind',
  },
  description: '🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'AstroWind',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      },
    ],
    type: 'website',
  },
  twitter: {
    handle: '@arthelokyo',
    site: '@arthelokyo',
    cardType: 'summary_large_image',
  },
};

export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

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
