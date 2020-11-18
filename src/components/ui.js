import React from 'react';
import tw, { styled, css, theme } from "twin.macro";

export const PaddedContainer = styled.div([
  css`
  	margin: auto;
  	width: 90%;
  	max-width: 1600px;
  	@media only screen and (max-width: ${theme('screens.sm.min')}) {
		width: 85%;
	}
  `
])

export const InnerPaddedContainer = styled.div([
	tw`xs:ml-0 sm:ml-0 md:ml-md lg:ml-lg xl:ml-xl`
])

export const MultiColumnLayout = styled.div([
  tw`col-count-1 sm:col-count-2 xl:col-count-3 col-fill-balance`,
  css`
	column-gap: 10vw;
  	& > * {
  		break-inside: avoid-column;
	    page-break-inside: avoid;
	}
  `
])

export const Divider = tw.hr`my-xl border-0 border-t-1 border-gray-light`

const StyledQuoteBlock = styled.div([
	tw`mb-sm`,
	css`
		& > *:first-of-type {
			font-style: italic;
			padding-left: ${theme('spacing.xs')};
			margin-bottom: ${theme('spacing.xs')};
			border-left: 1px solid ${theme('colors.gray.light')}
		}
	`
])

export const QuoteBlock = ({ children }) => (
	<StyledQuoteBlock>
		{React.cloneElement(children[0])}
	    {React.cloneElement(children[1])}
	</StyledQuoteBlock>
)