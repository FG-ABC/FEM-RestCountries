/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlueElement: "hsl(209, 23%, 22%)",
        DarkBackground: "hsl(207, 26%, 17%)",
        LightText: "hsl(200, 15%, 8%)",
        LightInput: "hsl(0, 0%, 52%)",
        LightBackground: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
