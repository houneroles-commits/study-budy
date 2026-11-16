/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFA',
          100: '#FFFBF5', // main background
          200: '#FFF5E8',
          300: '#FFEED6',
          400: '#FFE4C2',
        },
        sunset: {
          light: '#FFA666',
          DEFAULT: '#FF8A3D', // primary sunset orange
          dark: '#E06B20',
        },
        peach: {
          light: '#FFDAC2',
          DEFAULT: '#FFC8A2',
          dark: '#F5A97A',
        },
        butter: {
          light: '#FFF0C7',
          DEFAULT: '#FFE3A3',
          dark: '#F5CE76',
        },
        blush: {
          light: '#FFE4E4',
          DEFAULT: '#FFD6D6',
          dark: '#F7B7B7',
        },
        terracotta: {
          light: '#EC8B68',
          DEFAULT: '#E0724A',
          dark: '#B8532F',
        },
        sage: {
          light: '#CFE4CB',
          DEFAULT: '#B7D3B0',
          dark: '#8EAE87',
        },
        sky: {
          light: '#E2F1FA',
          DEFAULT: '#CFE6F2',
          dark: '#A6CDE0',
        },
        charcoal: {
          light: '#615454',
          DEFAULT: '#3B2F2F', // main text
          dark: '#241B1B',
        }
      },
      fontFamily: {
        heading: ['Fredoka', 'Baloo 2', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        handwritten: ['Caveat', 'Patrick Hand', 'cursive'],
        display: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(224, 114, 74, 0.08), 0 2px 6px -1px rgba(59, 47, 47, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(255, 138, 61, 0.12), 0 4px 12px -2px rgba(59, 47, 47, 0.06)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(59, 47, 47, 0.04)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
        'petal-fall': 'petalFall 10s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        gentlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.025)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
