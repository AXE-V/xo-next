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
        running1: 'running1 5s linear infinite',
        running2: 'running2 5s linear infinite',
      },
      keyframes: {
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
        // 400: '400px',
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
              50: '#262221',
              100: '#1E1A1A',
              200: '#191515',
            },
            foreground: {
              DEFAULT: '#ccc5b9',
              50: '#8C867D',
            },
            primary: {
              DEFAULT: '#ccc5b9',
            },
            secondary: {
              DEFAULT: '#eb5e28',
              50: '#ccc5b9',
              100: '#ccc5b9EE',
            },
            default: {
              DEFAULT: '#403d39',
              100: '#252322',
            },
            content1: '#1B1818',
          },
        },
        // ocean: {},
      },
    }),
  ],
};
