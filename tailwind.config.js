/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          'violett-dark': 'hsl(234, 25%, 52%)',
          'blue-dark': 'hsl(233, 54%, 16%)',
          'blue-light': 'hsl(234, 100%, 97%)',
          'gray': 'hsl(232, 10%, 56%)',
          'pink-saturated': 'hsl(341, 92%, 62%)',
          'pink-light': 'hsl(341, 100%, 83%)',
          'gradient-orange': 'hsl(13, 100%, 64%)',
          'gradient-pink': 'hsl(322, 87%, 55%)',
          'gradient-blue': 'hsl(237, 100%, 64%)',
        },
      },
      maxWidth: {
        'contained': '69.375rem'
      }
    },
  },
  plugins: [],
};
