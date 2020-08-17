import React from 'react'
import styled from 'styled-components'
import {animated} from 'react-spring'

const AniNav = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 10px;
  background: #524763;
  z-index: 10;

  a {
    display: block;
    text-align: left;
    font-size: 2rem;
    color: white;
    text-decoration: none;
    transition: 0.3s ease border;
    border-bottom: solid 4px transparent;
  }

  nav {
    list-style: none;
  }
`

const Nav = ({style, list}) => {
  return (
    <AniNav style={style}>
      <nav>{list}</nav>
    </AniNav>
  )
}

export default Nav
