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
      backgroundImage: {
        'saujana': 'url("../public/saujana_bg.svg")',
        'nilanka': 'url("../public/nilanka_bg.svg")',
        'arunika': 'url("../public/arunika_bg.svg")',
        'lakonna': 'url("../public/lakonna_bg.svg")',
        'nirwata': 'url("../public/nirwata_bg.svg")',
        'nilam': 'url("../public/nilam_bg.svg")',
        'angkara': 'url("../public/angkara_bg.svg")',
      }
    },
  },
  plugins: [],
};
export default config;
