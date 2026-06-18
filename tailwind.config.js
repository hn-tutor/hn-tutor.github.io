/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#080B10",
        slate: {
          cyber: "#121721",
          premium: "#1A202C",
          muted: "#94A3B8",
        },
        cyan: {
          tech: "#00E5FF",
        },
        indigo: {
          premium: "#6366F1",
        },
      },
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        'cyber-gradient': "linear-gradient(135deg, #121721 0%, #1A202C 100%)",
      },
    },
  },
  plugins: [],
};