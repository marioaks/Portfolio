/* eslint "no-console": "off" */

const path = require('path');
const _ = require('lodash');
const moment = require('moment');
const Constants = require('./config/constants');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node);

  const { createNodeField } = actions;

  let slug;
  if (node.internal.type === 'Mdx') {
	  	//generate url slug
	  	const fileNode = getNode(node.parent);
	  	const parsedFilePath = path.parse(fileNode.relativePath);
	  	if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
	  		slug = `/${_.kebabCase(node.frontmatter.title)}`;
	  	} else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
	  		slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
	  	} else if (parsedFilePath.dir === '') {
	  		slug = `/${parsedFilePath.name}/`;
	  	} else {
	  		slug = `/${parsedFilePath.dir}/`;
	  	}

	  	if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
		  	if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) slug = `/${_.kebabCase(node.frontmatter.slug)}`;
		  	if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
		  		const date = moment(node.frontmatter.date, Constants.dateFromFormat);
		  		if (!date.isValid) console.warn(`WARNING: Invalid date.`, node.frontmatter);  
		  		createNodeField({ 
		  			node, 
		  			name: 'date', 
		  			value: date.toISOString() 
		  		});
		  	}
		}
	}

	createNodeField({ 
		node, 
		name: 'slug', 
		value: slug 
	});
}

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions;
  const postPage = path.resolve('src/layouts/post.js');
  const homePage = path.resolve('src/pages/home.js');
  
  createPage({ path: `/`, component: homePage });

  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
              date
            }
          }
        }
      }
    }
  `);

  if (data.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = data.allMdx.edges

  posts.sort((postA, postB) => {
  	const dateA = moment(postA.node.fields.date, Constants.dateFromFormat);  
  	const dateB = moment(postB.node.fields.date, Constants.dateFromFormat);  
  	if (dateA.isBefore(dateB)) return 1;
  	if (dateB.isBefore(dateA)) return -1;  
  	return 0;
  });

  // Post page creating
  posts.forEach(({ node }, index) => {
  	const { id, fields: { slug } } = node;

  	// Create post pages
  	const nextID = index + 1 < posts.length ? index + 1 : 0;
  	const prevID = index - 1 >= 0 ? index - 1 : posts.length - 1;
  	const nextPost = posts[nextID];
  	const prevPost = posts[prevID];  
  	createPage({
  	  path: slug,
  	  component: postPage,
  	  context: {
  	  	id: id,
  	  	slug: slug,
  	  	next: nextPost,
  	  	prev: prevPost
  	  }
  	});
  });
};

exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
	actions.setWebpackConfig({
    module: { 
      rules: [
        stage === "develop-html" || stage === "build-html" ? { test: /node_modules\/paper/, use: loaders.null() } : {}
      ]
    },
    resolve: {
			alias: {
        Assets: path.resolve(__dirname, 'static/assets'),
        Config: path.resolve(__dirname, 'config'),
				Posts: path.resolve(__dirname, 'src/posts'),
				Components: path.resolve(__dirname, 'src/components'),
				Pages: path.resolve(__dirname, 'src/pages'),
        Layouts: path.resolve(__dirname, 'src/layouts'),
				Templates: path.resolve(__dirname, 'src/templates'),
        Utils: path.resolve(__dirname, 'src/utils')
			}
		}
	});
};


exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@babel/plugin-proposal-export-default-from`
  })
}
