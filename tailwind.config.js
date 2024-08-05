/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "main-bg":"url('/main_bg.jpg')",
        "my-image":"url('/blue_img.jpg')",
      } 
    },
  },
  plugins: [],
}