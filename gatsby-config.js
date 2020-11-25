const urljoin = require('url-join');
const path = require('path');
const Constants = require('./config/constants');

module.exports = {
	pathPrefix: Constants.pathPrefix === '' ? '/' : Constants.pathPrefix,
	siteMetadata: {
		siteUrl: urljoin(Constants.siteUrl, Constants.pathPrefix)
	},
	plugins: [
		'gatsby-plugin-lodash',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-remark-images',
		'gatsby-transformer-sharp',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-advanced-sitemap',
		{
	      resolve: `gatsby-plugin-emotion`,
	      options: {
	        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
	        // The values for each key in this example are the defaults the plugin uses.
	        sourceMap: true,
	        autoLabel: "dev-only",
	        labelFormat: `[local]`,
	        cssPropOptimization: true,
	      },
	    },
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require('postcss-import')({
						plugins: [
							require('stylelint')({
								configFile: './config/lint/.stylelintrc'
							})
						]
					}),
					require('tailwindcss')('./config/style/tailwind.config.js'),
					require('postcss-preset-env')({
						autoprefixer: { grid: false },
						features: {
							'nesting-rules': true
						},
						browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
					})
				]
			}
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					`gatsby-remark-relative-images`,
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1600,
							sizeByPixelDensity: true,
							linkImagesToOriginal: false
						}
					},
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-lazy-load'
				],
				plugins: [`gatsby-remark-relative-images`, `gatsby-remark-images`]
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /static/
				}
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: `${__dirname}/static/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/src/posts/`
			}
		},
		{
			resolve: 'gatsby-plugin-heap',
			options: {
				appId: process.env.NODE_ENV === 'production' ? Constants.heapAnalyticsId : Constants.heapAnalyticsIdDev,
				enableOnDevMode: false // if 'false', heap will be fired on NODE_ENV=production only
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: Constants.themeColor
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: Constants.siteTitle,
				short_name: Constants.siteTitleShort,
				description: Constants.siteDescription,
				start_url: Constants.pathPrefix || '/',
				background_color: Constants.backgroundColor,
				theme_color: Constants.themeColor,
				display: 'minimal-ui',
				icon: `static${Constants.siteLogo}`
			}
		}
	]
};
