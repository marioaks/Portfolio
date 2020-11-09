import React from 'react';
import { Link } from "gatsby";
import { P2, P1, H4, H5, H2,  H6, Caption } from "Components"
import tw, { styled, css, theme } from "twin.macro";


const StyledNavbarContainer = styled.div([
    tw`flex items-center justify-between
    `,
    css`
    	margin: 2vw 2vw 6vw;
    	/*width: 85%;*/
    	width: 96%;
    	/*position: sticky;*/
    	/*max-width: 2000px;*/
    	/*top: 5vw;*/
    	/*z-index: 1;*/
    `
])

const StyledLink = styled(Link)([
    tw`flex items-center justify-between text-gray-dark hover:text-primary-default
    mr-md
    cursor-pointer no-underline`,
    css`

	  /*background-image: linear-gradient(currentColor, currentColor);
	  background-position: 0% 100%;
	  background-repeat: no-repeat;
	  background-size: 0% 2px;
	  transition: background-size .3s;*/
      & * { white-space: nowrap };
      &:last-child { margin: 0 };

	  &:hover, &:focus, &.active {
	  	color: theme('color-primary-default') !important;
	      /*background-size: 100% 2px;*/
	  }
    `
]) 

const Navbar = () => {
	return (
		<StyledNavbarContainer id='main-nav'>
			<StyledLink id="nav-title" activeClassName="active" className="blob-target" to="/"><H5>Mario Aksiyote</H5></StyledLink>
			<div tw="flex">
				<StyledLink activeClassName="active" className="blob-target" to="/about/"><H6>About</H6></StyledLink>
				<StyledLink activeClassName="active" className="blob-target" to="/work/"><H6>Work</H6></StyledLink>
				<StyledLink activeClassName="active" className="blob-target" onClick={() => alert("open contact modal")}><H6>Contact</H6></StyledLink>
			</div>

		</StyledNavbarContainer>
	)
}

export default Navbar