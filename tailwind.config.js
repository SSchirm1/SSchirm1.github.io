/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        //  Text-c1-c2-c3

        mygreen: "#4abdac",
        myred: "#fc4a1a",
        myyel: "#f7b733",
        mywhite: "#dfdce3",

        papaya: "#e24e42",
        mustard: "#e9b000",
        blush: "#e86e80",
        aqua: "#008f95",
        white: "#fff",
        black: "#333",

        cyan: "#08D9D6",
        dark: "#252A34",
        red: "#FF2E63",
        gray: "#EAEAEA",
      },
      height: {
        120: "30rem",
        160: "40rem",
        200: "50rem",
      },

      width: {
        200: "50rem",
        300: "75rem",
        400: "100rem",
      },
    },
  },

  plugins: [],
};
