/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f7faef",
          100: "#eef4dc",
          500: "#6B9B2A",
          600: "#4E7A1A",
          700: "#3F6415"
        },
        citrus: {
          50: "#fef7f1",
          100: "#fdf0e6",
          500: "#D95F0E",
          600: "#B04A07"
        },
        sand: {
          50: "#F4F0EA",
          100: "#EDE8E0",
          200: "#DDD8D2"
        },
        ink: {
          700: "#5A5550",
          900: "#2D2A26"
        }
      },
      boxShadow: {
        soft: "0 24px 64px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};
