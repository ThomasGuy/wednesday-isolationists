import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
  }
  body {
    margin: 0;
    color: white;
    background-color: #282c34;
    maxwidth: 1080;
    padding: 0.1rem 0.8rem;
  }
`

export default GlobalStyle
