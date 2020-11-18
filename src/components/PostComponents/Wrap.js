import React, { Children } from "react";
import _ from 'lodash'
import { Fluid } from "./Fluid"
import { textMaxWidth, cloneElement } from "./utils";
import { css } from 'twin.macro';

export const Wrap = ({children}) => {
	const margin = 32
	let images = []
	Children.forEach(children, child => {
	    if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(child?.props?.mdxType.toLowerCase())) {
	        images.push(child);
	    }
	});

	const largestImage = _.maxBy(images, 'props.original.width');
	const maxWidth = Math.min(1150, (largestImage?.props?.original?.width ?? 800) + textMaxWidth)
	const wrappedElWidth = images.length ? maxWidth - textMaxWidth - margin : 0

	const wrappedElStyle = child => css`
		display: inline-table;
		float: ${child?.props?.float ?? 'left'};
		width: ${maxWidth - textMaxWidth - margin}px;
		margin: 10px ${!child?.props?.float || child?.props?.float === 'left' ? margin : 0}px 10px ${child?.props?.float === 'right' ? margin : 0}px;
		@media only screen and (max-width: ${wrappedElWidth + 300}px) {
			margin: auto auto 1rem;
			display: block;
			float: none;
			max-width: 100%;
		}
	`

	const textStyle = css`
		max-width: ${images.length ? 1000 : textMaxWidth}px; 
		@media only screen and (max-width: ${wrappedElWidth + 300}px) {
			max-width: ${textMaxWidth}px;
			margin-left: 0 !important;
		}
	`

	return (
		<Fluid maxWidth={`${maxWidth + 150}px`}>
			{Children.map(children, child => {
				if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(child?.props?.mdxType.toLowerCase()))
					return cloneElement(child, { css: [textStyle], style: {marginLeft: `calc(max((100% - 1000px) / 2, 0px))` }});
				return cloneElement(child, { css: [wrappedElStyle(child)] });
			})}
		</Fluid>
	)
}