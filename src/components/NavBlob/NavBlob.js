import React from 'react';
import useBlobAnimation from "./useBlobAnimation";

const NavBlob = ({pathname}) => {
	useBlobAnimation(pathname)

	return (
		<canvas 
			id="blob-canvas" 
			style={{
				position: 'fixed', 
				top: 0, 
				left: 0, 
				width: '100vw', 
				height: '100vh', 
				zIndex: 100000, 
				pointerEvents: 'none'
			}} 
			resize="true"
		/>
	)
}

export default NavBlob