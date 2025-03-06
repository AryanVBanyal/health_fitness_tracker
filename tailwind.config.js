/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#EFB6C8",
          dark: "#441752",
        },
        secondary: {
          light: "#ffffff",
          dark: "#000000",
        },
        tertiary: {
          light: "#A888B5",
          dark: "#8174A0",
        },
      },
    },
  },
  plugins: [],
};
