const Constants = require("../Constants");

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
        'serif': ['Tiempos Headline', 'serif'],
        'sans': ['Sohne', 'sans-serif']
      },
      'body': {
        'serif': ['Tiempos Text', 'serif'],
        'sans': ['Sohne', 'sans-serif']
      }
    },
    spacing: {
      '0': '0rem',
      xs: '0.5rem',
      sm: '1rem',
      md: '2rem',
      lg: '3rem',
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
        2: `${52 / 16}rem`, 
        3: `${34 / 16}rem`, 
        4: `${28 / 16}rem`, 
        5: `${22 / 16}rem`, 
        6: `${16 / 16}rem`, 
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
        3: '700',
        4: '400',
        5: '700',
        6: '400'
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
        2: `${0.3 / 16}rem`,
        3: `${0 / 16}rem`,
        4: `${-0.4 / 16}rem`,
        5: `${0.24 / 16}rem`,
        6: `${0.5 / 16}rem`
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
        2: `${56 / 16}rem`,
        3: `${38 / 16}rem`,
        4: `${37 / 16}rem`,
        5: `${34 / 16}rem`,
        6: `${24 / 16}rem`
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
      'primary': {
        lighter: '#64A1FB',
        default: '#0051F2',
        darker: '#002EAE'
      },
      'gray': {
        'dark': 'rgba(34,34,34,1)',
        'mid': 'rgba(34,34,34,.6)',
        'light': 'rgba(34,34,34,.3)',
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
      paragraphSpacing: {
        header: {
          1: `${22 / 16}rem`,
          2: `${60 / 16}rem`,
          3: `${22 / 16}rem`,
          4: `${22 / 16}rem`,
          5: `${28 / 16}rem`,
          6: `${0 / 16}rem`
        },
        body: {
          1: `${22 / 16}rem`,
          2: `${30 / 16}rem`,
          quote: `${40 / 16}rem`,
          imageCaption: `${28 / 16}rem`
        }
      },
      fontStyle: {
        header: {
          1: "normal",
          2: "normal",
          3: "normal",
          4: "normal",
          5: "normal",
          6: "normal"
        },
        body: {
          1: "normal",
          2: "normal",
          quote: "italic",
          imageCaption: "normal"
        }
      },
    },
  },
  plugins: [],
  variants: {
    // margin: ({ after }) => after(['last']),
  }
}