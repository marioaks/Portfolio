import TiemposHeadlineWOFF from "Assets/fonts/TiemposHeadline-Light.woff";
import TiemposHeadlineWOFF2 from "Assets/fonts/TiemposHeadline-Light.woff2"; 
import TiemposHeadlineItalicWOFF from "Assets/fonts/TiemposHeadline-LightItalic.woff";
import TiemposHeadlineItalicWOFF2 from "Assets/fonts/TiemposHeadline-LightItalic.woff2"; 
import TiemposTextWOFF from "Assets/fonts/TiemposText-Regular.woff";
import TiemposTextWOFF2 from "Assets/fonts/TiemposText-Regular.woff2";
import TiemposTextMediumWOFF from "Assets/fonts/TiemposText-Medium.woff";
import TiemposTextMediumWOFF2 from "Assets/fonts/TiemposText-Medium.woff2";
import TiemposTextItalicWOFF from "Assets/fonts/TiemposText-Regular-Italic.woff";
import TiemposTextItalicWOFF2 from "Assets/fonts/TiemposText-Regular-Italic.woff2";
import SohneLeichtWOFF from "Assets/fonts/Sohne-Leicht.woff";
import SohneLeichtWOFF2 from "Assets/fonts/Sohne-Leicht.woff2";
import SohneBuchWOFF from "Assets/fonts/Sohne-Buch.woff";
import SohneBuchWOFF2 from "Assets/fonts/Sohne-Buch.woff2";


export default [
  {
    fontFamily: "Tiempos Headline",
    fontWeight: 300,
    fontStyle: "normal",
    src: `
    	url(${TiemposHeadlineWOFF2}) format('woff2'), 
        url(${TiemposHeadlineWOFF}) format('woff')`
  },
  {
    fontFamily: "Tiempos Headline",
    fontWeight: 300,
    fontStyle: "italic",
    src: `
      url(${TiemposHeadlineItalicWOFF2}) format('woff2'), 
        url(${TiemposHeadlineItalicWOFF}) format('woff')`
  },
  {
    fontFamily: "Tiempos Text",
    fontWeight: 400,
    fontStyle: "normal",
    src: `url(${TiemposTextWOFF2}) format('woff2'), 
        url(${TiemposTextWOFF}) format('woff')`
  },
  {
    fontFamily: "Tiempos Text",
    fontWeight: 400,
    fontStyle: "italic",
    src: `url(${TiemposTextItalicWOFF2}) format('woff2'), 
        url(${TiemposTextItalicWOFF}) format('woff')`
  },
  {
    fontFamily: "Tiempos Text",
    fontWeight: 500,
    fontStyle: "normal",
    src: `url(${TiemposTextMediumWOFF2}) format('woff2'), 
        url(${TiemposTextMediumWOFF}) format('woff')`
  },
  {
    fontFamily: "Sohne",
    fontWeight: 400,
    fontStyle: "normal",
    src: `url(${SohneBuchWOFF2}) format('woff2'), 
        url(${SohneBuchWOFF}) format('woff')`
  },
  // {
  //   fontFamily: "Sohne",
  //   fontWeight: 700,
  //   fontStyle: "normal",
  //   src: `url(${SohneHalbfettWOFF2}) format('woff2'), 
  //       url(${SohneHalbfettWOFF}) format('woff')`
  // },
  {
    fontFamily: "Sohne",
    fontWeight: 300,
    fontStyle: "normal",
    src: `url(${SohneLeichtWOFF2}) format('woff2'), 
        url(${SohneLeichtWOFF}) format('woff')`
  }
]