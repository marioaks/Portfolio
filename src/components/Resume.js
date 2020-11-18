import tw, { styled, theme, css } from "twin.macro"

export const ResumeSection = tw.div`mb-lg`

export const ResumeItem = styled.div([
	tw`mb-md`,
	css` 
		&:last-child { margin: 0 };
		& > h4 { margin-bottom: 0.5rem; }
	`
])

export const ResumeItemHeader = styled.div([
	tw`mb-xs`,
	css`& > .header { margin: 0 }`,
	props => props.isDarkMode ? 
		css`
			& > .header { color: ${theme('colors.secondary')} };
			& > .subheader { color: ${theme('colors.background')}; opacity: .8 };
		` :
		css`
			& > .header { color: ${theme('colors.primary')} };
			& > .subheader { color: ${theme('colors.gray.mid')} };
		`
]) 

export const ResumeItem2 = styled.div([
	tw`mb-sm`,
	css`
		&:last-of-type {margin: 0};
		//for some reason h6 and h5 elements didn't update reactively so im using h4
		& > h4:first-of-type { 
			margin-bottom: 0.5rem;
			font-weight: bold;
		};
	`
]) 