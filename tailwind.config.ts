import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/elements/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/utils/**/*.{js,ts,jsx,tsx,md}"
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
        fiery_red: "#FF3939",
        github: "#1A1A1A",
        twitter: "#43B7E9",
        linkedin: "#2D68FF",
        youtube: "#EE3939",
        facebook: "#2442AC",
        twitch: "#EE3FC8",
        devto: "#333333",
        codewars: "#8A1A50",
        freecodecamp: "#302267",
        gitlab: "#EB4925",
        hashnode: "#0330D1",
        stackoverflow: "#EC7100"
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
