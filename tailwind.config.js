/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "Roboto"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
