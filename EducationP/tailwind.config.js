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
        bgmain: '#A8CBD1'
      },
    },
  },
  plugins: [],
}