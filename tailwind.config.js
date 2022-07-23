/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-violett-dark': 'hsl(234, 25%, 52%)',
        'app-blue-dark': 'hsl(233, 54%, 16%)',
        'app-blue-light': 'hsl(234, 100%, 97%)',
        'app-gray': 'hsl(232, 10%, 56%)',
        'app-pink-saturated': 'hsl(341, 92%, 62%)',
        'app-pink-light': 'hsl(341, 100%, 83%)',
        'app-gradient-orange': 'hsl(13, 100%, 64%)',
        'app-gradient-pink': 'hsl(322, 87%, 55%)',
        'app-gradient-blue': 'hsl(237, 100%, 64%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.grid-cols-responsive': {
          'grid-template-columns':
            'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
        },
      });
    }),
  ],
};
