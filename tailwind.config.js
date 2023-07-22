/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#A8715A",
      secondary: "#DD8560",
      title: "#000000",
      label: "#555555",
      bgcolor: "#F8F0E7",
      bgcolortwo: "#eef1f7",
      body: "#333333",
      line: "#E0CFBA",
      inputbg: "#F9F9F9",
      offwhite: "#FCFCFC",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// darkMode: false, // or 'media' or 'class'
