/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "2rem",
        screens: {
          lg: "1280px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      colors: {
        "ecom-red": "#DB4444",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
