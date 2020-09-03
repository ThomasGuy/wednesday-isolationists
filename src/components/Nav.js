import React from 'react'

import { AniNav } from './styles'

const Nav = ({ style, list }) => {
  return (
    <AniNav style={style}>
      <nav>{list}</nav>
    </AniNav>
  )
}

export default Nav
