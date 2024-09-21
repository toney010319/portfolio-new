/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
  
    extend: {
      transitionTimingFunction: {
        slow: "cubic-bezier(.405, 0, .025, 1)",
        "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
     },
     
      boxShadow: {
        "custom-shadow": "1.5px 3px 24.5px 3px #33f0ff",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "translateY(-20%) translateX(-50%)" },
          "100%": { transform: "translateY(300%) translateX(-50%)" },
        },
        "trail": {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
      },
      animation: {
        meteor: "meteor var(--duration) var(--delay) ease-in-out infinite",
        "trail": "trail var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
};
