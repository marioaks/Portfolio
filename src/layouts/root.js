import React, { useEffect } from 'react';
import ContextProvider, { useDarkMode } from 'Context';
import { Global } from '@emotion/core';
import { fontFaces, styles } from 'Config';

import { SEO } from 'Components';

const DarkModeProvider = ({ children }) => {
	const [isDarkMode] = useDarkMode();

	useEffect(() => {
		document.documentElement.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
		document.documentElement.classList.remove(isDarkMode ? 'light-mode' : 'dark-mode');

		return function cleanup() {
			document.documentElement.classList.remove('dark-mode');
			document.documentElement.classList.remove('light-mode');
		};
	}, [isDarkMode]);

	return <>{children}</>;
};

const RootLayout = ({ element }) => {
	return (
		<ContextProvider>
			<DarkModeProvider>
				<SEO />
				{fontFaces.map(fontFace => (
					<Global key={fontFace.src} styles={{ '@font-face': fontFace }} />
				))}
				<Global styles={styles} />
				{element}
			</DarkModeProvider>
		</ContextProvider>
	);
};

export default RootLayout;
