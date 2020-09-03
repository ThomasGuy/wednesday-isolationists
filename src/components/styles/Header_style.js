import styled from 'styled-components'

export const Head = styled.header`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;

  .items {
    min-width: 100px;
    max-width: 180px;
    margin: 5px;
    background-color: purple;
    border-radius: 20px;
    flex: 1 1 auto;
    box-shadow: 2px 4px #b9b3b3aa;
    color: lightgrey;

    a {
      text-decoration: none;
      color: lightgrey;
    }
  }
`
