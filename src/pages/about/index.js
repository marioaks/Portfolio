import React from "react";
import Img from "gatsby-image"
import Resume from "./resume"
import Testimonials from "./testimonials"
import tw, {css} from 'twin.macro'
import { graphql, Link } from "gatsby"
import { TwoColumnLayout, PaddedContainer, Quote, H2, H3, H4, H5, H6, P2, Divider, Caption } from "Components"

const QuoteBlock = tw.div`mb-md`
const StyledQuote = tw(H6)`italic pl-xs mb-xs border-solid border-0 border-l-1 border-gray-light`
const ColumnSection = tw.div`mb-xl`
const ColumnSectionHeader = tw(H3)`mb-sm`
const H6Bold = tw(H6)`font-bold mt-sm uppercase`

const AboutPage = ({data}) => (
	<PaddedContainer>
		<TwoColumnLayout>

			<ColumnSection>
				<H2 tw="mb-xl" paragraph>Mario Aksiyote, UX/UI developer, product designer & creative leader.</H2>
				<H5 paragraph>I am constantly working on making beautiful products and unique experiences that change the way we understand the world. Most recently, I was at Topos, a small startup based in New York City using Artificial Intelligence to uncover the nuanced underpinnings of urban culture and the interaction between people and place.</H5>	
				
			</ColumnSection>

			<ColumnSection>		
				{/* <ColumnSectionHeader paragraph>About</ColumnSectionHeader> */}
				<H6 paragraph>I was born and raised in Mexico City in a Turkish-American household. I went on to study at the University of Pennsylvania, graduating with a degree in Economics and Computer Science. Since then, I’ve designed and developed 20+ data-rich large-scale applications, cooked up a multitude of complex algorithms, given lectures at my alma mater, and been featured multiple times on The Rachel Maddow Show. Other than product design and development, my work consistantly spans the fields of data visualization, algorithmic game theory, AI/ML, and economics to name a few. </H6>
				<H6 paragraph>When I’m not working on tech stuff, I’m either playing guitar, riding my bike around NYC, reading in the park, or discovering cool coffee shops.</H6>
				<H6 paragraph>I’m currently open to new opportunities, let me know if you think we’d be a good match!</H6>
			</ColumnSection>

<Img

				css={[tw`mb-sm`, css`display: inline-block; width: 100%; max-width: 400px; margin: auto`]}
	        	fluid={data.profileImage.childImageSharp.fluid}
	        	alt=""
    	/>


		</TwoColumnLayout>
		<Divider large/>

		<H2 tw="mb-xl" paragraph>C.V.</H2> 

		<TwoColumnLayout>
			<ColumnSection>
					<ColumnSectionHeader paragraph>Experience</ColumnSectionHeader>
					<div>

					<H6Bold>UX UI Developer @ Topos</H6Bold>
					<H6 paragraph>2018 - 2020</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>
					
					<div>
					<H6Bold>UX UI Developer @ Topos</H6Bold>
					<H6 paragraph>2018 - 2020</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>
					
					<div>
					<H6Bold>UX UI Developer @ Topos</H6Bold>
					<H6 paragraph>2018 - 2020</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>

					<div>
					<H6Bold>UX UI Developer @ Topos</H6Bold>
					<H6 paragraph>2018 - 2020</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>
					<div>
					<H6Bold>UX UI Developer @ Topos</H6Bold>
					<H6 paragraph>2018 - 2020</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>
					<div>
					<H6Bold>UX UI Developer @ Topos</H6Bold>
					<H6 paragraph>2018 - 2020</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>
				</ColumnSection>


				<ColumnSection>
					<ColumnSectionHeader paragraph>Education</ColumnSectionHeader>
					<div>

					<H6Bold>Univeristy of Pennsylvania</H6Bold>
					<H6 paragraph>2013 - 2017</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>
					<div>
					<H6Bold>The American School Foundation A.C. in Mexico City</H6Bold>
					<H6 paragraph>2018 - 2020</H6>
					<H6 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes.</H6>
					</div>
				</ColumnSection>


				<ColumnSection>
				<ColumnSectionHeader paragraph>Skills</ColumnSectionHeader>
				<H6Bold paragraph>Software</H6Bold>
				<H6 paragraph>Javascript, ReactJS (Redux, Context API, Hooks, Babel, Webpack, ESLint, Suspense), HTML/CSS/LESS/SASS, RESTful & GraphQL APIs, Apollo.js, DeckGL.js, D3.js, Mapbox, Gatsby, Auth0, Firebase, Node, Express, Python, GIT, AntDesign, Npm/Yarn, SQL, Java, Google Analytics, Heap Analytics</H6>
				<H6Bold paragraph>Design</H6Bold>
				<H6 paragraph>Wireframing (Sketch & Figma), Data Visualization, Graphic Design (Photoshop & InDesign), UX Research, Designing for Development</H6>
				<H6Bold paragraph>Other</H6Bold>
				<H6 paragraph>Bilingual (English & Spanish), Team Management & Delegation, Product Ideation and Planning, Data Science & Game Theoretic Modeling, Algorithms</H6>
			</ColumnSection>

			<ColumnSection>
				<ColumnSectionHeader paragraph>Publications and Mentions</ColumnSectionHeader>
				<H6Bold paragraph>2020</H6Bold>
				<H6 paragraph>Publication 1</H6>
				<H6 paragraph>Publication 1</H6>
				<H6 paragraph>Publication 1</H6>
			</ColumnSection>
			<ColumnSection>
				<ColumnSectionHeader paragraph>Talks and Workshops</ColumnSectionHeader>
				<H6Bold paragraph>2020</H6Bold>
				<H6 paragraph>Talk 1</H6>
			</ColumnSection>
			<ColumnSection>

				<ColumnSectionHeader paragraph>Testimonials</ColumnSectionHeader>
				<QuoteBlock>
					<StyledQuote>“I always enjoy seeing someone do the best version of a thing. This analysis is inspirational for anyone trying to come to a specific answer to a complicated problem.”</StyledQuote>
					<H6 tw="font-bold">––– Tristan Handy on my article <Link to="/work">“The Next Wave”</Link></H6>
				</QuoteBlock>
				<QuoteBlock>
					<StyledQuote>“Everyone is trying to do their own data visualization tools because the U.S. government is putting out basically nothing useful. But this at least as of today is the handiest thing I've seen so far to figure out basically what parts of country ought to be freaking out a little bit more than they are.”</StyledQuote>
					<H6 tw="font-bold">––– Rachel Maddow on <Link to="/work">The COVID Compiler</Link></H6>
				</QuoteBlock>
				<QuoteBlock>
					<StyledQuote>“Mahir quote / Will Quote / Brian Quote”</StyledQuote>
					<H6 tw="font-bold">––– Mahir Yavuz</H6>
				</QuoteBlock>	
			</ColumnSection>
		</TwoColumnLayout>
	 */}
		{/* <TwoColumnLayout> */}
		{/* 		<ColumnSection> */}
		{/* 			<ColumnSectionHeader paragraph>For a more detailed look at what I’ve done to date, <Link to="/work">download my resume</Link>.</ColumnSectionHeader> */}
		{/* 		</ColumnSection> */}
		{/* 		 */}
		{/* 		 */}
		{/* 	</TwoColumnLayout> */}
		{/* 		 */}
	</PaddedContainer>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "assets/images/profile-pic.jpeg" }) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
    profileImage2: file(relativePath: { eq: "assets/images/profile-pic2.jpeg" }) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
    profileImage3: file(relativePath: { eq: "assets/images/profile-pic3.jpeg" }) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`