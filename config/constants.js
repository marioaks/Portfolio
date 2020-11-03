const config = {
	siteTitle: "Mario Aksiyote's Portfolio", // Site title.
	siteTitleShort: 'Portfolio', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: "Mario's Portfolio", // Alternative site title for SEO.
	siteLogo: '/logos/super-mario-1024.png', // Logo used for SEO and manifest.
	siteUrl: 'https://gatsby-advanced-starter-demo.netlify.com', // Domain of your website without pathPrefix.
	pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: "A portfolio of Mario Aksiyote's best and most recent work.", // Website description used for RSS feeds/meta description tag.
	dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
	dateFormat: 'DD/MM/YYYY', // Date format for display.
	siteRss: '/rss.xml', // Path to the RSS file.
	siteRssTitle: "Mario Aksiyote's RSS feed", // Title of the RSS feed
	// siteFBAppID: "1825356251115265", // TODO: FB Application ID for using app insights
	// googleAnalyticsID: "UA-47311644-5", // TODO: GA tracking ID.
	// disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // TODO: Disqus shortname.

	// userLinks: [
	//   {
	//     label: "GitHub",
	//     url: "https://github.com/Vagr9K/gatsby-advanced-starter",
	//     iconClassName: "fa fa-github"
	//   },
	//   {
	//     label: "Twitter",
	//     url: "https://twitter.com/Vagr9K",
	//     iconClassName: "fa fa-twitter"
	//   },
	//   {
	//     label: "Email",
	//     url: "mailto:vagr9k@gmail.com",
	//     iconClassName: "fa fa-envelope"
	//   }
	// ],
	copyright: 'Copyright © 2020. Mario Aksiyote', // Copyright string for the footer of the website and RSS feed.
	themeColor: '#0051F2', // Used for setting manifest and progress theme colors.
	backgroundColor: '#EFEFEF', // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
	config.pathPrefix = '';
} else {
	// Make sure pathPrefix only contains the first forward slash
	config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
