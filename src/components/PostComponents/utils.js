import { jsx } from '@emotion/react';

export const textMaxWidth = 650
export const cloneElement = (element, props) =>
  jsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });

export const sizes = {
	xs: '320px',
	sm: '650px',
	md: '768px',
	lg: '1000px',
	xl: '1250px',
	xxl: '2000px',
}

export const getMaxWidth = ({xs, sm, md, lg, xl, xxl}) => {
	const size = xxl ? 'xxl' : (xl ? 'xl' : (lg ? 'lg' : (md ? 'md' : (sm ? 'sm' : (xs ? 'xs' : null)))))
	return sizes[size]
}