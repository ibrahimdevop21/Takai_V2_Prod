import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Why TAKAI',
      href: getPermalink('/company'),
    },
    {
      text: 'Products',
      href: getPermalink('/products'),
    },
    {
      text: 'Technology',
      href: getPermalink('/technology'),
    },
    {
      text: 'Partners',
      href: getPermalink('/distributors'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Find Installer', href: '/distributors', variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'All Products', href: getPermalink('/products') },
        { text: 'TAKAI Premium', href: getPermalink('/products#premium') },
        { text: 'TAKAI Premium Plus', href: getPermalink('/products#premium-plus') },
        { text: 'Technology', href: getPermalink('/technology') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About TAKAI', href: getPermalink('/company') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Find Distributors', href: getPermalink('/distributors') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Technical Support', href: getPermalink('/contact') },
        { text: 'Installation Training', href: getPermalink('/distributors') },
        { text: 'Warranty Information', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/legal/privacy') },
        { text: 'Terms of Service', href: getPermalink('/legal/terms') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/takai-autofilms/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/Takaifilms/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/takai.autofilms/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@TAKAI-zz2qe' },
  ],
  footNote: `
    © ${new Date().getFullYear()} TAKAI Paint Protection Films. All rights reserved.
  `,
};
