import { Link } from "gatsby"
import React from "react"
import { H1 } from "./Typography"

// const HeaderRoot = styled.header([
//   // tailwind only style
//   tw`bg-color-blue-600 mb-6`,
// ])
// 
// const HeaderContainer = styled.div([
//   // inject tailwind into css block
//   css`
//     ___CSS_0___
//     max-width: 1100px;
//     padding: 1.45rem 1.0875rem;
//   `
// ])
// 
// const HeaderLink = styled(Link)([
//   // use tailwind and css block separately if you prefer
//   tw`text-black`,
//   css`
//     text-decoration: none;
//   `,
// ])

const Header = ({ siteTitle }) => (
  <H1>{siteTitle}</H1>
  // <HeaderRoot>
  //   <HeaderContainer>
  //     <h1 css={[tw`m-4`]}>
  //       <HeaderLink
  //         to="/"
  //       >
  //         {siteTitle}
  //       </HeaderLink>
  //     </h1>
  //   </HeaderContainer>
  // </HeaderRoot>
)

export default Header