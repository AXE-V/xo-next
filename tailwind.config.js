import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        appearance: 'appearance 150ms ease-out normal forwards',
        disappearance: 'disappearance 150ms ease-in normal forwards',
        running1: 'running1 5s linear infinite',
        running2: 'running2 5s linear infinite',
      },
      keyframes: {
        appearance: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.95)',
          },
          '60%': {
            opacity: 0.75,
            'backface-visibility': 'hidden',
            'webkit-font-smoothing': 'antialiased',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        disappearance: {
          '0%': { opacity: 1, transform: 'translateZ(0) scale(1)' },
          '100%': { opacity: 0, transform: ' transform: scale(0.85);' },
        },
        running1: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        running2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      width: {
        400: '400px',
      },
    },
  },
  darkMode: 'class',
  //

  //
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: {
              100: '#252322',
            },
            secondary: {
              DEFAULT: '#403d39',
              50: 'yellow',
            },
          },
        },
        dark: {
          colors: {
            danger: {
              DEFAULT: '#e63946',
            },
            background: {
              DEFAULT: '#1B1818',
              50: '#403d39',
              100: '#252322',
              200: '#191515',
            },
            foreground: {
              // bg text
              DEFAULT: '#ccc5b9',
              // color text
              50: '#8C867D',
            },
            primary: {
              DEFAULT: '#ccc5b9',
            },
            secondary: {
              DEFAULT: '#eb5e28',
              // bg input
              50: '#ccc5b9',
              // hover:bg input
              100: '#ccc5b9EE',
            },
            default: {},
            // bg card
            content1: '#1B1818',
            // content2: 'red',
            // content3: 'green',
            // content4: 'blue',
          },
        },
        // ocean: {},
      },
    }),
  ],
};
