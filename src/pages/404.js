import React from 'react';
import { Link } from 'gatsby';
import { PaddedContainer, H1, H6 } from 'Components';

const MissingPage = () => (
	<PaddedContainer style={{ textAlign: 'center' }}>
		<H1 paragraph>404</H1>
		<Link to='/'>
			<H6>Go back home</H6>
		</Link>
	</PaddedContainer>
);

export default MissingPage;
