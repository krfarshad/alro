/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
