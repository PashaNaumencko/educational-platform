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
      fontFamily: {
        rubik: ['var(--font-rubik)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: false,
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#4e61bf',
            secondary: '#64748b',
          },
        },
      },
    }),
    plugin(({ addComponents }) => {
      addComponents({
        '.typography-h1': {
          '@apply text-[38px] font-semibold leading-[48px] font-rubik': '',
        },

        '.typography-h2': {
          '@apply text-[32px] font-semibold leading-[42px] font-rubik': '',
        },

        '.typography-h3': {
          '@apply text-[22px] font-semibold leading-[30px] font-rubik': '',
        },

        '.typography-h4': {
          '@apply text-[18px] font-semibold leading-[24px] font-rubik': '',
        },

        '.typography-h5': {
          '@apply text-[16px] font-semibold leading-[22px] font-rubik': '',
        },

        '.typography-body1': {
          '@apply text-[16px] font-normal leading-[22px] font-rubik': '',
        },

        '.typography-body2': {
          '@apply text-[16px] font-normal leading-[22px] font-rubik': '',
        },

        '.typography-button': {
          '@apply text-[16px] font-medium leading-[24px] font-rubik': '',
        },

        // ...rest of your typography
      });
    }),
  ],
  presets: [sharedConfig],
};
