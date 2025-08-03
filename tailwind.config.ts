import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '360px',  
        md: '768px',  
        lg: '1216px',
      },
      colors: {
        primary: 'var(--color-primary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        accent: 'var(--color-accent)',
        additional: 'var(--color-additional)',
      },
      fontFamily: {
        vibes: ['var(--font-vibes)', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
