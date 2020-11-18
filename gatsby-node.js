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

	  	if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'name') && !!node.frontmatter.name) {
	  		slug = `/${_.kebabCase(node.frontmatter.name)}`;
	  	} else if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'title') && !!node.frontmatter.title) {
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

exports.createPages = async function ({ actions, graphql, reporter }) {
  const { createPage, deletePage } = actions;

  const homePage = path.resolve('src/pages/home.js');
  createPage({ path: `/`, component: homePage });

  const postMdxLayout = path.resolve('src/layouts/postMdx.js');

  const { data: postsData } = await graphql(`
    query getAllMdxPosts {
      allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {fields: [frontmatter___order], order: ASC}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              name
              order
              description
              categories
            }
          }
        }
      }
    }
  `);

  if (postsData.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "getAllMdxPosts" query');
  }

  const posts = postsData.allMdx.edges

  function commonCategories(a, b) {
	  var setB = new Set(b);
	  return [...new Set(a)].filter(x => setB.has(x)).length;
	}

console.log(posts)

  posts.forEach(({ node }, index) => {
  	const { id, fields: { slug } } = node;

  	const sortedByRelevance = [...posts].sort((a, b) => (
  		(commonCategories(b.node.frontmatter.categories, node.frontmatter.categories) / b.node.frontmatter.categories.length)
  		- (commonCategories(a.node.frontmatter.categories, node.frontmatter.categories) / a.node.frontmatter.categories.length)
  	)).filter(p => p.node.id !== id)

  	const relevantPosts = sortedByRelevance.slice(0, 4).sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
  	// const nextIndex = index + 1 < posts.length ? index + 1 : 0;
  	// const prevIndex = index - 1 >= 0 ? index - 1 : posts.length - 1;
  	// const nextPost = posts[nextIndex];
  	// const prevPost = posts[prevIndex];  
  	createPage({
  	  path: slug,
  	  component: postMdxLayout,
  	  context: {
  	  	id: id,
  	  	slug: slug,
  	  	relevant1: relevantPosts[0].node.id,
  	  	relevant2: relevantPosts[1].node.id,
  	  	relevant3: relevantPosts[2].node.id,
  	  	relevant4: relevantPosts[3].node.id,
  	  	// next: nextPost,
  	  	// prev: prevPost
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
		        Utils: path.resolve(__dirname, 'src/utils'),
		        Context: path.resolve(__dirname, 'src/context')
			}
		}
	});
};


exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@babel/plugin-proposal-export-default-from`
  })
}
