/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
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
