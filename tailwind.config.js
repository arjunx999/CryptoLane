/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        archivoBlack: ['Archivo Black', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        slabo: ['"Slabo 27px"', 'serif'],
      },
      fontWeight: {
        'mediumsemi': 520, // Adjust this value as needed
      },
      fontSize: {
        'xxs': '0.625rem', // Custom size: 0.625rem is approximately 10px
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #F2E3E0, #BFD8EA)',
        'gradient-custom2': 'linear-gradient(135deg, #E0D1CC, #A1C3D9)',
      },
    },
  },
  plugins: [],
}

