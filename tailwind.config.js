/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    container: { center: true, padding: '1.5rem' },
    extend: {
      colors: {
        mz: {
          navy: '#04163a',
          teal: '#2b7a78',
          cyan: '#6bcfcf',
          bg: '#f4f7f8',
          card: '#ffffff',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease 0.1s both',
      },
    },
  },
  plugins: [],
};
