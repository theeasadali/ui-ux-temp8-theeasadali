import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#029FAE",
        "primaryText": "#007580",
        "secondary": "#272343",
        "accentNew": "#01AD5A",
        "accentSales": "#F5813F",
        "overlary": "#000000b3",
        "heading":"#333333",
        "body": "#4F4F4F",
        "card": "#F7F7F7",
        "image": "#BFC6C6",
        "background": "#F0F2F3"
      }
    },
  },
  plugins: [],
};
export default config;
