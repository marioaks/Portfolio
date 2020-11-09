import React from "react"
import { Link } from "gatsby"
import tw, { css, styled, theme } from "twin.macro"
import { H1, H2, H5, P2, H4, H3, PaddedContainer } from "Components"

const PageContainer = styled.div([
  tw`px-sm md:px-md lg:px-lg xl:px-xl`
])

const PageTitle = styled.div([
  tw`mb-xl`,
  css`
    cursor: pointer;
    // color: ${theme`colors.primary.default`};
    @media only screen and (min-width: ${theme('screens.md.min')}) {
      & h2 {
        
        font-size: 4vw;
        line-height: 4.5vw;
        /*font-size: 3.5em;
        letter-spacing: 0;
        line-height: 1.15em;*/
      }
    }
    

  `
])

const InfoGrid = styled.div([
  tw`grid gap-xl m-md sm:m-lg md:m-xl`,
  css`
    & { 
      /*max-width: 700px;*/
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    /*& a {
      background-image: linear-gradient(
        transparent 0%,
        ${theme`colors.primary.default`} 0px
      );
      background-size: 0%;
      background-repeat: no-repeat;
      display: inline;
      transition: 0.5s ease;
    }
    & a:hover {
      color: white;
      background-size: 100%;
    }*/
    ul {
      margin-left: 1.4ch;
      & > h5 {
        
        padding-inline-start: 1ch;
        list-style-type: "⟶";
        display: list-item;
        margin-bottom: 10px;

        &.no-bullet {
          cursor: text;
          padding-inline-start: 0ch;
          display: block;
          margin-left: -1.2ch;
        }

        & > a {
          /*margin-left: 1ch;*/
          cursor: pointer;
          text-decoration: underline;
          text-transform: uppercase;
          background-position: 100% 100%;
          background-repeat: no-repeat;
          background-size: 100% 0rem;
          background-image: linear-gradient(#ffd17d, #ffd17d);
          transition: background-size .3s;
          &:hover {
            background-size: 100% 100%;
            /*background-image: linear-gradient(#ffd17d, #ffd17d);*/
            text-decoration: none;
          }
          
        }
        
      }
    }
  `
])

const InfoGridList = ({ title, list, ...props }) => (
  <div key={title ?? list[0]?.text ?? list[0]} {...props}>
    {title && 
      <div tw="mb-xs">
        <H5 tw="uppercase font-bold">{title}</H5>
      </div>
    }
    <ul tw="p-0">
      {list.map((item, i) => item?.linkTo ? 
        <H5>
          <Link 
            style={{filter: `hue-rotate(${(360 / list.length) + ((360 / list.length) * i)}deg)`}} 
            tw="text-gray-dark" to={item.linkTo}>
            {item.text}
          </Link> 
        </H5> : 
        <H5 className="no-bullet">{item}</H5> 
      )}
    </ul>
  </div>
)

// ⟶ 
export default function HomePage(
  {data: { allMdx: { edges: posts }}}
) {
  return (
    <PaddedContainer>
      <PageTitle><H2>{"Hey, my name is Mario Aksiyote and I’m a creative technologist. On one hand, I’m an accomplished UX/UI developer who can both design and build complex front-end applications from scratch. On the other hand, I’m an innovator consistently finding ways to incorprate the cutting edge — game theory, data science, data visualization — into my work.".split(' ').map(word => <><span tw="hover:text-primary-default" className="blob-target">{word}</span>{" "}</>)}</H2></PageTitle>
      <InfoGrid>
        <InfoGridList title="What I do" list={[
          "UX UI Development", 
          "Product Design", 
          "Data Visualization", 
          "Algorithm innovation", 
          "Data Science", 
          "Graphic Design"
        ]}/>
        <InfoGridList title="Connect" list={[
          {text: "Email", linkTo: 'http://google.com/'},
          {text: "LinkedIn", linkTo: 'http://google.com/'},
          {text: "Github", linkTo: 'http://google.com/'},
          {text: "Dribbble", linkTo: 'http://google.com/'},
          {text: "Twitter", linkTo: 'http://google.com/'},
          {text: "Instagram", linkTo: 'http://google.com/'}
        ]}/>
        <InfoGridList tw='col-span-2' title="Recent Work" list={
          [...posts.map(({node: {frontmatter: { title }, fields: { slug }}}) => (
            {text: title, linkTo: slug}
          )), {text: "MORE", linkTo: '/work'}]
         }/>
         <InfoGridList tw='col-span-full' list={[{text: "DOWNLOAD MY RESUME", linkTo: 'http://google.com/'}]}/>
      </InfoGrid>

    </PaddedContainer>
  )
}


export const post = graphql`
  query PostQUery {
    allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}, limit: 5, sort: {order: DESC, fields: fields___date}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`