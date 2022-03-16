module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 300px) { ... }

      md: "350px",
      // => @media (min-width: 500px) { ... }

      lg: "410px",

      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Magenda: "Magenda",
        Coto: "Coto",
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
