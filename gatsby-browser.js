// import 'Config/style/global2.css'
import React from "react";
import { GlobalLayout } from "Layouts";
import 'Config/style/fontawesome';
import 'lazysizes';
import 'csshake/dist/csshake.min.css'

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>
}

export const onPreRouteUpdate = () => {
  window.scrollTo(0,0)
}