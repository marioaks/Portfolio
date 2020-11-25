import { GlobalLayout, RootLayout } from 'Layouts';
import 'Config/style/fontawesome';
import 'lazysizes';
import 'react-medium-image-zoom/dist/styles.css';

export const wrapRootElement = RootLayout;
export const wrapPageElement = GlobalLayout;

export const shouldUpdateScroll = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

	return false;
};
