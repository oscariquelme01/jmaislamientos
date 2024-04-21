import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-accent':
          'linear-gradient(0deg, rgba(12,66,117,1) 0%, rgba(12,66,117,0.8) 100%)',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
      }
    },
  },
  plugins: [],
};
export default config;
