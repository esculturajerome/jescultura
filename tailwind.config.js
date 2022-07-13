/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile-bg": "url('/images/profile.jpeg')",
      },
      colors: {
        mainColor: "#48ba86",
        textMain: "#2f2f2f",
      },
      fontFamily: {
        Lora: ["Lora", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
