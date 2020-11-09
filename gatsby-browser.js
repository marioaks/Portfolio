// import 'Config/style/global2.css'
import React from "react";
import { GlobalLayout } from "Layouts";
import 'lazysizes';
import 'csshake/dist/csshake.min.css'
import ragadjust from "./src/utils/ragadjust";


// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>
}

export const onPreRouteUpdate = () => {
  window.scrollTo(0,0)
}

export const onRouteUpdate = () => {
	ragadjust('h1, h2, h3, h4, h5, h6, p, li, dd, span', 'all');
}