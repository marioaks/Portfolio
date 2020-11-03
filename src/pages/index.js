import React, { useEffect } from "react"
import { Link } from "gatsby"
import tw, { css, styled, theme } from "twin.macro"

const PageContainer = styled.div([
  tw`px-sm md:px-md lg:px-lg xl:px-xl`
])

const PageTitle = styled.div([
  tw`mb-xl`,
  css`
    & h2 {
      cursor: pointer;
      color: ${theme`colors.primary.default`};
      & span {
        display: inline-block;
        margin-right: .6rem;
        /*background-image: linear-gradient(
        transparent 50%,
          ${theme`colors.primary.lighter`}1a 5px
        );
        background-size: 0%;
        background-repeat: no-repeat;
        display: inline;
        transition: 0.5s ease;*/
        /*filter: blur(0px);*/
        /*transition: filter .1s;*/
        /*&:hover {*/
          /*background-size: 100%;*/
          /*font-style: italic;*/
          /*filter: blur(15px)*/
        /*}*/
      }
    }

  `
])

const InfoGrid = styled.div([
  tw`grid gap-sm md:gap-lg lg:gap-lg xl:gap-lg m-md sm:m-lg md:m-xl`,
  css`
    & { 
      /*max-width: 700px;*/
      grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
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
      & > h6 {
        
        padding-inline-start: 1ch;
        list-style-type: "~";
        display: list-item;

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
      <div tw="mb-sm">
        <h6 className="info" tw="uppercase">{title}</h6>
      </div>
    }
    <ul tw="p-0">
      {list.map((item, i) => item?.linkTo ? 
        <h6 className="info">
          <Link style={{filter: `hue-rotate(${(360 / list.length) + ((360 / list.length) * i)}deg)`}} tw="text-gray-dark" to={item.linkTo}>
            {item.text}
          </Link> 
        </h6> : 
        <h6 className="info no-bullet">{item}</h6> 
      )}
    </ul>
  </div>
)

// ⟶ 
const shakes = ['', '-hard', '-slow', '-little', '-horizontal', '-vertical', '-rotate', '-opacity', '-chunk']

export default function HomePage({data: { allMarkdownRemark: { edges: posts }}}) {
  return (
    <PageContainer>
      <PageTitle><h2>{"My name is Mario Aksiyote and I’m a creative technologist. On one hand, I’m an accomplished UX/UI developer who can both design and build complex front-end applications from scratch. On the other hand, I’m an innovator consistently finding ways to incorprate the cutting edge — game theory, data science, data visualization — into my work.".split(' ').map(word => <span className={`shake${shakes[Math.floor(Math.random() * shakes.length)]}`}>{word} </span>)}</h2></PageTitle>
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
          posts.map(({node: {frontmatter: { title }, fields: { slug }}}) => (
            {text: title, linkTo: slug}
          ))
         }/>
         <InfoGridList tw='col-span-full' list={[{text: "DOWNLOAD MY RESUME", linkTo: 'http://google.com/'}]}/>
        {/* // <ul tw='col-span-full'><li ><h6 className="info shake-little"><Link>DOWNLOAD MY RESUME</Link></h6></li></ul> */}
      </InfoGrid>

    </PageContainer>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query HomePage {
    allMarkdownRemark(limit: 5, sort: {order: DESC, fields: fields___date}) {
      edges {
        node {
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
`;