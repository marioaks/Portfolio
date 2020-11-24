// import 'Config/style/global2.css'
import { GlobalLayout, RootLayout } from "Layouts";
// import {ragAdjust} from "Utils";
import "Config/style/fontawesome";
import 'lazysizes';
import 'react-medium-image-zoom/dist/styles.css'

export const wrapRootElement = RootLayout
export const wrapPageElement = GlobalLayout

// export const onPreRouteUpdate = () => {
//   window.scrollTo(0,0)
// }

// export const onRouteUpdate = () => {
// 	ragAdjust('h5, h6, p, li, dd', 'all');
// }

export const shouldUpdateScroll = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return false
}