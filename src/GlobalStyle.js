import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /** https://fonts.google.com/share?selection.family=Bitter|Montserrat:wght@400;500;600 **/

  /** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
  }

  /** Montserrat Medium **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    src: url("/fonts/Montserrat-Medium.woff2") format("woff2"),
  }

  /** Montserrat SemiBold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    src: url("/fonts/Montserrat-SemiBold.woff2") format("woff2"),
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    font-weight: 400;
    src: url("/fonts/Bitter-Regular.woff2") format("woff2"),
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text};
    background-color: ${(props) => props.theme.color.background};
  }
`;

export default GlobalStyle;
