/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'snow': "#FDF7FA",
        'rich-black': "#000411",
      },
      boxShadow: {
        'primary-shadow': 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
      },
      screens: {
        'xxxs': '375px',
        'xxs': "425px",
        'xs': "480px",
        'sm': '540px',
        'md': '640px',
        'lg': '768px',
        'xl': '900px',
        '2xl': '1024px',
        '3xl': '1280px',
        '4xl': '1440px',
        '5xl': '1536px',
        '6xl': '1920px',
      }
    },
  },
  plugins: [],
};
