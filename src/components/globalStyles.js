import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0 auto;
    color: white;
    background-color: #282c34;
    max-width: 1380px;
    padding: 0.1rem 0.8rem;
  }

  .site {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .site-content {
    flex-grow: 1;
  }

  .sticky {
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .sticky-wrapper {
    position: relative;
    height: 3rem; /* We need to change this value */
  }

  .sticky .sticky-inner {
    padding: 5px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .footer {
    font-size: 0.6rem;
    color: #CCCDCE;
    text-align: center;
  }
`

export default GlobalStyle
