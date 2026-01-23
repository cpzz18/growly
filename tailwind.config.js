/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        // Balanced Dark Blue Theme
        slate: {
          950: '#0f172a',  // Main dark blue
          900: '#1e293b',  // Soft dark blue
          850: '#1a2332',  // Card background
          800: '#334155',  // Border
          700: '#475569',
          600: '#64748b',
          500: '#94a3b8',
          400: '#cbd5e1',
          300: '#e2e8f0',
          200: '#f1f5f9',
        },
        accent: {
          cyan: '#22d3ee',      // Cyan
          blue: '#3b82f6',      // Blue
          'blue-light': '#60a5fa',
        }
      },
      boxShadow: {
        'glow-cyan-sm': '0 0 12px rgba(34, 211, 238, 0.25)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3)',
        'glow-blue-sm': '0 0 12px rgba(59, 130, 246, 0.2)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.25)',
        'elegant': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'elegant-lg': '0 4px 16px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}