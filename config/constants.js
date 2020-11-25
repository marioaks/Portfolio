const config = {
	siteTitle: "Mario Aksiyote's Portfolio", // Site title.
	siteTitleShort: 'Portfolio', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
	siteTitleAlt: "Mario's Portfolio", // Alternative site title for SEO.
	siteLogo: '/assets/images/favicon-1024.png', // Logo used for SEO and manifest.
	favicon: '/assets/images/favicon.ico',
	siteUrl: 'https://marioaksiyote.com', // Domain of your website without pathPrefix.
	pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: "A portfolio of Mario Aksiyote's best and most recent work.", // Website description used for RSS feeds/meta description tag.
	dateFromFormat: 'MM-DD-YYYY', // Date format used in the frontmatter.
	userTwitter: 'maksiyote',
	userName: 'Mario Aksiyote',
	userEmail: 'maksiyote@gmail.com',
	heapAnalyticsId: '2699013141',
	heapAnalyticsIdDev: '1759466162',
	copyright: 'Copyright © 2020. Mario Aksiyote', // Copyright string for the footer of the website and RSS feed.
	themeColor: '#0051F2', // Used for setting manifest and progress theme colors.
	backgroundColor: '#EFEFEF', // Used for setting manifest background color.
	darkBackgroundColor: '#0D0D0D'
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

module.exports = config;
