import { useEffect } from 'react';

export default function useParallax() {
	useEffect(() => {
		const mojs = require('mo-js');
		const windowCenter = [window.innerWidth / 2, window.innerHeight / 2];
		const projectsContainer = document.querySelector('#projects-wrapper');
		let projects = document.querySelectorAll('.project');

		function animateItems() {
			const origin = `${windowCenter[0]}px ${windowCenter[1]}px`;
			const inEasing = mojs.easing.cubic.in;
			let i = projects.length;

			mojs.h.setPrefixedStyle(projectsContainer, 'perspective-origin', origin);
			while (i--) {
				const projectDiv = projects[i];
				if (!projectDiv) continue;
				const { top, bottom } = projectDiv.getBoundingClientRect();
				// this is a hack! for some reason the nodes dont work initially so i requery projects if the nodes dont work.
				// this means that we can't display: none because this will run endlessly
				if (top === 0 && bottom === 0) projects = document.querySelectorAll('.project');
				let opacity;
				// let transform, opacity

				const centerY = (top + bottom) / 2;

				// const distFromBottom = Math.abs(windowCenter[1] - bottom)
				const distFromCenter = centerY < 0 ? Math.abs(centerY) : centerY > window.innerHeight ? Math.abs(window.innerHeight - centerY) : 0;
				const a = 3.5 - (15 * distFromCenter) / window.innerHeight;
				// const b = 2.5 - 2 * distFromCenter / window.innerHeight

				const delta = mojs.helpers.clamp(inEasing(a), 0.03, 1);
				// deltaFromCenter = mojs.helpers.clamp(inEasing(b), 0.03, 1),
				const deltaShift = mojs.h.clamp(inEasing(a), 0.03, 1);
				const isDeltaChanged = projectDiv.prevDelta !== delta;
				const isDeltaShiftChanged = projectDiv.prevDeltaShift !== deltaShift;

				if (isDeltaChanged || isDeltaShiftChanged) {
					// const translateZ = -150 * inEasing(1 - deltaShift)
					// transform = `scale(${delta}) translateZ(${translateZ}px)`
					opacity = delta;
				}

				// mojs.h.setPrefixedStyle(projectDiv, 'transform', transform);
				mojs.h.setPrefixedStyle(projectDiv, 'opacity', opacity);
				projectDiv.prevDelta = delta;
				projectDiv.prevDeltaShift = deltaShift;
			}

			requestAnimationFrame(animateItems);
			return () => {
				cancelAnimationFrame(animateItems);
			};
		}

		const unsubscribeAnimateItems = animateItems();

		return () => {
			unsubscribeAnimateItems();
		};
	}, []);
}
