/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('thumbnail/hero-thumb.jpg')",
        'footer-pattern': "url('thumbnail/footer-thumb.jpg')",
      }
    },
  },
  plugins: [],
}

