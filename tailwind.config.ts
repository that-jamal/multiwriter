import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Cyber', 'sans-serif']
      },
      clipPath: {
        customClip: 'polygon(-10% -10%, 120% -10%, 120% 120%, 35px 70px, -30px 5px)',
      },
      backgroundImage: {
        "tech": "url('https://t4.ftcdn.net/jpg/02/87/98/41/240_F_287984109_irUO2tGLLN9nLrzAEFxyWaHTo0HP6qTe.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
