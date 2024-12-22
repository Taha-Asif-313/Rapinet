/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#00a3de"
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 2s ease-in-out forwards',
        'spin-slow': 'spin 4s linear infinite',
        'wipe-horizontal': 'wipeHorizontal 0.5s ease-in-out forwards',
      },
      backgroundImage: {
        'gradient-primary-black': 'linear-gradient(145deg, #000, #00a3de)',
      },
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
          
        },
        wipeHorizontal: {
          '0%': { transform: 'translateX(-100%)' }, // Starts off-screen on the top
          '100%': { transform: 'translateX(0)' },   // Ends fully in view
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-50px)' },
        },
      },
    },
  },
  plugins: [],
}

