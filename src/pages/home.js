import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import { useDarkMode } from "Context";
import tw, { css, styled, theme } from "twin.macro";
import { H1, H5, H6, H4, InnerPaddedContainer, PaddedContainer, MultiColumnLayout, Divider } from "Components";
import isPropValid from '@emotion/is-prop-valid'

const StyledDivider = styled(Divider)([
  css`
    margin: 6vw 0;
    @media only screen and (max-width: ${theme('screens.sm.min')}) {
      margin: 10vw 0;
    }
  `
])
const colorOnHover = props => !props.isDarkMode ? 
    css`&:hover { color: ${theme('colors.primary')};};` 
    : css`&:hover { color: ${theme('colors.secondary')};} `

const StyledIntroText = styled(H5)([
  // tw`cursor-pointer`, 
  css`max-width: 600px; & em { text-decoration: underline; }`,
  // colorOnHover
])

const IntroSection = ({ isDarkMode }) => (
  <>
    <StyledIntroText isDarkMode={isDarkMode}>
      Hey there. I'm Mario Aksiyote. I'm a collaborative, adaptable, and creative UX/UI developer from Mexico City. I'm someone who can take a product idea from end to end — from a napkin sketch to a real shipped product. I'm frequently <em>coding</em>, occasionally <em>designing</em>, and always <em>creating</em>. Have a look around, and don't miss out clicking on the blob above!
    </StyledIntroText>
    <StyledDivider/>
  </>
)


const PostsLinkStyle = [
  tw`font-header-sans font-bold xs:mt-lg`,
  css`
    word-break: break-all;
    max-width: 1200px;
    letter-spacing: -0.1rem;
  `
]
const PostsSlash = styled.span([ tw`font-light italic font-header-serif`, (props => !props.isDarkMode ? tw`text-primary` : tw`text-secondary`)])


const StyledLink = styled(Link, { shouldForwardProp: isPropValid })([
  tw`no-underline cursor-pointer`,
  colorOnHover
])

const PostsSection = ({ posts, isDarkMode }) => (
  <>
    <H5 paragraph>Some Recent Work</H5>
    <H1 css={PostsLinkStyle}>{
      posts.map(({node: {id, frontmatter: { name }, fields: { slug }}}, i) => (
        <Fragment key={id}>
            <StyledLink isDarkMode={isDarkMode} to={slug}>
              {name}
            </StyledLink>
          <PostsSlash isDarkMode={isDarkMode}>&nbsp;/</PostsSlash>
          {" "}
        </Fragment>
      ))}
        <StyledLink isDarkMode={isDarkMode} to="/work">
          See all projects
        </StyledLink>
    </H1>
    <StyledDivider/>
  </>
)

const StyledGrid = styled(MultiColumnLayout)([
  tw`lg:col-count-3 md:col-count-3 sm:col-count-2 col-gap-xl`,
  css`

  &>div {
    margin-bottom: 5rem;
  }
    /*margin-left: auto;*/
    /*max-width: 1000px;*/
/*    & h6 {
      max-width: 200px;
    }*/
    & h4 {
      margin-bottom: 0.8rem;
    }

/*    & > div > h5:first-of-type {
      margin-bottom: 1rem;
    }*/

    & ul {
      padding-left: 1.5rem;
      margin: 0;
      li {
        list-style: none;
        transform: translateX(-3ch);
      }
      & a > li {
        list-style-type: "⟶";
        padding-inline-start: 1.5ch;
        transition: transform 100ms;
        transform: translateX(0);
        &:hover {
          transform: translateX(1.5ch)
        }
      }
    }
  `
])

const InfoGrid = () => (
  <InnerPaddedContainer>
  <StyledGrid>
    <div css={css`max-width: 200px`}>
      <H6 paragraph>—</H6>
    <H6>I'm currently hearing out new opportunities. I'd love to hear from you if you think we'd be a good match!</H6>
    </div>
    {/* <StyledGrid> */}
    
    <div>
      <H6 paragraph>What I do</H6>
      <ul>
        <li><H4>UX UI Development</H4></li>
        <li><H4>Data Visualization</H4></li>
        <li><H4>Algorithm innovation</H4></li>
        <li><H4>Product Design</H4></li>
        <li><H4>Data Science</H4></li>
        <li><H4>Graphic Design</H4></li>
      </ul>
    </div> 

    <div>
      <H6 paragraph>Contact Me</H6>
      <ul>
        <a href="mailto:maksiyote@gmail.com"><li><H4>Email</H4></li></a>
        <a href="https://www.linkedin.com/in/marioaks/"><li><H4>LinkedIn</H4></li></a>
        <a href="https://github.com/marioaks"><li><H4>Github</H4></li></a>
        <a href="https://twitter.com/maksiyote"><li><H4>Twitter</H4></li></a>
        <a href="https://www.instagram.com/maksiyote/"><li><H4>Instagram</H4></li></a>
      </ul>
    </div>
    {/* </StyledGrid> */}
  </StyledGrid>
  </InnerPaddedContainer>
)

export default function HomePage({data: { allMdx: { edges: posts }}}) {
  const [isDarkMode] = useDarkMode()

  return (
    <PaddedContainer>
      <IntroSection isDarkMode={isDarkMode}/>
      <PostsSection isDarkMode={isDarkMode} posts={posts}/>
      <InfoGrid/>
    </PaddedContainer>
  )
}

export const HomeQuery = graphql`
  query get5RecentPosts {
    allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}, limit: 6, sort: {order: ASC, fields: frontmatter___order}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            name
          }
        }
      }
    }
  }
`