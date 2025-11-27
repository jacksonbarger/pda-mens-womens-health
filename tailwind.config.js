/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Medical-Academic Winter Palette
        pda: {
          // Deep Forest Greens - Professional, scholarly
          forest: {
            50: '#f0f7f4',
            100: '#d9ebe3',
            200: '#b3d7c7',
            300: '#8cc3ab',
            400: '#66af8f',
            500: '#2d5f4e', // Main forest green
            600: '#254c3e',
            700: '#1d392f',
            800: '#15261f',
            900: '#0d1310',
          },
          // Winter Blues - Cool, academic, trustworthy
          winter: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0891b2', // Main winter blue
            600: '#0e7490',
            700: '#155e75',
            800: '#164e63',
            900: '#14404d',
          },
          // Cranberry Red - Medical, sophisticated
          cranberry: {
            50: '#fdf2f4',
            100: '#fbe8ec',
            200: '#f8d0d9',
            300: '#f1a8b8',
            400: '#e87d93',
            500: '#b91c41', // Main cranberry
            600: '#9d1737',
            700: '#7e122d',
            800: '#640f24',
            900: '#4a0b1a',
          },
          // Parchment - Warm, scholarly
          parchment: {
            50: '#fdfbf7',
            100: '#f9f4e8',
            200: '#f3e8d0',
            300: '#ead5a8',
            400: '#ddbf80',
            500: '#c4a568', // Main parchment
            600: '#a88b56',
            700: '#8a7045',
            800: '#6d5735',
            900: '#4f3e26',
          },
          // Soft Blue-Gray - Primary text and UI elements
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          // Gold Accents - Highlights and achievements
          gold: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#d4af37', // Professional gold
            600: '#b8941f',
            700: '#997818',
            800: '#7a5f13',
            900: '#5c470e',
          },
        },
      },
      fontFamily: {
        // Professional typography
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' },
        },
      },
      backgroundImage: {
        'winter-gradient': 'linear-gradient(135deg, #f0f9ff 0%, #fdfbf7 100%)',
        'forest-gradient': 'linear-gradient(135deg, #2d5f4e 0%, #0891b2 100%)',
        'parchment-texture': 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.05\' /%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
