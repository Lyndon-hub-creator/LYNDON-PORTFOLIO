/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a26',
          600: '#262633',
          500: '#3a3a4a',
        },
        coral: {
          50: '#fff3ef',
          100: '#ffe2d8',
          200: '#ffc4b0',
          300: '#ff9d7e',
          400: '#ff7a54',
          500: '#f95d33',
          600: '#e8471c',
          700: '#c23815',
          800: '#9a2e15',
          900: '#7d2815',
        },
        cream: {
          50: '#fbfaf8',
          100: '#f5f3ee',
          200: '#e8e4da',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
