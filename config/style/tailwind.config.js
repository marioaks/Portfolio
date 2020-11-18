const Constants = require("../constants");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],
  theme: {
    screens: {
      xs: {max: `${640 / 16}rem`},
      sm: {min: `${640 / 16}rem`},
      md: {min: `${768 / 16}rem`},
      lg: {min: `${1024 / 16}rem`},
      xl: {min: `${1200 / 16}rem`}
    },
    fontFamily: {
      'header': {
        'serif': 'Tiempos Headline',
        'sans': 'Sohne'
      },
      'body': {
        'serif': 'Tiempos Text',
        'sans': 'Sohne'
      }
    },
    spacing: {
      '0': '0rem',
      xs: '1rem',
      sm: '2rem',
      md: '3rem',
      lg: '4rem',
      xl: '5rem'
    },
    fontSize: {

      'baseScale': {
        xs: `70%`,
        sm: `70%`,
        md: `85%`,
        lg: `100%` //base 16px font-size
      },
      header: {
        1: `${100 / 16}rem`, //sm: 70px, md: 85px, lg: 100px
        2: `${42 / 16}rem`, 
        3: `${28 / 16}rem`, 
        4: `${28 / 16}rem`, 
        5: `${22 / 16}rem`, 
        6: `${16 / 16}rem`, 
        '1xs': `${64 / 16}rem`,
        '2xs': `${42 / 16}rem`
      },
      body: {
        1: `${20 / 16}rem`,
        2: `${20 / 16}rem`,
        quote: `${21 / 16}rem`,
        imageCaption: `${14 / 16}rem`,
      }
    },
    fontWeight: {
      bold: '700',
      regular: '400',
      light: '300',
      header: {
        1: '300',
        2: '300',
        3: '400',
        4: '400',
        5: '300',
        6: '300',
      },
      body: {
        1: '400',
        2: '400',
        quote: '400',
        imageCaption: '400'
      }
    },
    letterSpacing: {
      header: {
        1: `${-0.3 / 16}rem`,
        2: `${0 / 16}rem`,
        3: `${0 / 16}rem`,
        4: `${-0.4 / 16}rem`,
        5: `${0.24 / 16}rem`,
        6: `${0 / 16}rem`,
        '1xs': `${-0.2 / 16}rem`,
        '2xs': `${0.24 / 16}rem`
      },
      body: {
        1: `${0.25 / 16}rem`,
        2: `${0.3 / 16}rem`,
        quote: `${0 / 16}rem`,
        imageCaption: `${0.13 / 16}rem`
      }
    },
    lineHeight: {
      header: {
        1: `${110 / 16}rem`,
        2: `${50 / 16}rem`,
        3: `${28 / 16}rem`,
        4: `${37 / 16}rem`,
        5: `${28 / 16}rem`,
        6: `${21 / 16}rem`,
        '1xs': `${70 / 16}rem`,
        '2xs': `${50 / 16}rem`
      },
      body: {
        1: `${31 / 16}rem`,
        2: `${30 / 16}rem`,
        quote: `${38 / 16}rem`,
        imageCaption: `${20 / 16}rem`
      }
    },
    maxWidth: {},
    colors: {
      'black': 'black',
      'white': 'white',
      'transparent': 'transparent',
      'background': Constants.backgroundColor,
      'darkBackground': Constants.darkBackgroundColor,
      'primary': '#0051F2',
      'secondary': '#ffa410',
      'gray': {
        'dark': 'rgba(34,34,34,1)',
        'midDark': 'rgba(34,34,34,.8)',
        'mid': 'rgba(34,34,34,.6)',
        'light': 'rgba(34,34,34,.15)',
        'xlight': 'rgba(34,34,34,.05)'
      }
    },
    borderWidth: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px'
    },
    extend: {
      margin: {
        header: {
          1: `${22 / 16}rem`,
          2: `${60 / 16}rem`,
          3: `${22 / 16}rem`,
          4: `${22 / 16}rem`,
          5: `${28 / 16}rem`,
          6: `${18 / 16}rem`,
          '1xs': `${14 / 16}rem`,
          '2xs': `${48 / 16}rem`,
        },
        body: {
          1: `${22 / 16}rem`,
          2: `${30 / 16}rem`,
          quote: `${40 / 16}rem`,
          imageCaption: `${28 / 16}rem`
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-multi-column')(),
  ]
}