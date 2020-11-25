import React from "react";
import { useDarkMode } from "Context"
import { H2, H5, H6, PaddedContainer, MultiColumnLayout, Divider, QuoteBlock } from "Components";
import tw, {css} from "twin.macro"
import Img from "gatsby-image"
import ResumePdf from "Assets/files/resume.pdf"
import { graphql, Link } from "gatsby"
import { ResumeSection, ResumeItem, ResumeItemHeader, ResumeItem2 } from "Components/Resume"

const AboutPage = ({ data }) => {
	const [isDarkMode] = useDarkMode()

	return (
	<PaddedContainer>
		<MultiColumnLayout tw="lg:col-count-2">
			{/* <H2 paragraph>My work lies in the intersection of code, design, data, and whatever subject I’m interested in on a particular day. </H2> */}
			<H2 paragraph>My work lies at the intersection of code, design, and data. I turn complex ideas into creative digital products.</H2>

			<H5 paragraph>I was born and raised in Mexico City in a Turkish-American household. I went on to study at the University of Pennsylvania, graduating with honors and a degree and in Computer Science and Economics. Since then, I’ve designed and developed 20+ data-rich large-scale applications, cooked up a multitude of complex algorithms, given lectures at my alma mater, and been featured multiple times on The Rachel Maddow Show. </H5>
			<H5 paragraph>There is no such thing as a typical day on the job for me. On some days I’ll be writing production-level software from scratch, and on others I’ll be working on scrappy prototypes. Some days I’m designing unique product experiences, while others I’m reading research papers on geospatial AI, information design, economics and game theory. All this is to say that I do lots of things! </H5>
			<H5 paragraph>My most advanced skill to date is front-end development. Having a strong foundation in FE allows me to execute all sorts of cool and interesting ideas. I see coding – like design, data science, or data visualization – as a tool to be used in service of these ideas. Sometimes they require writing some heavy-duty code but sometimes they require no coding at all. I like to think of myself as an ideas person rather than a coder — someone with a unique combination of qualities, interests, and skills who can both think up and execute ideas in all different forms. </H5>
			<H5 paragraph>For the last few years I’ve been working at Topos, a startup based in New York City developing a holistic understanding of cities through the interconnected lenses of data and artificial intelligence. </H5>
			<H5 paragraph>When I’m not working, I’m either playing guitar, riding my bike around NYC, reading in the park, or discovering cool coffee shops.</H5>

			<div css={[tw`mt-xl`, css`max-width: 500px;`]}>
				<Img tw='mb-xs' fluid={data.profileImage.childImageSharp.fluid} />
			</div>
		</MultiColumnLayout>

		<Divider/>

		<H2>C.V.</H2>
		<a href={ResumePdf} download><H6 tw="mb-md">Download PDF</H6></a>

		<MultiColumnLayout>
			<ResumeSection>
				<H5 paragraph><b>Experience</b></H5>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">Lead UX/UI Developer, Topos</H5>
						<H6 className="subheader"> New York, NY | 2017 - 2020</H6>
					</ResumeItemHeader>
					<H6> As first employee, established company’s front-end development processes — tech stack, best practices, and hiring approach.</H6>
					<H6> Led front-end team in development of 10+ production-level React applications; built products for leading companies in Commercial Real Estate, Retail, Technology, and Public Health.</H6>
					<H6> Member of three-person product team that roadmapped and managed all new and existing products – served as team’s technical voice.</H6>
					<H6> Built Covid-19 Compiler featured extensively on the Rachel Maddow Show. User base in the hundreds of thousands at it's peak.</H6>
					<H6> Ideated, designed, and developed geospatial front-end prototypes from scratch, aiming to find product-market fit. </H6>
					<H6> Created multiple algorithms for optimizing store locations — one awaiting patent.</H6>
					<H6> Contributed to the research and writing of various articles on the Topos Blog.</H6>
				</ResumeItem>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">Product Designer, Behavery</H5>
						<H6 className="subheader">Philadelphia, PA | 2016 - 2017</H6>
					</ResumeItemHeader>
					<H6> Redesigned and reinvented entire front-end for Behavery App.</H6>
					<H6> Created design prototypes that helped secure funding from Gates Foundation in Oct. 2016.</H6>
				</ResumeItem>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">Chief Financial Officer, ILMUNC</H5>
						<H6 className="subheader">Philadelphia, PA | 2014 - 2017</H6>
					</ResumeItemHeader>
					<H6> Oversaw all matters related to business development, financial planning, and marketing. Managed $350,000 in annual revenue </H6>
					{/* <H6> Held profit & loss responsibilities for the educational nonprofit.</H6> */}
					<H6> Formalized legal and accounting processes by hiring bookkeepers, accountants, and lawyers </H6>
					{/* <H6> Led contract negotiations and managed relationships with key partners including University of Pennsylvania, World Strides (backed by Carlyle Group), and travel partners from India, Brazil, and China </H6> */}
					{/* <H6> Elected to Board of Directors after raising sponsorship revenues by 100%</H6> */}
				</ResumeItem>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">Head TA for Intro to Decision Theory, Univeristy of Pennsylvania</H5>
						<H6 className="subheader">Philadelphia, PA | 2017</H6>
					</ResumeItemHeader>
					<H6> Aided Dr. Sumantra Sen in all course matters</H6>
					<H6> Graded all homeworks, midterms, and finals</H6>
				</ResumeItem>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">Research Assistant, University of Pennsylvania</H5>
						<H6 className="subheader">Philadelphia, PA | 2017</H6>
					</ResumeItemHeader>
					<H6> Programmed web scrapers to measure monthly traffic data for peer-to-peer companies and services in hundreds of countries. </H6>
					<H6> Collected data went into the first global index of the Sharing Economy. </H6>
				</ResumeItem>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">Software Engineering Intern, ListenFirst Media</H5>
						<H6 className="subheader">New York, NY | May 2015 - Aug. 2015</H6>
					</ResumeItemHeader>
					<H6> Refactored bloated web application into smaller components using internal Tile Framework</H6>
					<H6> Generated D3 data visualizations from large amounts of data collected from social media</H6>
				</ResumeItem>
			</ResumeSection>
			<ResumeSection>
				<H5 paragraph><b>Education</b></H5>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">University of Pennsylvania</H5>
						<H6 className="subheader">Philadelphia, PA | Graduated in 2017</H6>
					</ResumeItemHeader>
					<H6> Bachelor of Arts</H6>
					<H6> Computer Science & Economics Double Major</H6>
					<H6> Discrete Math, Software Engineering, Web Programming, Data Structures, Algorithmic Game Theory, Micro/Macro Economics, Econometrics, Statistics, Graphic Design</H6>
				</ResumeItem>

				<ResumeItem>
					<ResumeItemHeader isDarkMode={isDarkMode}>
						<H5 className="header">The American School Foundation</H5>
						<H6 className="subheader">Mexico City | Graduated in 2013</H6>
					</ResumeItemHeader>
				</ResumeItem>
			</ResumeSection>			

			<div>
			<ResumeSection>
				<H5 paragraph><b>Publications and Mentions</b></H5>
				<MultiColumnLayout tw="col-count-2 xl:col-count-1">
					<ResumeItem>
						<H6><b>On <Link to="/the-covid-19-compiler/">The COVID-19 Compiler:</Link></b></H6>

						<H6> <a href="https://www.msnbc.com/transcripts/rachel-maddow-show/2020-04-21-msna1350876">The Rachel Maddow Show</a></H6>
						<H6> <a href="http://cooper.edu/architecture/news/covid-19-compiler-transforms-pandemic-data"> Cooper Union</a></H6>

					</ResumeItem>

					<ResumeItem>
						<H6><b>On <Link to="/archive/">Visualizing COVID-19 Beyond Counties:</Link></b></H6>

						<H6> <a href="https://www.brownalumnimagazine.com/articles/2020-08-27/disparate-data">Brown Alumni Magazine</a></H6>
						<H6> <a href="https://penntoday.upenn.edu/news/maps-pandemics-and-reckoning-history">Penn Today</a></H6>

					</ResumeItem>

					<ResumeItem>
						<H6><b>On <Link to="/the-next-wave/">The Next Wave:</Link></b></H6>

						<H6> <a href="https://theeconreview.com/2017/12/16/coffee-location-decisions/">NYU's The Economics Review</a></H6>
						<H6> <a href="https://github.com/moorebryan/CoFFee-Shop-Blues">Inspired Github Project</a></H6>
					</ResumeItem>

					<ResumeItem>
						<H6><b>On <Link to="/band-on-the-run/">Band on the Run:</Link></b></H6>

						<H6> <a href="https://www.fastcompany.com/90162559/a-fascinating-look-at-how-musicians-tour-the-u-s">Fast Company</a></H6>
					</ResumeItem>
				</MultiColumnLayout>

			</ResumeSection>

			<ResumeSection>
				<H5 paragraph><b>Talks and Workshops</b></H5>
				<H6 style={{marginBottom: '0.5rem'}}> 2020 - Mapping and Geospatial Data Visualization Guest Lecture at The University of Pennsylvania</H6>
				<H6> 2018 - Data Visualization Guest Lecture at The University of Pennsylvania</H6>
			</ResumeSection>


			<ResumeSection>
				<H5 paragraph><b>Testimonials</b></H5>
				<QuoteBlock>
					<H6>“Everyone is trying to do their own data visualization tools because the U.S. government is putting out basically nothing useful. But this at least as of today is the handiest thing I've seen so far to figure out basically what parts of country ought to be freaking out a little bit more than they are.”</H6>
					<H6><b>— Rachel Maddow on <Link to="/the-covid-19-compiler/">“The COVID Compiler”</Link></b></H6>
				</QuoteBlock>

				<QuoteBlock>
					<H6> “I always enjoy seeing someone do the best version of a thing. This analysis is inspirational for anyone trying to come to a specific answer to a complicated problem.”</H6>
					<H6><b>— Tristan Handy on my article <Link to="/the-next-wave/">“The Next Wave”</Link></b></H6>
				</QuoteBlock>

				{/* <QuoteBlock> */}
				{/* 	<H6> “Mahir quote / Will Quote / Brian Quote”</H6> */}
				{/* 	<H6><b>— Mahir Yavuz</b></H6> */}
				{/* </QuoteBlock> */}
			</ResumeSection>
			</div>
			<ResumeSection>
				<H5 paragraph><b>Skills</b></H5>

				<MultiColumnLayout tw="col-count-2 xl:col-count-1">
				<ResumeItem2>
					<H6>Software Skills</H6>
					<H6>Javascript</H6>
					<H6>React</H6>
					<H6>GraphQL</H6>
					<H6>Apollo</H6>
					<H6>Gatsby</H6>
					<H6>React Native</H6>
					<H6>React Native Web</H6>
					{/* <H6>Expo</H6> */}
					<H6>DeckGL.js</H6>
					<H6>GeoJson/TopoJson</H6>
					<H6>Mapbox</H6>
					{/* <H6>S2/H3 Cells</H6> */}
					{/* <H6>LESS/SASS</H6> */}
					<H6>Webpack</H6>
					<H6>Babel</H6>
					{/* <H6>Auth0</H6> */}
					{/* <H6>Firebase</H6> */}
					<H6>Node</H6>
					{/* <H6>Express</H6> */}
					{/* <H6>AntDesign</H6> */}
					{/* <H6>Tailwind</H6> */}
					{/* <H6>Emotion</H6> */}
					{/* <H6>ESLint</H6> */}
					{/* <H6>Npm/Yarn</H6> */}
					<H6>Python</H6>
					<H6>SQL</H6>
					<H6>and more...</H6>
				</ResumeItem2>

				<ResumeItem2>
					<H6>Design Skills</H6>
					<H6>Sketch</H6>
					<H6>Figma</H6>
					<H6>Photoshop</H6>
					<H6>InDesign</H6>
					{/* <H6>Data Visualization</H6> */}
					{/* <H6>UX Research</H6> */}
					{/* <H6>Designing for Development</H6> */}
				</ResumeItem2>

				<ResumeItem2>
					<H6>Other Skills</H6>
					<H6>Fluent Spanish</H6>
					<H6>Team Management</H6>
					<H6>Product Ideation and Planning</H6>
					<H6>Data Science</H6>
					<H6>Game Theoretic Modeling</H6>
					<H6>Algorithm Design</H6>
				</ResumeItem2>
				</MultiColumnLayout>
			</ResumeSection>
		</MultiColumnLayout>
	</PaddedContainer>
)
}

export default AboutPage


export const AboutQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "assets/images/profile-pic.jpeg" }) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`