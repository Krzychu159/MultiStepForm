/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: {
          950: "hsl(213, 96%, 18%)",
          600: "hsl(243, 100%, 62%)",
          300: "hsl(228, 100%, 84%)",
          200: "hsl(206, 94%, 87%)",
          500: "hsl(354, 84%, 57%)",
        },
        neutral: {
          500: "hsl(231, 11%, 63%)",
          200: "hsl(229, 24%, 87%)",
          100: "hsl(218, 100%, 97%)",
          50: "hsl(231, 100%, 99%)",
          white: "hsl(0, 100%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
