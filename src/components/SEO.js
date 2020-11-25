import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import urljoin from 'url-join';
import moment from 'moment';
import Constants from 'Config';

class SEO extends Component {
	render() {
		const { post, title: titleProp, description: descriptionProp } = this.props;
		let name;
		let description;
		let image;
		let postURL;

		if (post) {
			const postMeta = post.frontmatter;
			name = postMeta.name ?? postMeta.title;
			description = postMeta.description ?? post.subtitle;
			image = postMeta.thumbnail.publicURL;
			postURL = urljoin(Constants.siteUrl, Constants.pathPrefix, post.fields.slug);
		} else {
			name = `${Constants.siteTitle}${titleProp ? ` | ${titleProp}` : ''}`;
			description = descriptionProp ?? Constants.siteDescription;
			image = Constants.siteLogo;
		}

		const getImagePath = imageURI => {
			if (!imageURI.match(`(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`)) return urljoin(Constants.siteUrl, Constants.pathPrefix, imageURI);

			return imageURI;
		};

		const getPublicationDate = () => {
			if (!post) return null;

			if (!post.frontmatter) return null;

			if (!post.frontmatter.date) return null;

			return moment(post.frontmatter.date, Constants.dateFromFormat).toDate();
		};

		image = getImagePath(image);

		const datePublished = getPublicationDate();

		const authorJSONLD = {
			'@type': 'Person',
			'name': Constants.userName,
			'email': Constants.userEmail
			// address: Constants.userLocation,
		};

		const logoJSONLD = {
			'@type': 'ImageObject',
			'url': getImagePath(Constants.siteLogo)
		};

		const blogURL = urljoin(Constants.siteUrl, Constants.pathPrefix);
		const schemaOrgJSONLD = [
			{
				'@context': 'http://schema.org',
				'@type': 'WebSite',
				'url': blogURL,
				'name': name,
				'alternateName': Constants.siteTitleAlt ? Constants.siteTitleAlt : ''
			}
		];
		if (post) {
			schemaOrgJSONLD.push(
				{
					'@context': 'http://schema.org',
					'@type': 'BreadcrumbList',
					'itemListElement': [
						{
							'@type': 'ListItem',
							'position': 1,
							'item': {
								'@id': postURL,
								'name': name,
								image
							}
						}
					]
				},
				{
					'@context': 'http://schema.org',
					'@type': 'BlogPosting',
					'url': blogURL,
					'name': name,
					'alternateName': Constants.siteTitleAlt ? Constants.siteTitleAlt : '',
					'headline': name,
					'image': { '@type': 'ImageObject', 'url': image },
					'author': authorJSONLD,
					'publisher': {
						...authorJSONLD,
						'@type': 'Organization',
						'logo': logoJSONLD
					},
					datePublished,
					description
				}
			);
		}
		return (
			<Helmet>
				{/* General tags */}
				<meta name='description' content={description} />
				<meta name='image' content={image} />
				<link rel='icon' type='image/png' href={getImagePath(Constants.favicon)} sizes='16x16' />

				{/* Schema.org tags */}
				<script type='application/ld+json'>{JSON.stringify(schemaOrgJSONLD)}</script>

				{/* OpenGraph tags */}
				<meta property='og:url' content={post ? postURL : blogURL} />
				{post ? <meta property='og:type' content='article' /> : null}
				<meta property='og:title' content={name} />
				<meta property='og:description' content={description} />
				<meta property='og:image' content={image} />
				{/* <meta */}
				{/*   property="fb:app_id" */}
				{/*   content={Constants.siteFBAppID ? Constants.siteFBAppID : ""} */}
				{/* /> */}

				{/* Twitter Card tags */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content={Constants.userTwitter ?? ''} />
				<meta name='twitter:title' content={name} />
				<meta name='twitter:description' content={description} />
				<meta name='twitter:image' content={image} />
			</Helmet>
		);
	}
}

export default SEO;
