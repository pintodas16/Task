/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-one":
          "linear-gradient(to left, white 50%, transparent 50%), url('./image/hero-one.png')",
        "custom-gradient": "linear-gradient( #241457 100%, #4F2BBD 100% )",
        "custom-gradient-two":
          "linear-gradient(140deg, #160A3A, #241846,#9506FF)",
      },

      fontSize: {
        logo: ["2.125rem", "2.571875rem"], // 34px, 41.5 px
        sss: ["0.875rem", "1.36rem"], //14,21
        link: ["1.125rem", "1.36rem"], //18px , 21px
        button: ["1.25rem", "1.5125rem"], // 20, 24
        p: ["0.875rem", "1.375rem"], // 14px, 22px
        small: ["0.875rem", "1.059"], // 14px, 16.95px
        "extra-small": ["1rem", "1.5rem"], // 16px, 24px
        ss: ["1.155", "1.155"], //"18.49px 18.49px
        sm: ["0.97rem", "1.251875rem"], // 15, 20.33
        "main-heading": ["4.375rem", "5.295rem"], //70,84
        medium: ["1rem", "1.75rem"], // 16px, 28px
        large: ["1.25rem", "1.875rem"], // 20px, 30px
        h4: ["3rem", "4.125rem"], //48, 66
        "tiny-xl": ["1.5rem", "1.875rem"], // 24px , 34px
        h6: ["2.125rem", "1.625rem"], // 34, 26
        h3: ["3.375rem", "4.084375rem"], //54,65
        h5: ["1.5rem", "1.82rem"], // 24, 29
        xl: ["1.25rem", "1.625rem"], // 20, 26
        "heading-six": ["1.125rem", "1.625rem"], // 18px , 28px
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        IBM: ["IBM Plex Sans Condensed", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {},
      gap: {
        3.6: "0.87rem", // 13.5px
        3.75: "0.9375rem", // 15px
        4.25: "1.125rem", //18px
        7.5: "1.875rem", //30px
        8: "2.375rem", //38px
        11.5: "2.8125rem", // 45px
        19: "4.75rem", //76px
      },
      borderRadius: {
        sm: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        // xl: "0.625rem", // 10px
        // "2xl": "0.75rem", // 12px
        // "2.5xl": "0.9375rem", // 15px
        "3xl": "1rem", // 16px
        // "4xl": "1.25rem", // 20px
        "5xl": "1.5rem", // 24px
        // "6.5xl": "1.875rem", // 30px
      },
      boxShadow: {
        "shadow-one": "0px 10px 30px 0px #E5DE3529",
        "shadow-two": "0px 4px 16px -8px #92B6C614",
        "shadow-three": "4px 14px 50px -12px #20353F29",
      },
    },
  },
  plugins: [],
};
