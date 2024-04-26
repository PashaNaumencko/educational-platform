const { nextui } = require('@nextui-org/react');
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const sharedConfig = require('@repo/tailwind-config');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        // .. rest of the colors
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        lexend: ['var(--font-lexend)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
    }),
    plugin(({ addComponents }) => {
      addComponents({
        '.typography-h1': {
          '@apply text-[38px] font-semibold leading-[48px] font-inter': '',
        },

        '.typography-h2': {
          '@apply text-[32px] font-semibold leading-[42px] font-inter': '',
        },

        '.typography-h3': {
          '@apply text-[22px] font-semibold leading-[30px] font-inter': '',
        },

        '.typography-h4': {
          '@apply text-[18px] font-semibold leading-[24px] font-inter': '',
        },

        '.typography-h5': {
          '@apply text-[16px] font-semibold leading-[22px] font-inter': '',
        },

        '.typography-body1': {
          '@apply text-[16px] font-normal leading-[22px] font-lexend': '',
        },

        '.typography-body2': {
          '@apply text-[16px] font-normal leading-[22px] font-lexend': '',
        },

        // ...rest of your typography
      });
    }),
  ],
  presets: [sharedConfig],
};
