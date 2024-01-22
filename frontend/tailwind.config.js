const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        FFA500: "#FFA500",
        FAFA33: "#FAFA33",
        C8C8C8: "#C8C8C8",
      },
      maxWidth: {
        default: "1280px",
      },
      backgroundImage: {
        wave: "url('/wave.png')",
        linearLine:
          "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.31) 123.02%)",
      },
      borderRadius: {
        20: "20px",
        30: "30px",
      },
      boxShadow: {
        contact: "0px 69px 114px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        poppins: "var(--poppins-font)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        h1: {
          fontSize: theme("fontSize.5xl"),
          lineHeight: theme("lineHeight.tight"),
          "@screen md": {
            fontSize: theme("fontSize.6xl"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.7xl"),
          },
        },
        ".h1": {
          fontSize: theme("fontSize.5xl"),
          lineHeight: theme("lineHeight.tight"),
          "@screen md": {
            fontSize: theme("fontSize.7xl"),
          },
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          lineHeight: 1,
          "@screen md": {
            fontSize: theme("fontSize.5xl"),
          },
        },
        ".h2": {
          fontSize: theme("fontSize.3xl"),
          lineHeight: 1.1,
          "@screen md": {
            fontSize: theme("fontSize.5xl"),
          },
        },
        ".section": {
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
          "@screen sm": {
            padding: "0 30px",
          },
        },
        ".container": {
          maxWidth: theme("maxWidth.default"),
        },
        ".formfield": {
          width: "100%",
          padding: "12px",
          border: "1px solid #C8C8C8",
          borderRadius: "15px",
          "@screen xl": {
            width: "400px",
          },
        },
      });
    }),
  ],
};

//sm	640px
//md  768px
//lg  1024px
//xl  1280px
//2xl 1536px
