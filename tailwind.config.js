/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#FDF7FA",
        "rich-black": "#000411",
        nova: "#FED381",
        about: "#6E6E6E",
        "faq-orange": "#FF7F01",
        "spring-green": "#84f80a",
        "aqua": "#05e2fc",
      },
      boxShadow: {
        "primary-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      screens: {
        xxxxs: "360px",
        xxxs: "375px",
        xxs: "390px",
        xs: "480px",
        sm: "540px",
        md: "640px",
        lg: "768px",
        xl: "900px",
        "2xl": "1024px",
        "3xl": "1280px",
        "4xl": "1440px",
        "5xl": "1536px",
        "6xl": "1920px",
      },
      animation: {
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      
      },
    },
  },
  plugins: [],
};
