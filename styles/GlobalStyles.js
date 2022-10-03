import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: "radnike_next";
  src: url("/static/radnikanext-medium-webfont.woff2")
  format("woff2");
  font-weight: normal;
  font-style: normal;
}

html {
  --red: #ff0000;
  --black: #393939;
  --white: #fff;
  --gray: #3a3a3a;
  --lightGray: #e1e1e1;
  --offWhite: #ededed;
  --mw: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.89);
  box-sizing: border-box;
}

body {
  font-family: "radnika_next", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
}

button {
  font-family: "radnika_next", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
`;
