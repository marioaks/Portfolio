import tw, { styled, css } from "twin.macro";

export const PaddedContainer = styled.div([
  // tw`px-sm md:px-md lg:px-lg xl:px-xl`,
  css`
  	margin: auto auto auto 2vw;
  	width: 96%;
  	/*padding-left: 10vw;*/
  	/*max-width: 2000px;*/
  `
])

export const TwoColumnLayout = styled.div([
  tw`col-count-1 sm:col-count-2 xl:col-count-3 col-fill-balance`,
  css`
	column-gap: 8vw;
  	& > *, img {
  		break-inside: avoid-column;
	    page-break-inside: avoid;
	  	width: 100%;


	  }
	`
])

export const Divider = styled.hr(({large}) => [
	tw`my-sm border-gray-xlight`,
	large && tw`my-xl`
])