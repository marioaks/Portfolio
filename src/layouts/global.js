import React from "react"
import { Navbar, Footer, NavBlob } from "Components";

const GlobalLayout = ({ element }) => 
  <>
    {/* <SEO />  */}
    {/* <GrainyBackground/> */}
    <NavBlob/>
    <Navbar/>
    {element}
    <Footer/>
  </>

export default GlobalLayout