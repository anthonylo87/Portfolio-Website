/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
  plugins: [],
};
