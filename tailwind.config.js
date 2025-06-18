/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      container: {
  			center: true,
  			screens: {
  				sm: '100%',
  				md: '640px',
  				lg: '768px',
  				xl: '1024px',
  				'2xl': '1440px'
  			}
    },
    fontFamily: {
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  },
  plugins: [],
}