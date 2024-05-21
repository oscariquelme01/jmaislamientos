import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'infinite-scroll-x': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)'}
        }
      },
      animation: {
        'infinite-scroll-x': 'infinite-scroll-x 25s linear infinite'
      },
      backgroundImage: {
        'gradient-accent':
          'linear-gradient(0deg, rgba(12,66,117,1) 0%, rgba(12,66,117,0.8) 100%)',
      },
      gridTemplateRows: {
        '4-auto': 'repeat(4, auto)'
      }
    },
  },
  plugins: [],
};
export default config;
