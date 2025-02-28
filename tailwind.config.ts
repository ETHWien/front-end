import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropHueRotate: {
        '15': '15deg',
        '30': '30deg',
      },
      backdropSaturate: {
        '110': '1.1',
        '125': '1.25',
      }
    },
  },
  plugins: [],
} satisfies Config;
