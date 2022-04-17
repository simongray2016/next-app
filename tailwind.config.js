module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(111.03deg, #E200BC -6.54%, #FF0000 78.91%, #F70032 78.91%)",
        "gradient-secondary":
          "linear-gradient(105.77deg, #E200BC -6.29%, #F70032 122.11%, #FF0000 122.11%)",
      },
      colors: {
        primary: "#FF0000",
        "primary-green": "#36B37E",
        "primary-black": "#33373A",
        "primary-grey": "#8F8F8F",
        "jugnle-green": "#16C0B7",
      },
      fontSize: {
        "heading-1": ["48px", { lineHeight: "54px" }],
        "heading-2": ["44px", { lineHeight: "50px" }],
        "heading-3": ["30px", { lineHeight: "36px" }],
        "heading-4": ["22px", { lineHeight: "28px" }],
        "body-1": ["16px", { lineHeight: "22px" }],
        "body-2": ["14px", { lineHeight: "20px" }],
        "body-3": ["12px", { lineHeight: "18px" }],
      },
      borderRadius: {
        button: "10px",
      },
    },
  },
  plugins: [],
};
