import React from 'react';
import { Link } from "gatsby";
import { H6 } from "./Typography";
import { PaddedContainer } from "./ui"
import tw, { styled, css, theme } from "twin.macro";
import isPropValid from '@emotion/is-prop-valid'
import { useDarkMode } from "Context";


const StyledNavbarContainer = styled(PaddedContainer)([
    tw`flex items-center justify-between`,
    css`
    	margin: 2vw auto 6vw;
    	/*width: 96%;*/
    	/*max-width: 1600px;*/
    	@media only screen and (max-width: ${theme('screens.sm.min')}) {
    		/*width: 90%;*/
    		margin: 6vw auto 10vw;
    	}
    `
])

const StyledLink = styled(Link, { shouldForwardProp: isPropValid })([
    tw`flex items-center justify-between
    mr-md sm:mr-sm xs:mr-xs
    cursor-pointer no-underline`,
    css`
      & * { white-space: nowrap };
      &:last-child { margin: 0 };

	  &:focus, &.active {
	  	text-decoration: underline;
	  }
    `,
    props => !props.isDarkMode ? 
	    css` &:hover { color: ${theme('colors.primary')} };` 
	    : css` &:hover { color: ${theme('colors.background')} } `
]) 



const Navbar = () => {
	const [isDarkMode] = useDarkMode()
	return (
		<StyledNavbarContainer id='main-nav'>
			<StyledLink isDarkMode={isDarkMode} id="nav-title" activeClassName="active" className="blob-target" to="/"><H6>Mario Aksiyote</H6></StyledLink>
			<div tw="flex">
				<StyledLink isDarkMode={isDarkMode} activeClassName="active" className="blob-target" to="/about/"><H6>About</H6></StyledLink>
				<StyledLink isDarkMode={isDarkMode} activeClassName="active" className="blob-target" to="/work/"><H6>Work</H6></StyledLink>
				<StyledLink isDarkMode={isDarkMode} activeClassName="active" className="blob-target" to="/contact/"><H6>Contact</H6></StyledLink>
			</div>

		</StyledNavbarContainer>
	)
}

export default Navbar