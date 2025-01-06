/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontPoppins:[
          '"Poppins"','serif'
        ]
      },
      backgroundColor:{
        backgroundODD: 'linear-gradient(to right, #a0aec0, #f7fafc)', // From gray-400 to slate-100
        backgroundEVEN: 'linear-gradient(to right, #718096, #f7fafc)', //from gray-500 to slate-100
      }
    },
  },
  plugins: [],
}

