import React from 'react';
import { Link } from "gatsby";
import { Caption, H2 } from "Components";
import tw, { styled, css, theme } from "twin.macro";
import Constants from "Config"

const StyledFooterLink = styled(Link)([
	tw`pl-sm md:pl-md lg:pl-lg xl:pl-xl py-md 
	   text-gray-dark no-underline
	   border-solid border-0 border-t-1 border-gray-light
	   hover:bg-gray-xlight
	`,
	css`
		& > * { width: fit-content; }
		&.active {
		  text-decoration: line-through;
		  &:hover {
		  	background-color: transparent;
		  }
		}
	`
])

const Footer = () => {
	return (
		<div tw="grid grid-rows-4 mt-xl">
			<StyledFooterLink className="blob-target" activeClassName="active" to="/"><H2 id="target" tw="ml-md sm:ml-lg md:ml-xl">Home</H2></StyledFooterLink>
			<StyledFooterLink className="blob-target" activeClassName="active" to="/about/"><H2 id="target" tw="ml-md sm:ml-lg md:ml-xl">About</H2></StyledFooterLink>
			<StyledFooterLink className="blob-target" activeClassName="active" to="/work/"><H2 id="target" tw="ml-md sm:ml-lg md:ml-xl">Work</H2></StyledFooterLink>
			<StyledFooterLink className="blob-target" activeClassName="active"><H2 id="target" tw="ml-md sm:ml-lg md:ml-xl">Contact</H2></StyledFooterLink>
			<StyledFooterLink disabled>
				<div tw="flex ml-md sm:ml-lg md:ml-xl">
					<Caption tw="text-gray-mid">{Constants.copyright}</Caption>
				</div>
			</StyledFooterLink>
		</div>
	)
}

export default Footer