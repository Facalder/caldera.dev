/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },

      colors: {
        primary: colors.yellow,
        gray: colors.slate,
      },

      fontFamily: {
        // eslint-disable-next-line prettier/prettier
        DMSans: ['DM Sans', 'sans-serif'],
        // eslint-disable-next-line prettier/prettier
        BeVietnamPro: ['Be Vietnam Pro', 'sans-serif'],
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            'color': theme('colors.gray.700'),
            'a': {
              'color': theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
              'code': { color: theme('colors.primary.400') },
            },
            'p': {
              marginTop: '6px',
              marginBottom: '6px',
            },
            'h1': {
              fontWeight: '800',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
              marginTop: '24px',
              marginBottom: '4px',
              fontSize: '30px',
            },
            'h2': {
              fontWeight: '800',
              color: theme('colors.gray.800'),
              marginBottom: '4px',
              marginTop: '24px',
            },
            'h3': {
              fontWeight: '800',
              color: theme('colors.gray.800'),
              marginBottom: '4px',
              marginTop: '24px',
            },
            'h4,h5,h6': {
              color: theme('colors.gray.700'),
              marginBottom: '4px',
              marginTop: '24px',
            },
            'pre': {
              backgroundColor: theme('colors.gray.800'),
            },
            'code': {
              color: theme('colors.yellow.600'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'details': {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'hr': { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.800'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.800'),
            },
            'strong': { color: theme('colors.gray.600') },
            'blockquote': {
              color: theme('colors.gray.900'),
              borderLeftWidth: '2px',
              borderLeftColor: theme('colors.yellow.600'),
              fontStyle: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [require('preline/plugin'), require('@tailwindcss/typography')],
}
