/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#1f1f21",
      secondary: "#fefefe",
      bgcolor: "#2ae98d",
      line: "#808082", 
      white: "#FCFCFC",
      offwhite: "#bfbfbf",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// darkMode: false, // or 'media' or 'class'
