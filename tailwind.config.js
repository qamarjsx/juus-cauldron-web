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
        'btn-shadow': 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
      },
    },
  },
  plugins: [],
};
