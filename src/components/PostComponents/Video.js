import React from 'react';
import { css, theme, styled } from 'twin.macro';
import { Caption } from './Image';
import { sizes } from './utils';
import { Fluid } from './Fluid';

const UnstyledVideo = ({ src, title, caption, ...props }) => {
	const { lg, xl, xxl } = props;
	const Video = (
		<div className='iframe-container'>
			<iframe
				tw='w-full'
				src={src}
				title={title}
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				frameBorder='0'
				webkitallowfullscreen='true'
				mozallowfullscreen='true'
				allowFullScreen
			/>
		</div>
	);

	const VideoWithCaption = (
		<>
			{' '}
			{Video}
			{caption && <Caption tw='opacity-75'>{caption}</Caption>}
		</>
	);

	return !lg && !xl && !xxl ? <div {...props}>{VideoWithCaption}</div> : <Fluid {...props}>{VideoWithCaption}</Fluid>;
};

export const Video = styled(UnstyledVideo)(({ originalWidth = 560, originalHeight = 315, xs, sm, md, lg, xl, xxl }) => [
	css`
		margin-bottom: ${theme('spacing.md')};
		margin-top: ${theme('spacing.md')};
		& .iframe-container {
			position: relative;
			width: 100%;
			padding-bottom: ${`${(originalHeight / originalWidth) * 100}%`};
			height: 0;
		}
		& iframe {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
	`,
	xs &&
		css`
			max-width: ${sizes.xs};
		`,
	sm &&
		css`
			max-width: ${sizes.sm};
		`,
	md &&
		css`
			max-width: ${sizes.md};
		`,
	lg &&
		css`
			& > div {
				max-width: ${sizes.lg};
			}
		`,
	xl &&
		css`
			& > div {
				max-width: ${sizes.xl};
			}
		`,
	xxl &&
		css`
			& > div {
				max-width: ${sizes.xxl};
			}
		`
]);
