/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        ink: "#23262b",
        dark: "#19191d",
        teal: {
          DEFAULT: "#3ecfae",
          glow: "#4fe0bf",
        },
        muted: "#767b8a",
      },
      fontFamily: {
        display: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.25rem",
      },
    },
  },
  plugins: [],
};
