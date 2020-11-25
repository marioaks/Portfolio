import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { getMaxWidth } from './utils';
import { PaddedContainer } from '../ui';

const FluidContainer = styled.div([
	tw`my-md`,
	css`
		left: 50%;
		justify-content: center;
		margin-left: -50vw;
		margin-right: -50vw;
		max-width: 100vw;
		height: auto;
		position: relative;
		right: 50%;
		width: 100vw;
	`
]);

export const Fluid = ({ children, maxWidth, ...props }) => {
	const calculatedMaxWidth = maxWidth ?? getMaxWidth(props);
	return (
		<FluidContainer {...props}>
			<PaddedContainer
				css={[
					css`
						max-width: none;
					`
				]}
			>
				<div
					css={[
						css`
							display: flow-root;
							max-width: ${calculatedMaxWidth ?? '100%'};
							margin: auto;
						`
					]}
				>
					{children}
				</div>
			</PaddedContainer>
		</FluidContainer>
	);
};
