/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",   /* sky-500 */
          dark:    "#0369a1",   /* sky-700 */
          accent:  "#22d3ee"    /* cyan-400 */
        }
      },
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1200px" }
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
};
