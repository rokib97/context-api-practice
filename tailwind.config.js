/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#cea6ed",

          secondary: "#f46ee7",

          accent: "#f2d176",

          neutral: "#1B1E23",

          "base-100": "#2B2F45",

          info: "#77BDF3",

          success: "#64EDB4",

          warning: "#F1C132",

          error: "#F23A78",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
