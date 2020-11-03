import React from 'react';
import { Link } from "gatsby";
import tw, { styled, css, theme } from "twin.macro";

const StyledFooterGrid = styled.div([
	tw`grid grid-rows-4 mt-xl`
])
const StyledFooterLink = styled(Link)([
	tw`pl-sm md:pl-md lg:pl-lg xl:pl-xl py-md text-gray-dark no-underline`,
	css`
		& {
			border-top: 1px solid ${theme('colors.gray.light')};
        	background-color: transparent;
          
	        &:hover {
	          background-color: ${theme('colors.gray.xlight')}
			}

			& .caption { 
				text-align: left;
				color: ${theme('colors.gray.mid')}
			}
		}
	`
])

const Footer = () => {
	return (
		<StyledFooterGrid>
			<StyledFooterLink activeClassName="active" to="/"><h2 tw="ml-md sm:ml-lg md:ml-xl">Home</h2></StyledFooterLink>
			<StyledFooterLink activeClassName="active" to="/about"><h2 tw="ml-md sm:ml-lg md:ml-xl">About</h2></StyledFooterLink>
			<StyledFooterLink activeClassName="active" to="/work"><h2 tw="ml-md sm:ml-lg md:ml-xl">Work</h2></StyledFooterLink>
			<StyledFooterLink activeClassName="active"><h2 tw="ml-md sm:ml-lg md:ml-xl">Contact</h2></StyledFooterLink>
			<StyledFooterLink><div tw="ml-md sm:ml-lg md:ml-xl"><p className="caption">Copyright 2020 - Mario Aksiyote</p></div></StyledFooterLink>
		</StyledFooterGrid>
	)
}

export default Footer