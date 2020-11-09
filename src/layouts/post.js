import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { P1, H1, H2, H3, H4, H5, H6, PaddedContainer } from "Components"

const IMAGE_KEY = "test";

const components = {
  Img,
  p: props => <P1 paragraph {...props}/>,
  h1: props => <H1 paragraph {...props}/>,
  h2: props => <H2 paragraph {...props}/>,
  h3: props => <H3 paragraph {...props}/>,
  h4: props => <H4 paragraph {...props}/>,
  h5: props => <H5 paragraph {...props}/>,
  h6: props => <H6 paragraph {...props}/>,
};

const PostLayout = ({ id, slug, next, prev, data: {mdx: { body, frontmatter: { title, embeddedImages } } } }) => {
  console.log(id, slug, next, prev)

  const embeddedImagesByKey =
    embeddedImages &&
    embeddedImages.reduce((images, image, index) => {
      images[`${IMAGE_KEY}${index + 1}`] = images[
        `${IMAGE_KEY}-${index + 1}`
      ] || {
        ...image.childImageSharp,
      };
      return images;
    }, {});

  return (
    <MDXProvider components={components}>
      <PaddedContainer>
        <H1>{title}</H1>
        <MDXRenderer embeddedImages={embeddedImagesByKey}>{body}</MDXRenderer>
      </PaddedContainer>
    </MDXProvider>
  );
};

export const post = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        embeddedImages {
          childImageSharp {
            original {
              width
              height
              src
            }
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PostLayout;