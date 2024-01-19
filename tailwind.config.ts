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
        'bg-gradient': 'linear-gradient(180deg, rgba(12, 66, 117, 0.8), rgba(12, 66, 117, 1))',
      },
    },
  },
  plugins: [],
}
export default config
