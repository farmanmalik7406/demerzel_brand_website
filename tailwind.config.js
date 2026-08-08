/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11110f",
        charcoal: "#1b1d19",
        forest: "#273427",
        olive: "#5f694b",
        moss: "#87906a",
        field: "#b6a36a",
        stone: "#f3efe6",
        sand: "#ddd4c4",
        smoke: "#b6b4aa"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 15, 0.14)"
      }
    }
  },
  plugins: []
};
