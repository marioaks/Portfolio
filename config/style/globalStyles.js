import { theme } from 'twin.macro';

export default {
	"html, body": {
	    height: "100%"
	},
	body: {
		width: '100vw',
		overflowX: 'hidden',
		backgroundColor: theme('colors.background'),
		margin: 0,
		overscrollBehavior: 'none',
		color: theme('colors.gray.dark'),
		"& > div": {
			outline: 'none'
		}
	},
	button: {
		outline: 'none'
	},
	html: {
		'&.dark-mode': {
			'body': {
				backgroundColor: theme('colors.darkBackground'),
				color: `${theme('colors.background')}`,
			},
			'*': {
				borderColor: `${theme('colors.background')}A0 !important`,
			},
			'img:not([src*=".svg"])': {
			  filter: 'grayscale(30%)'
			}
		}
	},
	a: {
	  color: 'inherit',
	},
	[`@media only screen and (max-width: ${theme('screens.xs.max')})`]: { 
		html: { fontSize: theme('fontSize.baseScale.md') },
	},
	[`@media only screen and (min-width: ${theme('screens.sm.min')})`]: { 
		html: { fontSize: theme('fontSize.baseScale.md') }
	},
	[`@media only screen and (min-width: ${theme('screens.md.min')})`]: { 
		html: { fontSize: theme('fontSize.baseScale.md') },
	},
	[`@media only screen and (min-width: ${theme('screens.lg.min')})`]: { 
		html: { fontSize: theme('fontSize.baseScale.lg') },
	},
	"canvas[resize]": {
	    width: '100%',
	    height: '100%'
	}
}