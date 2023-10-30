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
        header: "#E8C67A",
        body: "#1E1E1E",
      },
      fontFamily: {
        gyahegi: ["var(--font-gyahegi)", "serif"],
      },
      backgroundImage: {
        'navbar-gradient':'linear-gradient(90deg,rgba(255,255,255,0.60) 0%,rgba(255,255,255,0.15) 101.64%)',
        'saujana': 'url("../public/saujana_bg.svg")',
        'nilanka': 'url("../public/nilanka_bg.svg")',
        'arunika': 'url("../public/arunika_bg.svg")',
        'lakonna': 'url("../public/lakonna_bg.svg")',
        'nirwata': 'url("../public/nirwata_bg.svg")',
        'nilam': 'url("../public/nilam_bg.svg")',
        'angkara': 'url("../public/angkara_bg.svg")',
      },
      boxShadow: {
        'small': '0px 5px 50px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
