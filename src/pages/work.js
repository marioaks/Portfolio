import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { useDarkMode } from "Context";
import { graphql } from "gatsby"
import { arrayToObject } from "Utils";
import tw, { styled } from "twin.macro"
import { PostsList, H5, H6, PaddedContainer } from "Components"
// import useScalingLayout from './utils/useScalingLayout';

const WorkPage = ({data: {allMdx: {edges: posts, categories}}, location}) => {
  // useScalingLayout()

  const [isDarkMode] = useDarkMode()
  const categoryObj = useCallback({...arrayToObject(categories, 'name'), all: {name: 'all', count: posts.length}}, [categories])

  const [selectedCategory, setSelectedCategory] = useState({...categoryObj[location.state?.category ?? 'all']})
  const sortedCategories = useCallback(categories.sort((a, b) => b.count - a.count), [categories])

  const setCategory = useCallback(category => {
    setSelectedCategory(oldCat => {
      if (oldCat.name === category) return categoryObj['all']
      return categoryObj?.[category] ?? categoryObj['all']
    })
  }, [categoryObj])

  useEffect(() => { 
  	setCategory(location.state?.category ?? 'all')
  }, [location, setCategory])
  
  const filteredPosts = useCallback(posts.filter(p => {
     if (selectedCategory.name === "all") return true
  	return p.node.frontmatter.categories.includes(selectedCategory.name)
  }), [posts, selectedCategory.name])

  const StyledFilterLink = styled.span([
  	tw`underline cursor-pointer`,
  	props => !props.isDarkMode ? tw`hover:text-primary` : tw`hover:text-secondary`,
  	props => props.isSelected && (!props.isDarkMode ? tw`text-primary font-bold` : tw`text-secondary font-bold`),
  ])

  return (
  	<>
  	<PaddedContainer>
  		<H5 css={tw`mb-xl`} style={{maxWidth: 600}}>
  			Below are some of the works I am most proud of. These selected projects cover the fields of{" "}
  			{sortedCategories.map((c, i) => 
  				<Fragment key={c.name}>
  					<StyledFilterLink className="blob-target" isDarkMode={isDarkMode} isSelected={selectedCategory.name === c.name} onClick={() => setCategory(c.name)}>
  						{c.name.replace("-", ' ')}
  					</StyledFilterLink>
  					{i < sortedCategories.length - 2 ? ', ' : i === sortedCategories.length - 2 ? ', and ' : ''}
  				</Fragment>
  		 	)}. Click on a subject to filter or click{" "}
  				<StyledFilterLink className="blob-target" isDarkMode={isDarkMode} onClick={() => setCategory('all')}>
  					here
  				</StyledFilterLink> 
  			{" "}to reset.
  		</H5>

  		<H6 paragraph>Showing {selectedCategory.name?.replace("-", ' ')} ({selectedCategory.count}) posts:</H6>
  	</PaddedContainer>

  	<PaddedContainer style={{maxWidth: 'none'}}>
  		<PostsList posts={filteredPosts}/>
    </PaddedContainer>
    
</>
  )
}

export default WorkPage



export const post = graphql`
	query PostsQuery {
	  allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}, sort: {order: ASC, fields: frontmatter___order}) {
	    edges {
	      node {
	        id
	        fields {
	        	date(formatString: "MM/DD/YYYY")
	        	slug
	        }
	        frontmatter {
	          name
	          description
	          categories
	          thumbnail {
	          	childImageSharp {
	          	  original {
	          	  	src
	          	  	width
	          	  	height
	          	  }
	          	  fluid(maxWidth:1600, quality:100) {
		            ...GatsbyImageSharpFluid
		          }
	          	}
	          }
	        }
	      }
	    }
	    categories: group(field: frontmatter___categories) {
	      name: fieldValue
	      count: totalCount
	    }
	  }
	}
`