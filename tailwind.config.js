/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ['var(--font-Roboto)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
        sans: ["var(--font-poppins)", "sans-serif"],
        body_text: ["var(--font-HelveticaNeue)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
      screens: {
        desktop: "740px",
        mobile: { max: "739px" },
        tablet: { min: "740px", max: "1219px" },
        desktopDashboard: "1220px",
        desktopMd: { min: "1220px", max: "1335px" },
        desktopLg: { min: "1336px", max: "1665px" },
        desktopXl: { min: "1666px" },
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
    },
  },
  plugins: [],
};
