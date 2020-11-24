import React, { useCallback } from "react";
import useParallax from "./useParallax";
import Img from "gatsby-image"
import { Link } from "gatsby"
import { H2, H5 } from "Components";
import tw, { styled, theme, css } from "twin.macro"

const PostsList = ({ posts, maxImgWidth=700, minImgWidth=700 }) => {
  	useParallax(posts)

  	const postsWithSize = useCallback(posts.map(p => ({
	  	...p,
	  	width: Math.floor(Math.random() * (maxImgWidth - minImgWidth + 1) + minImgWidth),
	  	margin: {
	  		left: 1.4,//(Math.random() * 6) + .2,
	  		right: 1.4//(Math.random() * 6) + .2
	  	}
	})), [posts])

	const StyledProjectsWrapper = tw.div`mt-sm text-center overflow-hidden`
	const StyledProject = styled.div([
		props => css`
			display: inline-block;
		  	max-width: 100%;
			width: ${props.width * .7}px;
			opacity: 0;
	  		margin: 0 ${props.margin.left}rem 4rem ${props.margin.right}rem;
	  		transition: opacity .7s, filter .3s;
	  		/*zoom: .7;*/
	  		&:hover {
	  			filter: opacity(.75);
	  		}
		`,
		css`
			@media only screen and (max-width: ${theme('screens.xl.min')}) {
		  		width: 100% !important;
		  		margin: 0 0 5rem !important;
		  		/*zoom: 1;*/
		  		&:hover {
		  			filter: none;
		  		}
		  	}
		  	@media only screen and (min-width: ${theme('screens.xl.min')}) {
		  		zoom: 1;
		  	}
		  	@media only screen and (min-width: 1430px) {
		  		zoom: 1.2;
		  	}
		  	@media only screen and (min-width: 1600px) {
		  		zoom: 1.3;
		  	}
		  	@media only screen and (min-width: 1800px) {
		  		zoom: 1;
		  	}

		`
	])

	const ProjectTitleWrapper = styled.div([
		tw`grid grid-cols-1 md:grid-cols-4 xl:block py-sm xl:py-xs`,
		css`
			@media only screen and (min-width: ${theme('screens.xl.min')}) {
		  		& > * { 
		  			/*display: none;*/
		  			/*&:first-of-type {*/
		  				display: block;
		  				zoom:.6;
		  				max-width: 65%;
		  			/*}*/
		  		};
		  	}
		`
	])

	const ProjectTitle = styled(H2)([
		tw`xs:p-0 md:px-sm xl:p-0 no-underline block md:col-span-2 mb-xs`,
		css`font-family: ${theme('fontFamily.header.sans')}; font-weight: bold;`
	])

	return (
		<StyledProjectsWrapper id="projects-wrapper">
			{postsWithSize.map(({node: {id, fields: {slug, date}, frontmatter: {name, description, categories, thumbnail: {childImageSharp: {fluid}}}}, width, margin}, i) => (
				<Link key={id} to={slug}>
					<StyledProject id={id} className="project" width={width} margin={margin}>
						<Img fluid={fluid} alt=""/>
						<ProjectTitleWrapper>
							<ProjectTitle>{name}</ProjectTitle>
							<H5 tw="md:col-start-3 md:col-span-2 px-0 md:px-sm xl:px-0 mb-xs xl:opacity-75" css={css`max-width: 650px;`}>{description}</H5>
							{/* <H6 tw="md:col-start-6 px-0 md:px-sm md:m-0 xl:hidden" css={css`max-width: 400px; text-transform: capitalize;`}>{categories.map(c=>c.replace(/-/g, ' ')).join(", ")}</H6> */}
						</ProjectTitleWrapper>
					</StyledProject>
				</Link>
			))}
		</StyledProjectsWrapper>
	)
}

export default PostsList