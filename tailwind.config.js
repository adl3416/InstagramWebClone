/** @type {import('tailwindcss').Config} */

const { FaFacebook } = require('react-icons/fa');

module.exports = {
  content: [
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        brand: '#0095f6',
        facebook:'#385185',
        link: '#00376b'
      },
      backgroundImage:{
        'logo-pattern': 'url(https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png )'
      }
    },
  },
  plugins: [],
}