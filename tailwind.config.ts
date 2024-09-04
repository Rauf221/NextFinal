import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Admin/**/*.{js,ts,jsx,tsx,mdx}",
],
   theme: {
    animation: {
      linspin: "linspin 1568.2353ms linear infinite",
      easespin: "easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
      "left-spin":
        "left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
      "right-spin":
        "right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
      "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
      rotating: "rotating 30s linear infinite",
      topbottom: "topbottom 60s infinite alternate linear",
      bottomtop: "bottomtop 60s infinite alternate linear",
      "spin-1.5": "spin 1.5s linear infinite",
      "spin-2": "spin 2s linear infinite",
      "spin-3": "spin 3s linear infinite",
      line1: "line 10s infinite linear",
      line2: "line-revert 8s infinite linear",
      line3: "line 7s infinite linear",
    },
  },
   

  plugins: [],
};
export default config;
