/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fafafa',
        secondary: '#d4d4d8',
        accent: '#18181b'
      }
    }
  },
  plugins: []
}
