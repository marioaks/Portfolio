import React, { useEffect } from "react"
import Constants, { fontFaces, styles } from "Config"
import { Navbar, Footer, NavBlob, SEO, GrainyBackground } from "Components";
import { Global } from "@emotion/core"

export default function GlobalLayout({ children }) {
  return (
    <>
      {/* <SEO />  */}
      {fontFaces.map(fontFace => <Global styles={{"@font-face": fontFace}}/>)}
      <Global styles={styles}/>
      {/* <GrainyBackground/> */}
      <NavBlob/>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}