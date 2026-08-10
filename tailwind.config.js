/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'neu-bg': '#E0E5EC',
        'neu-fg': '#3D4852',
        'neu-muted': '#6B7280',
        'neu-accent': '#66D694',
        'neu-accent-dark': '#3D8B56',
        'neu-accent-light': '#8BE8A8',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
