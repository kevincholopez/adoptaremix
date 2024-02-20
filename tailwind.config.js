/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/*/**.tsx',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

