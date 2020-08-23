import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
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
    color: #CCCDCE;
    text-align: center;
  }

  .sticky {
    position: sticky;
    top: 0;
    ${'' /* z-index: 100; */}
  }

  .sticky-wrapper {
    position: relative;
    height: 3rem; /* We need to change this value */

    @media screen and (min-width: 768px) {
      height: 4rem;
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
