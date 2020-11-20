import React, { Children } from "react";
import { cloneElement } from "./utils";
import { Caption } from "./Image";
import { Fluid } from "./Fluid";
import { css } from "twin.macro";

export const FlexImages = ({children, caption, ...props}) => {
	const {xs, sm, md, lg, xl, xxl} = props
	return (
		<Fluid {...props} lg={!xs && !sm && !md && !xl && !xxl}>
			<div css={[css`
				display: flex;
				width: 100%;
				margin: -12px 0 0 -12px;
				width: calc(100% + 12px);
				height: auto;
			`]}>
				{Children.map(children, child => {
					if (child.props.mdxType !== "Img") return null
					return cloneElement(child, {
						style: { 
							flex: child?.props?.fluid?.aspectRatio ?? 1, 
							margin: `12px 0 0 12px`
						}
					})
				}).filter(img => img)
				}
			</div>
			{Children.map(children, child => {
				if (child.props.mdxType === "Img") return null
				return cloneElement(child, { style: { textAlign: 'center', padding: ".5rem 5rem"}})
			}).filter(text => text)}
			{caption && <Caption>{caption}</Caption>}
		</Fluid>
	)
}