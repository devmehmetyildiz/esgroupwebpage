/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'hovercolor': '#EA9458',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      animation: {
        'updownanimate': 'moveupdown 3s linear infinite',
      },
      keyframes: {
        moveupdown: {
          '0%': { bottom: '0px' },
          '50%': { bottom: '40px' },
          '100%': { bottom: '0px' }
        }
      }
    },
    plugins: [],
  }
}

