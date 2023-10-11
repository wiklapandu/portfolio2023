/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#EFFBF8',
        secondary: '#A5A6FF',
        dark: '#130F49',
        dark_text: '#130F49',
        dark_text_secondary: '#55527C',
        light_text: '#3dceaa'
      },
      keyframes: {
        galleryOpacity: {
          '0%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '100%'
          }
        },
        navbarSlideOpen: {
          '0%': {
            transform: 'translateX(-100vw)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        navbarSlideClose: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100vw)',
          }
        },
      },
      animation: {
        'galleryOpacity': 'galleryOpacity .5s ease-in-out',
        navbarSlideOpen: 'navbarSlideOpen .9s ease-in-out',
        navbarSlideClose: 'navbarSlideClose .9s ease-in-out',
      }
    },
  },
  plugins: [],
}
