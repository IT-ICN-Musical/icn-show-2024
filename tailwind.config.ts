import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': '#E8C67A',
        'body': '#1E1E1E',
      },
      fontFamily: {
        gyahegi: ["var(--font-gyahegi)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
