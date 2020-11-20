const urljoin = require('url-join');
const path = require('path');
const Constants = require('./config/constants');

module.exports = {
	pathPrefix: Constants.pathPrefix === '' ? '/' : Constants.pathPrefix,
	siteMetadata: {
		siteUrl: urljoin(Constants.siteUrl, Constants.pathPrefix),
		rssMetadata: {
			site_url: urljoin(Constants.siteUrl, Constants.pathPrefix),
			feed_url: urljoin(Constants.siteUrl, Constants.pathPrefix, Constants.siteRss),
			title: Constants.siteTitle,
			description: Constants.siteDescription,
			image_url: `${urljoin(Constants.siteUrl, Constants.pathPrefix)}/logos/logo-512.png`,
			copyright: Constants.copyright
		}
	},
	plugins: [
		'gatsby-plugin-lodash',
		'gatsby-plugin-react-helmet',
	    'gatsby-plugin-emotion',
	    'gatsby-plugin-sharp',
		'gatsby-remark-images',
		'gatsby-transformer-sharp',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-twitter',
		'gatsby-plugin-advanced-sitemap',
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
	              browsers: [
	                  '> 1%',
	                  'last 2 versions',
	                  'Firefox ESR',
	              ]
	          })
	        ]
	      }
	    },
	    {
	      resolve: 'gatsby-plugin-mdx',
	      options: {
	        extensions: [".mdx", ".md"],
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
	          'gatsby-remark-prismjs',
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
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: Constants.googleAnalyticsID
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
				start_url: Constants.pathPrefix,
				background_color: Constants.backgroundColor,
				theme_color: Constants.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/logos/super-mario-192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/logos/super-mario-512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		}
	]
};
