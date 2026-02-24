export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'nutyre-bg': '#FFFFFF',
        'nutyre-bg-secondary': '#F8F9FA',
        'nutyre-yellow': '#FDB913',
        'nutyre-red': '#ff3b3b',
        'nutyre-text': '#1A1A1A',
        'nutyre-text-secondary': '#6B7280',
      },
      fontFamily: {
        'heading': ['sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 2px 12px rgba(251, 185, 19, 0.25)' },
          '50%': { boxShadow: '0 4px 24px rgba(251, 185, 19, 0.5), 0 2px 12px rgba(251, 185, 19, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}