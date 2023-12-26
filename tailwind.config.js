/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0 20px",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#AE9576",
        secondary: "#7B8493",
        title: "#4D545E",
      },
      fontSize: {
        md: "16px",
      },
    },
  },
  plugins: [],
};
