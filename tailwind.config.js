/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        'full-height': 'calc(100vh - 2rem)',
      },
    },
    screens:{
      'xl': {'max': '1200px'},
      'lg': {'max': '900px'},
      'md': {'max': '700px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '390px'},
    
    }
  },
  plugins: [],
}
