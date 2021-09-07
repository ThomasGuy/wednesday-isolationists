import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGrey);
    --offWhite: #ededed;
    --title: #b88f83;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    color: white;
    background-color: #282c34;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.4rem;
  }

  footer {
    margin-top: auto;
    font-size: 0.6rem;
    text-align: center;

    & > a {
      color: #CCCDCE;
      text-decoration: none;
    }
  }

  .sticky {
    position: stuckUpSticky;
    top: 0;
    ${'' /* z-index: 100; */}
  }

  .sticky-wrapper {
    position: relative;
    height: 5rem; /* We need to change this value */

    @media screen and (min-width: 768px) {
      height: 6rem;
    }
  }

  .sticky .sticky-inner {
    padding: 5px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

export default GlobalStyle;
