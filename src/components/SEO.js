import React, { Component } from "react";
import { Helmet } from "react-helmet";
import urljoin from "url-join";
import moment from "moment";
import Constants from "Config";

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props;
    let title;
    let description;
    let image;
    let postURL;

    if (postSEO) {
      const postMeta = postNode.frontmatter;
      ({ title } = postMeta);
      description = postMeta.description
        ? postMeta.description
        : postNode.excerpt;
      image = postMeta.cover;
      postURL = urljoin(Constants.siteUrl, Constants.pathPrefix, postPath);
    } else {
      title = Constants.siteTitle;
      description = Constants.siteDescription;
      image = Constants.siteLogo;
    }

    const getImagePath = (imageURI) => {
      if (
        !imageURI.match(
          `(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]`
        )
      )
        return urljoin(Constants.siteUrl, Constants.pathPrefix, imageURI);

      return imageURI;
    };

    const getPublicationDate = () => {
      if (!postNode) return null;

      if (!postNode.frontmatter) return null;

      if (!postNode.frontmatter.date) return null;

      return moment(postNode.frontmatter.date, Constants.dateFromFormat).toDate();
    };

    image = getImagePath(image);

    const datePublished = getPublicationDate();

    const authorJSONLD = {
      "@type": "Person",
      name: Constants.userName,
      email: Constants.userEmail,
      address: Constants.userLocation,
    };

    const logoJSONLD = {
      "@type": "ImageObject",
      url: getImagePath(Constants.siteLogo),
    };

    const blogURL = urljoin(Constants.siteUrl, Constants.pathPrefix);
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: Constants.siteTitleAlt ? Constants.siteTitleAlt : "",
      },
    ];
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: Constants.siteTitleAlt ? Constants.siteTitleAlt : "",
          headline: title,
          image: { "@type": "ImageObject", url: image },
          author: authorJSONLD,
          publisher: {
            ...authorJSONLD,
            "@type": "Organization",
            logo: logoJSONLD,
          },
          datePublished,
          description,
        }
      );
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : blogURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta
          property="fb:app_id"
          content={Constants.siteFBAppID ? Constants.siteFBAppID : ""}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={Constants.userTwitter ? Constants.userTwitter : ""}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
}

export default SEO;
