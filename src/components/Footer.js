import React from 'react';
import { Link } from "gatsby";
import { Caption, H1, H2, H5, H3, H6 } from "./Typography";
import { Fluid } from "./PostComponents/Fluid"
import { PaddedContainer, Divider } from "./ui"
import tw, { styled, css, theme } from "twin.macro";
import Constants from "Config"
import { useDarkMode } from "Context";
import isPropValid from '@emotion/is-prop-valid'

const StyledFooterLink = styled(Link, { shouldForwardProp: isPropValid })([
	tw`py-sm lg:py-md
	   no-underline
	   border-solid border-0 border-t-1 border-b-1 border-r-1 border-gray-light
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
	tw`text-left`,
	props => !props.isDarkMode ? 
	    css`color: ${theme('colors.gray.mid')} !important` 
	    : css`color: ${theme('colors.background')} !important`
])

const Footer = () => {
	const [isDarkMode] = useDarkMode()
	return (
		<PaddedContainer>
				<div css={[tw`py-xl mt-xl grid grid-cols-4`, css`max-width: 400px; margin-left: auto; margin-right: auto`]}>
					<Link tw="no-underline mt-xs" to="/"><H6 tw="text-center hover:opacity-75">Home</H6></Link>
					<Link tw="no-underline mt-xs" to="/about/"><H6 tw="text-center hover:opacity-75">About</H6></Link>
					<Link tw="no-underline mt-xs" to="/work/"><H6 tw="text-center hover:opacity-75">Work</H6></Link>
					<Link tw="no-underline mt-xs" to="/contact/"><H6 tw="text-center hover:opacity-75">Contact</H6></Link>
				</div>
		</PaddedContainer>
	)
}

export default Footer