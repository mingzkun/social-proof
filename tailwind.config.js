const colors = require("tailwindcss/colors");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    colors: {
      "very-dark-magenta": "hsl(300, 43%, 22%)",
      "soft-pink": "hsl(333, 80%, 67%)",
      "dark-grayish-magenta": "hsl(303, 10%, 53%)",
      "light-grayish-magenta": "hsl(300, 24%, 96%)",
      white: colors.white,
    },
    fontSize: {
      sm: ['13px', '20px'],
      base: ['15px', '24px'],
      '4xl': ['40px','1' ],
      '5xl': ['48px','1' ]

    },
    fontFamily: {
      sans: ["Spartan", "Sans-serif"],
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
