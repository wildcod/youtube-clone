/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      colors: {
        gray: {
          50: '#F8F8F8',
          100: '#F2F2F2',
          200: '#606060',
          300: 'hsla(0,0%,53.3%,0.2)',
        },
        red: {
          yt: '#FF0000',
        },
      },
    },
  },
  plugins: [],
};
