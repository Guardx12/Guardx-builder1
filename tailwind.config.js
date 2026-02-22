/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.22)",
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    },
  },
  plugins: [],
};
