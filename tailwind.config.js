/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "var(--demerzel-navy)",
        forest: "var(--demerzel-forest)",
        brand: "var(--demerzel-green)",
        field: "var(--demerzel-field)",
        olive: "#89A672",
        charcoal: "var(--demerzel-ink)",
        ink: "var(--demerzel-ink)",
        offwhite: "var(--demerzel-offwhite)",
        stone: "var(--demerzel-offwhite)",
        bone: "var(--demerzel-bone)",
        slate: "#152435",
        mist: "#A9B1A9",
        smoke: "#C8C8BB"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem'
        }
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
