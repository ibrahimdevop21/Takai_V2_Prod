export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Why TAKAI',
      href: '/company',
    },
    {
      text: 'Products',
      href: '/products',
    },
    {
      text: 'Technology',
      href: '/technology',
    },
    {
      text: 'Partners',
      href: '/distributors',
    },
    {
      text: 'Press',
      href: '/press',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Find Installer', href: '/distributors', variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'All Products', href: '/products' },
        { text: 'TAKAI Premium', href: '/products#premium' },
        { text: 'TAKAI Premium Plus', href: '/products#premium-plus' },
        { text: 'Technology', href: '/technology' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About TAKAI', href: '/company' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Find Distributors', href: '/distributors' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Technical Support', href: '/contact' },
        { text: 'Installation Training', href: '/distributors' },
        { text: 'Warranty Information', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/legal/privacy' },
        { text: 'Terms of Service', href: '/legal/terms' },
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
