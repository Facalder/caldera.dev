/** @type {import('tailwindcss').Config} */

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

      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1': {
              fontSize: '24px',
              fontWeight: '500',
              color: theme('colors.gray.800'),
            },
            'h2': {
              fontSize: '20px',
              fontWeight: '600',
              color: theme('colors.gray.800'),
            },
            'h3': {
              fontSize: '18px',
              fontWeight: '600',
              color: theme('colors.gray.800'),
            },
            'p': {
              fontSize: '16px',
              fontWeight: '400',
              color: theme('colors.gray.600'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.800'),
            },
            'pre': {
              backgroundColor: theme('colors.gray.800'),
            },
            'code': {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.5rem',
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
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            'strong': { color: theme('colors.gray.600') },
            'blockquote': {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('preline/plugin'), require('@tailwindcss/typography')],
}
