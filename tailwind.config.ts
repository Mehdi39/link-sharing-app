import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        electric_indigo: "#633CFF",
        lavender_mist: "#BEADFF",
        soft_lilac: "#EFE8FF",
        charcoal_black: "#333333",
        graphite_gray: "#737373",
        cloudy_silver: "#D9D9D9",
        frost_white: "#FAFAFA",
        pure_white: "#FFFFFF",
        fiery_red: "#FF3939"
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      fontSize: {
        'heading-m': '32px',
        'heading-s': '16px',
        'body-m': '16px',
        'body-s': '12px',
      },
      lineHeight: {
        relaxed: '1.5',
      },
    },
  },
  plugins: [],
};
export default config;
