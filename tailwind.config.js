/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        logo: "0 0 4px rgba(0, 0, 0, 0.6)",
      },
      fontFamily: {
        headerFontFamily: `Roboto, sans-serif`,
        answersButton: `Roboto Condensed, sans-serif`,
      },
      backgroundImage: {
        quizCompletedBackgroundImage:
          "linear-gradient(125deg, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideInFromBottom: {
          "0%": { opacity: 0, transform: "translateY(50%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideInFromBottom: "slideInFromBottom 2s ease-in-out infinite",
      },
      dropShadow: {
        quizCompletedImageDropShadow: "0 0 4px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
