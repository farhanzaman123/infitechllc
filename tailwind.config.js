/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // This line ensures Tailwind scans your React components
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Add Inter font
        },
        colors: { // Custom color palette (optional)
          'primary': '#0D47A1', // A deep blue
          'secondary': '#1565C0', // A lighter blue
          'accent': '#FFC107', // A warm accent color
          'light-gray': '#f8f9fa',
          'dark-gray': '#343a40',
        }
      },
    },
    plugins: [],
  }
  