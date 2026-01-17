/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'neon-green-dark': '#00cc33',
        'dark-bg': '#000000',
        'dark-gray': '#0a0a0a',
        'light-gray': '#1a1a1a',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px #00ff41, 0 0 20px #00ff41',
        'neon-lg': '0 0 20px #00ff41, 0 0 40px #00ff41',
      },
      textShadow: {
        'neon': '0 0 10px #00ff41, 0 0 20px #00ff41',
        'neon-lg': '0 0 20px #00ff41, 0 0 40px #00ff41',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'hex-float': 'hexFloat 20s linear infinite',
        'progress': 'progress 3s infinite',
      },
      keyframes: {
        hexFloat: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-200px)' },
        },
        progress: {
          '0%': { width: '10%' },
          '50%': { width: '20%' },
          '100%': { width: '10%' },
        },
      },
    },
  },
  plugins: [],
}

