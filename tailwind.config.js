/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#fce7f3",
          soft: "#FFB5C5",
        },
      },
    },
  },
  plugins: [],
};
