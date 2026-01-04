/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        body_text: ['var(--font-HelveticaNeue)', 'sans-serif'],
      },
      screens: {
        desktop: '740px',
      },
    },
  },
  plugins: [],
};