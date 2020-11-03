import TiemposHeadlineWOFF from "Assets/fonts/TiemposHeadline-Light.woff";
import TiemposHeadlineWOFF2 from "Assets/fonts/TiemposHeadline-Light.woff"; 
import TiemposTextWOFF from "Assets/fonts/TiemposText-Regular.woff";
import TiemposTextWOFF2 from "Assets/fonts/TiemposText-Regular.woff";
import TiemposTextItalicWOFF from "Assets/fonts/TiemposText-Regular-Italic.woff";
import TiemposTextItalicWOFF2 from "Assets/fonts/TiemposText-Regular-Italic.woff";
import SohneHalbfettWOFF from "Assets/fonts/Sohne-Halbfett.woff";
import SohneHalbfettWOFF2 from "Assets/fonts/Sohne-Halbfett.woff";
import SohneMagerWOFF from "Assets/fonts/Sohne-Mager.woff";
import SohneMagerWOFF2 from "Assets/fonts/Sohne-Mager.woff2";

export default [
  {
    fontFamily: "Tiempos Headline",
    fontWeight: 300,
    fontStyle: "normal",
    src: `url(${TiemposHeadlineWOFF2}) format('woff2'), 
        url(${TiemposHeadlineWOFF}) format('woff')`
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
    fontFamily: "Sohne",
    fontWeight: 400,
    fontStyle: "normal",
    src: `url(${SohneMagerWOFF2}) format('woff2'), 
        url(${SohneMagerWOFF}) format('woff')`
  },
  {
    fontFamily: "Sohne",
    fontWeight: 700,
    fontStyle: "normal",
    src: `url(${SohneHalbfettWOFF2}) format('woff2'), 
        url(${SohneHalbfettWOFF}) format('woff')`
  }
]