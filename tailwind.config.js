/** @type {import('tailwindcss').Config} */
const config = {
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
        sans: ["var(--font-Roboto)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
      screens: {
        desktop: "740px",
        mobile: { max: "739px" },
        mobileLg: { min: "991px" },
        tablet: { min: "740px", max: "1219px" },
        tabletMd: { min: "740px", max: "840px" },
        tabletLg: { min: "841px" },
        desktopDashboard: "1220px",
        desktopMd: { min: "1220px", max: "1335px" },
        desktopLg: { min: "1336px", max: "1665px" },
        desktopXl: { min: "1666px" },
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
