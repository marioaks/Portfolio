import React from 'react';
import { Link } from "gatsby";
import tw, { styled, css, theme } from "twin.macro";

const StyledNavbarContainer = styled.div([
    tw`flex items-center justify-between
    px-sm md:px-md lg:px-lg xl:px-xl py-sm md:py-md mb-sm`,
    /*css`*/
    	/*background: transparent;
    	position: sticky;
    	top: 0;
    	z-index: 1;*/
    // `
])
// background: ${theme('colors.background')};

const StyledLinksContainer = styled.div`
    ${tw`flex`}
`;

const StyledLink = styled(Link)([
    tw`flex items-center justify-between text-primary-default 
    mr-sm md:mr-md
    hover:text-gray-dark cursor-pointer`,
    css`
      /*text-decoration: none;*/
	  /*background-image: linear-gradient(currentColor, currentColor);
	  background-position: 0% 100%;
	  background-repeat: no-repeat;
	  background-size: 0% 2px;
	  transition: background-size .3s;*/
      & * { white-space: nowrap };
      &:last-child { margin: 0 };

	  /*&:hover, &:focus, &.active {
	      background-size: 100% 2px;
	  }*/
    `
])

const Navbar = () => {
	return (
		<StyledNavbarContainer>
			<StyledLink activeClassName="active" className="shake-slow" to="/"><h6 className="info">Mario Aksiyote</h6></StyledLink>
			<StyledLinksContainer>
				<StyledLink activeClassName="active" to="/about/"><h6 className="info">About</h6></StyledLink>
				<StyledLink activeClassName="active" to="/work/" className="shake-slow"><h6 className="info">Work</h6></StyledLink>
				<StyledLink activeClassName="active" className="shake-slow" onClick={() => alert("open contact modal")} className="shake-slow"><h6 className="info">Contact</h6></StyledLink>
			</StyledLinksContainer>
		</StyledNavbarContainer>
	)
}

export default Navbar