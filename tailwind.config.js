/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "store-red": "#950E1D",
        "store-pink": "#FBACB5" 
      },
      textColor: {
        "pink": "#FF96A2",
        "red": "#950E1D"
      },
      width: {
        "store-user": "1296px",
        "store-colum": "1440px"
      },
      height: {
        "store-user": "100px",
      }
    },
  },
  plugins: [],
}

