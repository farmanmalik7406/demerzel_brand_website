/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D34",
        forest: "#146A3A",
        brand: "#22C55E",
        field: "#B7A662",
        olive: "#89A672",
        charcoal: "#111418",
        ink: "#111418",
        offwhite: "#F2F0EC",
        stone: "#F2F0EC",
        bone: "#E9E6DC",
        slate: "#152435",
        mist: "#A9B1A9",
        smoke: "#C8C8BB"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(10, 18, 35, 0.15)",
        panel: "0 16px 40px rgba(8, 17, 33, 0.12)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};
