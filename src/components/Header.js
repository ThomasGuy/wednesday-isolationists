import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Head = styled.header`
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

const Header = ({setArt, setSub}) => {
  return (
    <Head>
      <button className="items">
        <Link to="/">Home</Link>
      </button>
      <button className="items" onClick={() => setArt(true)}>
        Artists
      </button>
      <button className="items" onClick={() => setSub(true)}>
        Subjects
      </button>
    </Head>
  )
}

export default Header
