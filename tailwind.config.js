/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-nav": "hsl(236, 13%, 42%)",
        "text-hover": "hsl(5, 85%, 63%)",
        "bg-mean": "hsl(240, 100%, 5%)",
        "text-orange": "hsl(35, 77%, 62%)",
      },
    },
  },
  plugins: [],
};
