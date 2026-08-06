/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        stone: "#EDEAE3",
        stone2: "#E2DFD6",
        cream: "#F7F5F0",
        ink: "#111111",
        orange: "#FF6A1A",
        orange2: "#FF8F4D",
        maroon: "#6E1E1E",
        line: "rgba(17,17,17,0.10)",
        linesoft: "rgba(17,17,17,0.06)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0) rotate(var(--tilt,0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--tilt,0deg))" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse2: {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        wheelSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeup: "fadeup 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        floatY: "floatY 5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        wheelSpin: "wheelSpin 3s linear infinite",
      },
    },
  },
  plugins: [],
};

