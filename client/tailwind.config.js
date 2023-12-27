/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          lighter: "#e5ffef",
          light: "#bdffd6",
          medium: "#1fff75",
          dark: "#009e3d",
          darker: "#003314"
        },
      },
    },
  },
  plugins: [],
}

