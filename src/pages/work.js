import React, { useEffect, useCallback } from 'react';
import Img from "gatsby-image"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import tw from "twin.macro"
import { H2, H4, PaddedContainer } from "Components"
// import useScalingLayout from './utils/useScalingLayout';

const WorkPage = ({data: {allMdx: {edges: posts}}}) => {
  // const data = useStaticQuery(query)
  // useScalingLayout()

  return (
  	<PaddedContainer>
  		<H4 css={tw`mb-xl`} style={{maxWidth: 1000}}>Below are some of the works I am most proud of. These selected projects encompass the fields of front-end development, data science, data visualization, writing, art, and economics. Click on a subject to filter.</H4>
    <div id="projects-wrapper" style={{textAlign: 'center'}}>
    	{posts.map(({node: {id, fields: {slug, date}, frontmatter: {title, thumbnail: {childImageSharp: {fixed, fluid, original}}}}}) => {
    		console.log(slug)
    		const margin = (Math.random() * 2) + .2
    		return (
    			<Link className="project" style={{position: 'relative'}} to={slug}>
	    			<Img
	    				style={{display: 'inline-block', width: original.width / 2, height: 'auto', margin: `0em ${margin}rem .8rem`}}
				        fluid={fluid}
				        alt=""
				    />
				    <H2 style={{position: 'absolute', top: 0, margin: `0 ${margin}rem`, left: 0, opacity: 0, color: '#222', zIndex: 1, pointerEvents: 'none'}}>{title}</H2>
			    </Link>
    		)
    	})}
      
    </div>
</PaddedContainer>  )
}

export default WorkPage



export const post = graphql`
	query PostsQuery {
	  allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {order: DESC, fields: fields___date}) {
	    edges {
	      node {
	        id
	        fields {
	        	date(formatString: "MM/DD/YYYY")
	        	slug
	        }
	        frontmatter {
	          title
	          thumbnail {
	          	childImageSharp {
	          	  original {
	          	  	width
	          	  	height
	          	  }
	          	  fluid(maxWidth: 1200) {
		            ...GatsbyImageSharpFluid_noBase64
		          }
	          	}
	          }
	        }
	      }
	    }
	  }
	}
`