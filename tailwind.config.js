/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
  
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      body: ["Pathway Gothic One"]
    },
    extend: {},
      backgroundSize: {
      'size-200': '200% 200%',
    },
      backgroundPosition: {
      'pos-0': '0% 0%',
      'pos-100': '100% 100%',
    },
  },
  plugins: [],
}

