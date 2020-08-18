import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
  }
  body {
    margin: 0 auto;
    color: white;
    background-color: #282c34;
    max-width: 1280px;
    padding: 0.1rem 0.8rem;
  }
`

export default GlobalStyle
