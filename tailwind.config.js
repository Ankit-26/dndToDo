/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        courier: ["Courier Prime", "monospace"],
      },
      colors: {
        Work: "#daf2d6",
        Study: "#a1c5e8",
        Entertinment: "#fecece",
        Family: "#d1e4f7",
        Other: "#69865d",
        "slate-gray": "#6D6D6D",
      },
    },
  },
  plugins: [],
};
