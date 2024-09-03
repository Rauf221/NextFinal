import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      animation: {
        'fade-in_1s_ease-in-out': 'fade-in 1s ease-in-out',
        'fade-in-down_1s_ease-in-out': 'fade-in-down 1s ease-in-out',
        'fade-in-up_1s_ease-in-out': 'fade-in-up 1s ease-in-out',
        'fade-in-right_1s_ease-in-out': 'fade-in-right 1s ease-in-out',
        'fade-in-left_1s_ease-in-out': 'fade-in-left 1s ease-in-out',
      },
      
    },
  },
    plugins: [ 
    
  ],
};
export default config;
