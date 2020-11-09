import React from 'react'
import { Quote, H3, P2 } from "Components"
import { Link } from "gatsby"
import tw from "twin.macro"

const QuoteBlock = tw.div`mb-lg`
const StyledQuote = tw(Quote)`pl-xs mb-xs border-solid border-0 border-l-1 border-gray-light`

const Testimonials = () => (
	<>
		<H3 tw="pb-xs lg:pb-sm" paragraph>Some Testimonials </H3>

		<QuoteBlock>
			<StyledQuote>“I always enjoy seeing someone do the best version of a thing. This analysis is inspirational for anyone trying to come to a specific answer to a complicated problem.”</StyledQuote>
			<P2>––– Tristan Handy on my article <Link to="/work">“The Next Wave”</Link></P2>
		</QuoteBlock>

		<QuoteBlock>
			<StyledQuote>“Everyone is trying to do their own data visualization tools because the U.S. government is putting out basically nothing useful. But this at least as of today is the handiest thing I've seen so far to figure out basically what parts of country ought to be freaking out a little bit more than they are.”</StyledQuote>
			<P2>––– Rachel Maddow on <Link to="/work">The COVID Compiler</Link></P2>
		</QuoteBlock>

		<QuoteBlock>
			<StyledQuote>“Mahir quote / Will Quote / Brian Quote”</StyledQuote>
			<P2>––– Mahir Yavuz</P2>
		</QuoteBlock>
	</>
)

export default Testimonials