import React from "react";
import { TwoColumnLayout, H3, H5, H6, P2 } from "Components"
import tw, { styled, css } from "twin.macro";
import { Link } from "gatsby"

const ResumeSection = tw(TwoColumnLayout)`mb-sm md:mb-md`
const SectionHeader = tw(H5)`py-xs`

const resumeItemStyles = [
	tw`grid gap-sm grid-cols-2 mb-xs`,
	css`grid-template-columns: 40px 1fr`
]

const ResumeItem = ({title, extra, children}) => (
	<div css={resumeItemStyles} className="blob-target">
		<H6 tw="w-lg">{extra}</H6>
		<div>
			<P2 id="target" css={[tw`text-primary-default mb-xs`, css`width: fit-content`]}>
				{title}
			</P2>
			{children}
		</div>
	</div>
)


const Resume = () => (
	<div>
		<H3 tw="pb-xs lg:pb-sm" paragraph>For a more detailed look at what I’ve done to date, <Link to="/work">download my resume</Link>.</H3>
		<ResumeSection>
			<SectionHeader tw="first:col-span-all">Experience</SectionHeader>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>

			<SectionHeader>Talks and Workshops</SectionHeader>

			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
		</ResumeSection>
		<ResumeSection>
			<SectionHeader>Education</SectionHeader>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>

			<SectionHeader>Skills</SectionHeader>

			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
			<ResumeItem
				extra="2020 – 2018"
				title="UX UI Developer @ Topos"
			>
				<P2 paragraph>UX UI Developer @ Topos – All text is placeholder! Worked on a multitude of projects for clients such as Samsung, Columbia Univeristy, the Rachel Maddow Show, etc. My work ranged from data science, economics. Built roughly 15+ tested and production ready platforms as well as many more prototypes. </P2>

				<P2 paragraph>I initially started as a Front-end developer but eventually became both an engineering manager runngained a seat</P2>
			</ResumeItem>
		</ResumeSection>
	</div>
)

export default Resume