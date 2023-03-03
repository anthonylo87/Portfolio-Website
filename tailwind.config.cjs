/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        fadeBorderUp: 'fadeBorderUp 1s ease-in forwards',
        fadeBorderLeft: 'fadeBorderLeft 1s ease-in forwards',
        fadeBorderRight: 'fadeBorderRight 1s ease-in forwards',
        fadeBorderDown: 'fadeBorderDown 1s ease-in forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeBorderUp: {
          '0%': { opacity: 0, transform: 'translateY(5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeBorderLeft: {
          '0%': { opacity: 0, transform: 'translateX(-5rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeBorderRight: {
          '0%': { opacity: 0, transform: 'translateX(5rem)' },
          '100%': { opacity: 1, transform: 'translateX(0rem)' },
        },
        fadeBorderDown: {
          '0%': { opacity: 0, transform: 'translateY(-5rem)' },
          '100%': { opacity: 1, transform: 'translateY(0rem)' },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-10deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
        },
      },
      variants: {
        animation: ['motion-safe'],
      },
      colors: {
        raffia: {
          50: '#FEFDFB',
          100: '#FDFBF8',
          200: '#FAF5EC',
          300: '#F7EFE1',
          400: '#F0E3CB',
          500: '#EAD7B4',
          600: '#D3C2A2',
          700: '#8C816C',
          800: '#696151',
          900: '#464136',
        },

        'outer-space': {
          50: '#F5F5F5',
          100: '#EBEBEC',
          200: '#CCCECF',
          300: '#ADB0B2',
          400: '#707579',
          500: '#323A3F',
          600: '#2D3439',
          700: '#1E2326',
          800: '#171A1C',
          900: '#0F1113',
        },

        nepal: {
          50: '#F9FBFD',
          100: '#F3F8FA',
          200: '#E2ECF3',
          300: '#D1E1EC',
          400: '#AECBDE',
          500: '#8BB4D0',
          600: '#7DA2BB',
          700: '#536C7D',
          800: '#3F515E',
          900: '#2A363E',
        },

        beaver: {
          50: '#F9F8F7',
          100: '#F4F1EE',
          200: '#E3DBD6',
          300: '#D2C6BD',
          400: '#B09B8B',
          500: '#8E7059',
          600: '#806550',
          700: '#554335',
          800: '#403228',
          900: '#2B221B',
        },
      },
    },
  },
  plugins: [require('./plugins/animationDelay.cjs')],
};
