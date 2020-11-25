import React from 'react';
import { Navbar, Footer } from 'Components';

const GlobalLayout = ({ element }) => (
	<div>
		<Navbar />
		{element}
		<Footer />
	</div>
);

export default GlobalLayout;
