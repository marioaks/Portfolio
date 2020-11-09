import { useEffect } from "react";
import { gsap } from "gsap";
import { theme } from "twin.macro"
import { mapRange, getNumericStyleProp } from "Utils";
import paper from 'paper';
import SimplexNoise from 'simplex-noise';

const useBlobAnimation = () => {
	useEffect(() => {
		const canvas = document.getElementById("blob-canvas");
		const navbar = document.getElementById("main-nav");

		const strokeColor = theme('colors.primary.default');
		const fillColor = theme('colors.primary.default');	
		const strokeWidth = 3, segments = 7;
		const stuckPaddingY = 5, stuckPaddingX = 10, radiusPadding = 6
		let navPaddingTop = getNumericStyleProp(navbar, 'paddingTop')
		let radius = getNumericStyleProp(navbar, 'height') / 2 + radiusPadding;
		
		let blobPosition = {x: window.innerWidth / 2, y: -100};

		let isBlobStuck = false, 
			needsRescale = true,
			stuckPosition = {x: 0, y: 0}, 
			stuckSize = {width: radius * 2, height: radius * 2};

		let noiselessSegments = [],
			noiseScale = 250, // speed
			noiseRange = 8, // range of distortion
			resetSpeed = .05, hoverSpeed = .3;

		const initAnimation = () => {
			paper.setup(canvas);

			const blob = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
		    const circle = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);

		    blob.strokeColor = strokeColor;
	    	blob.strokeWidth = strokeWidth;
	    	blob.fillColor = fillColor;
	    	// blob.fillColor.alpha = .5;
	    	blob.smooth();
	    	circle.smooth();

	    	let group = new paper.Group([blob]);
	    	group.applyMatrix = false;

	    	const noiseObjects = blob.segments.map(() => new SimplexNoise());
	    	
			//animationLoop
			let debouncedTime = -1
			paper.view.onResize = function(event) {
				navPaddingTop = getNumericStyleProp(navbar, 'paddingTop')
				const newRadius = getNumericStyleProp(navbar, 'height') / 2 + radiusPadding
				circle.scale(newRadius / radius)
				radius = newRadius
				needsRescale = true
            };

		    paper.view.onFrame = event => {
		      //Remove noise by resetting blob to original circle
		      const backToNavbar = event.time > debouncedTime
		      if (needsRescale && (isBlobStuck || (!isBlobStuck && backToNavbar)) ){ 
		      	blob.segments.forEach((segment, i) => {
	              segment.point.set(circle.segments[i].point.x, circle.segments[i].point.y);
	            });
	            noiselessSegments = []

				if (!isBlobStuck) needsRescale = false
		      }
		    	
		      if (!isBlobStuck && backToNavbar) {
		      	//either reset blob position to navbar or follow mouse position on a delay
		      	noiseRange = 4

		      	blobPosition = gsap.utils.interpolate(
		      		{x: blobPosition.x, y: blobPosition.y},
		      		{x: window.innerWidth / 2, y: navPaddingTop + radius - radiusPadding},
		      		resetSpeed
		      	)

		      	blob.fillColor = fillColor
		      	canvas.style['mix-blend-mode'] = 'multiply'

		      	group.position = new paper.Point(blobPosition.x, blobPosition.y);
		      } else if (!isBlobStuck) {
		      	blobPosition = stuckPosition
		      	group.position = new paper.Point(stuckPosition.x, stuckPosition.y);
		      } else {
		      	//reset blob position to center of hovered link
		      	noiseRange = 8;

		      	blobPosition = gsap.utils.interpolate(
		        	{x: blobPosition.x, y: blobPosition.y},
		        	{x: stuckPosition.x, y: stuckPosition.y},
		        	hoverSpeed
		        )

		        blob.fillColor = theme('colors.background');
		      	group.position = new paper.Point(blobPosition.x, blobPosition.y);
		      	debouncedTime = event.time + .2

		      	//rescale default circle to size of hovered link
		      	if (needsRescale) {
		      	  blob.scale([(stuckSize.width + stuckPaddingX) / (radius * 2), (stuckSize.height + stuckPaddingY) / (radius * 2)])
		      	  needsRescale = false
		      	}
		      }

		      // save array of scaled circle segments
	          if (noiselessSegments.length === 0) {
	            blob.segments.forEach((segment, i) => {
	              noiselessSegments[i] = [segment.point.x, segment.point.y];
	            });
	          }
	          
	          // add noise to blob
	          blob.segments.forEach((segment, i) => {
	            // get new noise value
	            // we divide event.count by noiseScale to get a very smooth value
	            const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0);
	            const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1);
	            
	            // map the noise value to our defined range
	            const distortionX = mapRange(noiseX, -1, 1, -noiseRange, noiseRange);
	            const distortionY = mapRange(noiseY, -1, 1, -noiseRange, noiseRange);
	            
	            // apply distortion to coordinates
	            const newX = noiselessSegments[i][0] + distortionX;
	            const newY = noiselessSegments[i][1] + distortionY;
	            
	            // set new (noisy) coodrindate of point
	            segment.point.set(newX, newY);
	          });
	         
	          blob.smooth();
		    }

		    return () => paper.view.remove()
		}

		const initListeners = () => {
	    	const handleMouseEnter = e => {
	        	const navItem = e.currentTarget.querySelector("#target") ?? e.currentTarget
	        	canvas.style['mix-blend-mode'] = navItem.getAttribute('blob-overlay') ?? 'multiply'
	        	const { left, top, width, height } = navItem.getBoundingClientRect();
	        	stuckPosition = { x: Math.round(left + width / 2), y: Math.round(top + height / 2)}
	        	stuckSize = {width, height}
	        	isBlobStuck = true;
	        	needsRescale = true;
	    	};
	      
	    	const handleMouseLeave = () => {
	    	    isBlobStuck = false;
	    	    needsRescale = true;
	    	};

	    	const handlePageScroll = () => {
	    	    isBlobStuck = false;
	    	    needsRescale = true;
	    	};
	      
	      // add event listeners to all items
	    	const linkItems = document.querySelectorAll(".blob-target");
	    	linkItems.forEach(item => {
	    		item.addEventListener("mouseenter", handleMouseEnter);
	    		item.addEventListener("mouseleave", handleMouseLeave);
	    	});

	    	window.addEventListener('scroll', handlePageScroll)

	    	return () => {
	    		linkItems.forEach(item => {
			        item.removeEventListener("mouseenter", handleMouseEnter);
			        item.removeEventListener("mouseleave", handleMouseLeave);
			    })
			    window.removeEventListener('scroll', handlePageScroll);
	    	};
	    }

	    const unsubscribeAnimation = initAnimation()
	    const unsubscribeLinkListeners = initListeners()

	    return () => {
		   	unsubscribeAnimation()
		    unsubscribeLinkListeners()
		};
	}, [window.location.href])
};

export default useBlobAnimation