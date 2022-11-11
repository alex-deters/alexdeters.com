/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            'proxima': ['proxima-nova'],
            'raleway': ['raleway']
        },
        extend: {},
  },
  plugins: [
      require('@catppuccin/tailwindcss'),
  ],
}
