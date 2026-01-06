/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Use the new PostCSS plugin wrapper for Tailwind CSS (v4+)
    '@tailwindcss/postcss': {},
    // Add autoprefixer for better browser support
    autoprefixer: {},
  },
};

export default config;
