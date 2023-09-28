module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    theme: {
      extend: {
        // Add your custom styles here
        placeholderColor: {
          red: "red",
        },
      },
    },
    plugins: [],
  },
};
  