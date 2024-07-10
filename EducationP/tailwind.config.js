/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customgreen: '#1eb2a6',
        bgwhite: 'rgba(238,238,238,255)',
        ftpara: '#95a8b3',
        bgmain: '#A8CBD1',
        bgfooter : '#E9E9E9',
        navbgcolor : 'rgba(255,255,255,0.2)'
      },
      backgroundImage : {
        'home-banner' : "url('/Education-website/EducationP/src/components/banner/homebanner.jpg')"
      },
      clipPath: {
        'custom-polygon': 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-polygon': {
          'clip-path': 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
        },
      });
    },
  ],
};