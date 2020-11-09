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
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false
            }          
          },
          'gatsby-remark-copy-linked-files',
          // 'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-lazy-load'
        ]
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
		// {
		// 	resolve: 'gatsby-transformer-remark',
		// 	options: {
		// 		plugins: [
		// 			{
		// 				resolve: `gatsby-remark-relative-images`
		// 			},
		// 			{
		// 				resolve: 'gatsby-remark-images',
		// 				options: {
		// 					maxWidth: 690
		// 				}
		// 			},
		// 			'gatsby-remark-copy-linked-files',
		// 			'gatsby-remark-autolink-headers',
		// 			'gatsby-remark-prismjs',
		// 			'gatsby-remark-lazy-load'
		// 		]
		// 	}
		// },
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
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-twitter',
		'gatsby-plugin-advanced-sitemap',
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
		},
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: path.resolve('config/deploy/netlifyConfig.js'), // default: undefined
				enableIdentityWidget: true,
				publicPath: 'admin',
				htmlTitle: 'Content Manager',
				includeRobots: false
			}
		},
		// {
		// 	resolve: 'gatsby-plugin-feed',
		// 	options: {
		// 		setup(ref) {
		// 			const ret = ref.query.site.siteMetadata.rssMetadata;
		// 			ret.allMarkdownRemark = ref.query.allMarkdownRemark;
		// 			ret.generator = Constants.siteTitle;
		// 			return ret;
		// 		},
		// 		query: `
  //       {
  //         site {
  //           siteMetadata {
  //             rssMetadata {
  //               site_url
  //               feed_url
  //               title
  //               description
  //               image_url
  //               copyright
  //             }
  //           }
  //         }
  //       }
  //     `,
		// 		feeds: [
		// 			{
		// 				serialize(ctx) {
		// 					const { rssMetadata } = ctx.query.site.siteMetadata;
		// 					return ctx.query.allMarkdownRemark.edges.map(edge => ({
		// 						categories: edge.node.frontmatter.tags,
		// 						date: edge.node.fields.date,
		// 						title: edge.node.frontmatter.title,
		// 						description: edge.node.excerpt,
		// 						url: rssMetadata.site_url + edge.node.fields.slug,
		// 						guid: rssMetadata.site_url + edge.node.fields.slug,
		// 						custom_elements: [{ 'content:encoded': edge.node.html }, { author: Constants.userEmail }]
		// 					}));
		// 				},
		// 				query: `
  //           {
  //             allMarkdownRemark(
  //               limit: 1000,
  //               sort: { order: DESC, fields: [fields___date] },
  //             ) {
  //               edges {
  //                 node {
  //                   excerpt
  //                   html
  //                   timeToRead
  //                   fields {
  //                     slug
  //                     date
  //                   }
  //                   frontmatter {
  //                     title
  //                     cover
  //                     date
  //                     category
  //                     tags
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         `,
		// 				output: Constants.siteRss,
		// 				title: Constants.siteRssTitle
		// 			}
		// 		]
		// 	}
		// }
	]
};
