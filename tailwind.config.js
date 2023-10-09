/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#f2f2f2",
        gray1: "#4f4f4f",
        gray2: "#828282",
        blue: "#2f80ed",
      },
    },
  },
  plugins: [],
};
