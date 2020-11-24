import React from "react"
import { Navbar, Footer, NavBlob } from "Components";

const GlobalLayout = ({ element, props }) => (
  <div>
    {/* <SEO />  */}
    {/* <GrainyBackground/> */}
    {/* <NavBlob pathname={props.location.pathname}/> */}
    <Navbar/>
    {element}
    <Footer/>
  </div>
)


export default GlobalLayout