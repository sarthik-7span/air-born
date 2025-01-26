/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#094aa4',
        'skin': "#CDC3BB"
      },
      backgroundSize: {
        '100-auto': '100% auto',
      },
      backgroundPosition: {
        '-top-10': 'center top -10rem',
      },
      boxShadow: {
        product: "0px 0px 15px 10px #00000099",
        card: "0 0 5px #00000021"
      }
    },
  },
  plugins: [],
};
