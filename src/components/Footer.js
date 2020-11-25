import React from 'react';
import { Link } from 'gatsby';
import tw, { css } from 'twin.macro';
import { PaddedContainer } from './ui';
import { H6 } from './Typography';

const Footer = () => {
	return (
		<PaddedContainer>
			<div
				css={[
					tw`py-xl mt-xl grid grid-cols-4`,
					css`
						max-width: 400px;
						margin-left: auto;
						margin-right: auto;
					`
				]}
			>
				<Link tw='no-underline mt-xs' to='/'>
					<H6 tw='text-center hover:opacity-75'>Home</H6>
				</Link>
				<Link tw='no-underline mt-xs' to='/about/'>
					<H6 tw='text-center hover:opacity-75'>About</H6>
				</Link>
				<Link tw='no-underline mt-xs' to='/work/'>
					<H6 tw='text-center hover:opacity-75'>Work</H6>
				</Link>
				<Link tw='no-underline mt-xs' to='/contact/'>
					<H6 tw='text-center hover:opacity-75'>Contact</H6>
				</Link>
			</div>
		</PaddedContainer>
	);
};

export default Footer;
