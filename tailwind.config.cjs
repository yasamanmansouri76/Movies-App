/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#11B980",
        },
        gray: {
          DEFAULT: "#E2E2E2",
        },
      },
    },
  },
  plugins: [],
};
