import React from "react";
import _ from 'lodash'
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { css } from "twin.macro"
import { PaddedContainer, PostsList } from "Components"
import PostComponents from "Components/PostComponents"

const PostMdxLayout = ({ data: {relevant1, relevant2, relevant3, relevant4, mdx: { body, frontmatter: { embeddedImages, ...frontmatter } } }, ...props }) => {

  const embeddedImagesByKey = (embeddedImages ?? []).reduce((imageObj, image) => {
    const { childImageSharp, name, publicURL } = image
     imageObj[_.camelCase(name)] = childImageSharp ? {...childImageSharp} : {src: publicURL}
     return imageObj
   }, {})

  return (
    <MDXProvider components={PostComponents}>
      <PaddedContainer>
        <div css={[css`max-width: 1000px; width: 100%; margin: 5rem auto;`]}>
          <PostComponents.BackButton/>
          <PostComponents.PostHeader {...frontmatter}/>
          <MDXRenderer embeddedImages={embeddedImagesByKey}>{body}</MDXRenderer>
          <PostComponents.MorePostsFooter title={frontmatter.name} posts={[{node: relevant1}, {node: relevant2}, {node:relevant3}, {node:relevant4}]}/>
        </div>
      </PaddedContainer>
    </MDXProvider>
  );
};

export const post = graphql`
  query($id: String, $relevant1: String, $relevant2:String, $relevant3:String, $relevant4:String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
        date
        title
        subtitle
        categories
        company
        collaborators
        embeddedImages {
          name
          publicURL
          childImageSharp {
            original {
              width
              height
              src
            }
            fluid(quality: 100, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    relevant1: mdx(id: { eq: $relevant1 }) {
      id
      fields {
        slug
      }
      frontmatter {
        name
        description
        thumbnail {
          childImageSharp {
            original {
              src
              width
              height
            }
            fluid(maxWidth:1600, quality:100) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }
    }
    relevant2: mdx(id: { eq: $relevant2 }) {
      id
      fields {
        slug
      }
      frontmatter {
        name
        description
        thumbnail {
          childImageSharp {
            original {
              src
              width
              height
            }
            fluid(maxWidth:1600, quality:100) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }
    }
    relevant3: mdx(id: { eq: $relevant3 }) {
      id
      fields {
        slug
      }
      frontmatter {
        name
        description
        thumbnail {
          childImageSharp {
            original {
              src
              width
              height
            }
            fluid(maxWidth:1600, quality:100) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }
    }
    relevant4: mdx(id: { eq: $relevant4 }) {
      id
      fields {
        slug
      }
      frontmatter {
        name
        description
        thumbnail {
          childImageSharp {
            original {
              src
              width
              height
            }
            fluid(maxWidth:1600, quality:100) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }
    }
  }
`;

export default PostMdxLayout;