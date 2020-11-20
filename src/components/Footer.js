import React from 'react';
import { Link } from "gatsby";
import { Caption, H3 } from "./Typography";
import { PaddedContainer } from "./ui"
import tw, { styled, css, theme } from "twin.macro";
import Constants from "Config"
import { useDarkMode } from "Context";
import isPropValid from '@emotion/is-prop-valid'

const StyledFooterLink = styled(Link, { shouldForwardProp: isPropValid })([
	tw`py-sm lg:py-md  
	   no-underline
	   border-solid border-0 border-t-1 border-gray-light
	   hover:text-primary
	`,
	css`
		& h3 { width: fit-content; }
		&.active {
		  text-decoration: line-through;
		  &:hover {
		  	color: currentColor;
		  }
		}
	`,
	props => !props.isDarkMode ? 
	    css` &:hover { color: ${theme('colors.primary')}; opacity: 1; };` 
	    : css` &:hover { color: ${theme('colors.secondary')}; opacity: 1; } `
])

const Copyright = styled(Caption)([
	props => !props.isDarkMode ? 
	    css`color: ${theme('colors.gray.mid')} !important` 
	    : css`color: ${theme('colors.background')} !important`
])

const Footer = () => {
	const [isDarkMode] = useDarkMode()
	return (
			<div className="footer" tw="grid grid-rows-4 mt-xl">
				<StyledFooterLink isDarkMode={isDarkMode} className="blob-target" activeClassName="active" to="/"><PaddedContainer><H3 id="target" tw="ml-md sm:ml-lg md:ml-xl">Home</H3></PaddedContainer></StyledFooterLink>
				<StyledFooterLink isDarkMode={isDarkMode} className="blob-target" activeClassName="active" to="/about/"><PaddedContainer><H3 id="target" tw="ml-md sm:ml-lg md:ml-xl">About</H3></PaddedContainer></StyledFooterLink>
				<StyledFooterLink isDarkMode={isDarkMode} className="blob-target" activeClassName="active" to="/work/"><PaddedContainer><H3 id="target" tw="ml-md sm:ml-lg md:ml-xl">Work</H3></PaddedContainer></StyledFooterLink>
				<StyledFooterLink isDarkMode={isDarkMode} className="blob-target" activeClassName="active" to="/contact/"><PaddedContainer><H3 id="target" tw="ml-md sm:ml-lg md:ml-xl">Contact</H3></PaddedContainer></StyledFooterLink>
				<StyledFooterLink to="/" disabled>
					<PaddedContainer>
						<div tw="flex ml-md sm:ml-lg md:ml-xl">
							<Copyright isDarkMode={isDarkMode}>{Constants.copyright}</Copyright>
						</div>
					</PaddedContainer>
				</StyledFooterLink>
			</div>
	)
}

export default Footer