import { theme } from 'twin.macro';
import Constants from "../Constants";
import { keyframes } from "@emotion/core"

export default {
	body: {
		backgroundColor: Constants.backgroundColor,
		margin: 0,
		overscrollBehavior: 'none'
	},
	'h1': {
		fontFamily: theme`fontFamily.header.serif`,
		fontWeight: theme`fontWeight.header.1`,
		fontStyle: theme`fontStyle.header.1`,
		fontSize: theme`fontSize.header.1`,
		letterSpacing: theme`letterSpacing.header.1`,
		lineHeight: theme`lineHeight.header.1`,
		margin: 0,
		textAlign: "left"
	},
	'h2': {
		fontFamily: theme`fontFamily.header.serif`,
		fontWeight: theme`fontWeight.header.2`,
		fontStyle: theme`fontStyle.header.2`,
		fontSize:  theme`fontSize.header.2`,
		letterSpacing: theme`letterSpacing.header.2`,
		lineHeight: theme`lineHeight.header.2`,
		margin: 0,
		textAlign: "left"
	},
	'h3': {
		fontFamily: theme`fontFamily.header.sans`,
		fontWeight: theme`fontWeight.header.3`,
		fontStyle: theme`fontStyle.header.3`,
		fontSize:  theme`fontSize.header.3`,
		letterSpacing: theme`letterSpacing.header.3`,
		lineHeight: theme`lineHeight.header.3`,
		margin: 0,
		textAlign: "left"
	},
	'h4': {
		fontFamily: theme`fontFamily.body.serif`,
		fontWeight: theme`fontWeight.header.4`,
		fontStyle: theme`fontStyle.header.4`,
		fontSize:  theme`fontSize.header.4`,
		letterSpacing: theme`letterSpacing.header.4`,
		lineHeight: theme`lineHeight.header.4`,
		margin: 0,
		textAlign: "left"
	},
	'h5': {
		fontFamily: theme`fontFamily.header.sans`,
		fontWeight: theme`fontWeight.header.5`,
		fontStyle: theme`fontStyle.header.5`,
		fontSize:  theme`fontSize.header.5`,
		letterSpacing: theme`letterSpacing.header.5`,
		lineHeight: theme`lineHeight.header.5`,
		margin: 0,
		textAlign: "left"
	},
	'h6': {
		fontFamily: theme`fontFamily.header.sans`,
		fontWeight: theme`fontWeight.header.6`,
		fontStyle: theme`fontStyle.header.6`,
		fontSize:  theme`fontSize.header.6`,
		letterSpacing: theme`letterSpacing.header.6`,
		lineHeight: theme`lineHeight.header.6`,
		margin: 0,
		textAlign: "left"
	},
	'p': {
		fontFamily: theme`fontFamily.body.serif`,
		fontWeight: theme`fontWeight.body.1`,
		fontStyle: theme`fontStyle.body.1`,
		fontSize:  theme`fontSize.body.1`,
		letterSpacing: theme`letterSpacing.body.1`,
		lineHeight: theme`lineHeight.body.1`,
		margin: 0,
		textAlign: "left"

	},
	'p.info': {
		fontFamily: theme`fontFamily.body.sans`,
		fontWeight: theme`fontWeight.body.2`,
		fontStyle: theme`fontStyle.body.2`,
		fontSize:  theme`fontSize.body.2`,
		letterSpacing: theme`letterSpacing.body.2`,
		lineHeight: theme`lineHeight.body.2`,
		margin: 0,
		textAlign: "left"
	}, 
	'p.quote': {
		fontFamily: theme`fontFamily.body.serif`,
		fontWeight: theme`fontWeight.body.quote`,
		fontStyle: theme`fontStyle.body.quote`,
		fontSize:  theme`fontSize.body.quote`,
		letterSpacing: theme`letterSpacing.body.quote`,
		lineHeight: theme`lineHeight.body.quote`,
		margin: 0,
		textAlign: "left"
	},
	'p.caption': {
		fontFamily: theme`fontFamily.body.serif`,
		fontWeight: theme`fontWeight.body.imageCaption`,
		fontStyle: theme`fontStyle.body.imageCaption`,
		fontSize:  theme`fontSize.body.imageCaption`,
		letterSpacing: theme`letterSpacing.body.imageCaption`,
		lineHeight: theme`lineHeight.body.imageCaption`,
		margin: 0,
		textAlign: "center"
	},

	//paragraph spacing
	"h1.paragraph": { marginBottom: theme`paragraphSpacing.header.1` },
	"h2.paragraph": { marginBottom: theme`paragraphSpacing.header.2` },
	"h3.paragraph": { marginBottom: theme`paragraphSpacing.header.3` },
	"h4.paragraph": { marginBottom: theme`paragraphSpacing.header.4` },
	"h5.paragraph": { marginBottom: theme`paragraphSpacing.header.5` },
	"h6.paragraph": { marginBottom: theme`paragraphSpacing.header.6` },
	"p.paragraph": { marginBottom: theme`paragraphSpacing.body.1` },
	"p.info.paragraph": { marginBottom: theme`paragraphSpacing.body.2` },
	"p.quote.paragraph": { marginBottom: theme`paragraphSpacing.body.quote` },
	"p.caption.paragraph": { marginBottom: theme`paragraphSpacing.body.imageCaption` },

	[`@media only screen and (max-width: ${theme('screens.xs.max')})`]: { 
		html: { fontSize: theme`fontSize.baseScale.xs` },
		'h1': {
			fontSize: '4rem',
			letterSpacing: '-0.012rem',
			lineHeight: '4.4rem',
			margin: 0,
		},
		'h2': {
			fontSize:  '2.6rem',
			letterSpacing: '.015rem',
			lineHeight: '3.3rem',
			margin: 0	
		},
		'h1.paragraph': { marginBottom: "0.88rem" },
		'h2.paragraph': { marginBottom: "3.0rem" }
	},
	[`@media only screen and (min-width: ${theme('screens.sm.min')})`]: { 
		html: { fontSize: theme`fontSize.baseScale.sm` }
	},
	[`@media only screen and (min-width: ${theme('screens.md.min')})`]: { 
		html: { fontSize: theme`fontSize.baseScale.md` },
	},
	[`@media only screen and (min-width: ${theme('screens.lg.min')})`]: { 
		html: { fontSize: theme`fontSize.baseScale.lg` },
	},

	// "a:hover": {
	// 	backgroundPosition: '100% 100%',
	// 	color: theme('colors.gray.dark'),
	// 	"backgroundSize": "100% 100%",
	//     backgroundImage: `linear-gradient(#ffd17d, #ffd17d)`,
	//     // boxShadow: "0 0 0 4px #ffd17d"
	// },
	// "a": {
	//   cursor: 'pointer',
	//   textDecoration: 'none',
	//   backgroundImage: `linear-gradient(${theme('colors.primary.default')}, ${theme('colors.primary.default')})`,
	//   backgroundPosition: '0% 100%',
	//   backgroundRepeat: 'no-repeat',
	//   backgroundSize: '100% .125rem',
	//   // boxShadow: "0 0 0 #ffd17d",
	//   // animationDirection: "alternate",
	//   transition: "background-position .3s, background-size .3s, box-shadow .4s linear .1s"
	// }
}