import React from 'react';
import { Link } from 'gatsby';
import { SunIcon, MoonIcon } from 'Assets/icons';
import tw, { styled, css, theme } from 'twin.macro';
import { useDarkMode } from 'Context';
import { PaddedContainer } from './ui';
import { H6 } from './Typography';

const StyledNavbarContainer = styled(PaddedContainer)([
	tw`flex items-center justify-between`,
	css`
		margin: 2vw auto 6vw;
		height: 20px;
		@media only screen and (max-width: ${theme('screens.sm.min')}) {
			margin: 6vw auto 10vw;
		}
	`
]);

const LinkStyle = isDarkMode => [
	tw`mr-md sm:mr-sm xs:mr-xs cursor-pointer no-underline`,
	css`
		& * {
			white-space: nowrap;
		}
		&:last-child {
			margin: 0;
		}
		&.active {
			text-decoration: underline;
		}
	`,
	!isDarkMode
		? css`
				&:hover {
					color: ${theme('colors.primary')};
				}
		  `
		: css`
				&:hover {
					color: ${theme('colors.secondary')};
				}
		  `
];

// const StyledLink = styled(H6)([
//     ,
//     css`
//       & * { white-space: nowrap };
//       &:last-child { margin: 0 };
// 	  &.active { text-decoration: underline;}
//     `,
//     props => !props.isDarkMode ?
// 	    css` &:hover { color: ${theme('colors.primary')} };`
// 	    : css` &:hover { color: ${theme('colors.background')} } `
// ])

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {
	return (
		<button
			type='button'
			css={[
				tw`border-0 bg-transparent cursor-pointer hover:opacity-75`,
				css`
					width: 32px;
					padding: 0;
					zoom: 0.6;
					& > #light {
						fill: ${theme('colors.darkBackground')};
						transform: translateY(2px);
					}
					& > #dark {
						fill: ${theme('colors.background')};
						transform: translateY(2px);
					}
				`
			]}
			onClick={() => setIsDarkMode(!isDarkMode)}
		>
			{!isDarkMode ? <SunIcon id='light' /> : <MoonIcon id='dark' />}
		</button>
	);
};

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useDarkMode();
	return (
		<StyledNavbarContainer>
			<Link css={LinkStyle(isDarkMode)} activeClassName='active' to='/'>
				<H6>Mario Aksiyote</H6>
			</Link>

			<div tw='flex items-center'>
				<Link css={LinkStyle(isDarkMode)} activeClassName='active' to='/about/'>
					<H6>About</H6>
				</Link>
				<Link css={LinkStyle(isDarkMode)} activeClassName='active' to='/work/'>
					<H6>Work</H6>
				</Link>
				<Link css={LinkStyle(isDarkMode)} activeClassName='active' to='/contact/'>
					<H6>Contact</H6>
				</Link>
				<DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			</div>
		</StyledNavbarContainer>
	);
};

export default Navbar;
