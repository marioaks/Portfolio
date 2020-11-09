import React from 'react';
import tw, { styled, css } from "twin.macro";
import useBlobAnimation from "./useBlobAnimation";

const NavBlob = () => {
	useBlobAnimation()

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