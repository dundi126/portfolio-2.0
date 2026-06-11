/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#141512",
        muted: "#71736b",
        line: "#dedfd8",
        paper: "#f7f7f2",
        surface: "#eeefe8",
        accent: "#ff5d3a",
      },
      maxWidth: {
        container: "960px",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(20, 21, 18, 0.14)",
      },
    },
  },
  plugins: [],
};
