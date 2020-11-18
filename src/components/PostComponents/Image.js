import React from "react"
import { Caption as DefaultCaption } from "../Typography";
import tw, {css, theme, styled} from "twin.macro";
import { sizes } from "./utils";
import { Fluid } from "./Fluid";
import Zoom from 'react-medium-image-zoom';
import GatsbyImg from "gatsby-image";

export const Caption = tw(DefaultCaption)`mt-xs opacity-75`

const UnstyledImg = ({fluid, original, src, caption, alt, ...props}) => {
	const { lg, xl, xxl } = props
	const Image = fluid ? <Zoom wrapStyle={{width: '100%'}}><GatsbyImg tw="w-full" fluid={fluid} original={original} alt={alt ?? caption ?? ""}/></Zoom> : <Zoom tw="w-full"><img tw="w-full" src={src} alt={alt ?? caption ?? ""}/></Zoom>
	const ImageWithCaption = (
		<> {Image}
		   {caption && <Caption tw="opacity-75">{caption}</Caption>} 
		</>
	)

	return (!lg && !xl && !xxl) ? <div {...props}>{ImageWithCaption}</div> : <Fluid {...props}>{ImageWithCaption}</Fluid>

}

export const Img = styled(UnstyledImg)(({xs, sm, md, lg, xl, xxl}) => [
	css`margin-bottom: ${theme('spacing.md')}; margin-top: ${theme('spacing.md')}; & div {width: 100%;}`,
	xs && css`max-width:${sizes['xs']}`,
	sm && css`max-width:${sizes['sm']}`,
	md && css`max-width:${sizes['md']}`,
	lg && css`& > div { max-width: ${sizes['lg']} }`,
	xl && css`& > div { max-width: ${sizes['xl']} }`,
	xxl && css`& > div { max-width: ${sizes['xxl']} }`,
])