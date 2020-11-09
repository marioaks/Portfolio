import { theme } from 'twin.macro';
import Constants from "../constants";

export default {
	"html, body": {
	    height: "100%"
	},
	body: {
		backgroundColor: Constants.backgroundColor,
		margin: 0,
		overscrollBehavior: 'none',
		color: theme('colors.gray.dark')
	},
	[`@media only screen and (max-width: ${theme('screens.xs.max')})`]: { 
		html: { fontSize: theme('fontSize.baseScale.xs') },
	},
	[`@media only screen and (min-width: ${theme('screens.sm.min')})`]: { 
		html: { fontSize: theme('fontSize.baseScale.sm') }
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
	},
	"#projects-wrapper": { 
		'pointerEvents': 'none',
		'& .project': {
			filter: 'none',
			pointerEvents: 'auto',
			'& > div': {
				transition: 'filter 300ms, opacity 300ms',
			},
			
			// transition: '300ms opacity, 300ms transform',
			// backgroundImage: "url('http://blud.life/wp-content/uploads/2015/10/velvetu.jpg')",
			// backgroundSize: "85%",
		    // backgroundPosition: "center",
		    // backgroundRepeat: "no-repeat",
		    cursor: 'pointer',
		    // '& h2': {
		    // 	padding: `0 ${15/2}%`,
	    	// 	transition: '300ms opacity, 300ms transform',
		    // 	// opacity: 0,
		    // 	transform: 'translateY(-15%)',
		    // 	pointerEvents: 'none',
		    // 	color: theme('colors.primary.default')
		    // },
		    // '& svg': {
		    // 	overflow: 'visible',
		    // 	
		    // }
		    "& h2": {
		    	zIndex: 20,
		    	transform: 'translateY(-30px)',
		    	transition: '300ms opacity, 300ms transform'
		    }
		    
		},

		'&:hover': {
			zIndex: 100,
			'& .project': {
				'& > div': {
					filter: "none",
					// opacity: ".03 !important",
				},

				'&:hover': {
					'& > div': {
					  filter: "brightness(.6)",
					  opacity: "1 !important",
					},
				  
				  	"& h2": {
				  		opacity: "1 !important",
				  		transform: `translateY(0%)`
				  	}
				  // '& h2': {
				  //   	opacity: 1,
				  //   	transform: `translateY(-15%)`
				  //   },
				}
				
			}
		},
	}
}






// 	".particles": {
// 		'pointerEvents': 'none',
// 		'& > .particle': {
// 			pointerEvents: 'auto',
// 			transition: '300ms opacity',
// 			backgroundImage: "url('http://blud.life/wp-content/uploads/2015/10/velvetu.jpg')",
// 			backgroundSize: "85%",
// 		    backgroundPosition: "center",
// 		    backgroundRepeat: "no-repeat",
// 		    cursor: 'pointer',
// 		    '& h2': {
// 		    	padding: `0 ${15/2}%`,
// 	    		transition: '300ms opacity, 300ms transform',
// 		    	// opacity: 0,
// 		    	transform: 'translateY(-15%)',
// 		    	pointerEvents: 'none',
// 		    	color: theme('colors.primary.default')
// 		    },
// 		    // '& svg': {
// 		    // 	overflow: 'visible',
// 		    // 	
// 		    // }
// 		    
// 		},
// 
// 		'&:hover': {
// 			'& > .particle': {
// 				opacity: ".1 !important",
// 
// 				'&:hover': {
// 				  opacity: "1 !important",
// 				  '& h2': {
// 				    	opacity: 1,
// 				    	transform: `translateY(-15%)`
// 				    },
// 				}
// 			}
// 		},
// 
// // 		'&:hover > svg': {
// // 			opacity: 0.4,
// // 
// // 			'&:hover': {
// // 			  
// // 			  "& text": {
// // 	    			opacity: 1
// // 	    		}
// // 			}
// // 		}
// 	}
	// ".particle": {
	// 	backgroundImage: "url('http://blud.life/wp-content/uploads/2015/10/velvetu.jpg')",
	// 	backgroundSize: "85%",
	//     backgroundPosition: "center",
	//     backgroundRepeat: "no-repeat",
	//     transition: ".1s opacity",
	//     cursor: 'pointer',
	//     opacity: 0,
	//     "&:hover": {
	//     	opacity: 1,
	//     	"& text": {
 //    			opacity: 1
 //    		}
	//     },
	//     "& svg": {
	//     	overflow: 'visible',
	//     	"& text": {
	//     		opacity: 0
	//     	}
	//     }
	//     // opacity: .5,
	//     // "&:hover": {
	//     // 	opacity: ".5 !important"
	//     // }
	// }
// }