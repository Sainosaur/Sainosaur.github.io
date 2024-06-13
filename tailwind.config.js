import daisyUI from "daisyui"

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      themes: ["light", "dark", "black"]
    },
  },
  plugins: [daisyUI],
}

