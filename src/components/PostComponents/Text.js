import React from 'react';
import { H1, H2, H3, H4, H5, H6, P1 } from "../Typography";
import { Divider, MultiColumnLayout } from "../ui";
import { textMaxWidth } from "./utils";
import tw, { css, styled } from "twin.macro"

export const h1 = props => <H1 paragraph {...props}/>
export const h2 = props => <H2 paragraph {...props}/>
export const h3 = props => <H3 paragraph {...props}/>
export const h4 = props => <H4 paragraph {...props}/>
export const h5 = props => <H5 paragraph {...props}/>
export const h6 = props => <H6 paragraph {...props}/>
export const p = props => <P1 paragraph css={css`max-width: ${textMaxWidth}px`}{...props}/>
export const ol = props => <ol tw="font-body-serif" {...props}/>
export const li = ({children, ...props}) => <li {...props}><P1>{children}</P1></li>
const StyledA = tw.a`hover:opacity-75`
export const a = StyledA

const collabLinks = {
	"Topos": "https://topos.com",
	"Bo Han": "https://www.linkedin.com/in/bohan2/",
	"Will Shapiro": "https://www.linkedin.com/in/will-shapiro-ba2477aa/",
	"Mahir Yavuz": "https://mahiryavuz.com/",
	"Ria McIlwraith": "http://lovefromria.com/",
	"Carlo Bailey": "https://carlobailey.com/",
	"Sam Coxon": "https://www.linkedin.com/in/sam-coxon-270312b2/",
	"Sam Burns": "https://samhburns.com/",
	"Ellery Royston": "https://elleryroyston.com/cv/",
	"Eric Buth": "https://github.com/buth"
}

const StyledInfoText = styled(H6)([
	tw`opacity-75`,
	css`margin-bottom: .75rem; max-width: 200px;`
])

export const PostHeader = ({title, subtitle, date, company, collaborators, categories}) => (
	<>
		<H1 css={[
			!subtitle && !date && !company && !collaborators && !categories ? tw`mt-xl` : tw`my-xl`
		]}>{title}</H1>
		{date && <StyledInfoText tw="mb-sm">{date}</StyledInfoText>}

		<MultiColumnLayout  css={[tw`mb-lg xl:col-count-2 lg:col-count-2`, css`max-width: 600px; column-gap: 4rem`]}>
			{company && <StyledInfoText><b>Company:</b> <StyledA href={collabLinks[company] ?? null}>{company}</StyledA></StyledInfoText>}
			{collaborators && <StyledInfoText><b>Collaborators:</b> {collaborators.map((c, i) => <StyledA href={collabLinks[c] ?? null}>{`${c}${i < collaborators.length - 1 ? ", " : ''}`}</StyledA>)}</StyledInfoText>}
			{categories && <StyledInfoText tw="capitalize"><b>Roles: </b> {categories.map(c => c.replace(/-/g, ' ')).join(", ")}</StyledInfoText> }
		</MultiColumnLayout>
		<H4 tw="mt-sm">{subtitle}</H4>
		<Divider/>
	</>
)