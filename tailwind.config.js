import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        takai: {
          blue: '#01407a',
          gold: '#c9a227',
          red: '#bf1e2e',
          text: '#0e0e0e',
          bg: '#ffffff',
          border: '#d6d6d6',
        },
      },
      fontFamily: {
        sans: ['InterVariable', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['InterVariable', 'var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        'noto-serif-jp': ['Noto Serif JP', 'serif'],
        'zen-kaku': ['Zen Kaku Gothic Antique', 'sans-serif'],
      },

      animation: {
        fade: 'fadeInUp 1s both',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
        'fadeIn-delay': 'fadeIn 1.2s ease-out 0.3s forwards',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  // darkMode: 'class', // Removed for light-only theme
};
