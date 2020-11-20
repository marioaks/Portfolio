import React from "react"
import { Navbar, Footer, NavBlob } from "Components";

const GlobalLayout = ({ element, props }) => (
  <>
    {/* <SEO />  */}
    {/* <GrainyBackground/> */}
    <NavBlob pathname={props.location.pathname}/>
    <Navbar/>
    {element}
    <Footer/>
  </>
)


export default GlobalLayout