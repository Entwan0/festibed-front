// tailwind.config.js
module.exports = {
  future: {},
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts}'],
  },
  theme: {
    extend: {
      lineHeight: {
        0: '0',
      },
    },
  },
  variants: {},
  plugins: [],
};
