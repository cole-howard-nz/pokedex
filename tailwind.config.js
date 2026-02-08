/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        DEFAULT: ['Outfit-Light'],

        outfitLight: ['Outfit-Light'],
        outfitMedium: ['Outfit-Medium'],
        outfitRegular: ['Outfit-Regular'],
        pokemonHollow: ['Pokemon-Hollow'],
        pokemonSolid: ['Pokemon-Solid'],
      }
    },
  },
  plugins: [],
}