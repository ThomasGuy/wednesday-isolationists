import React from 'react';

import { AniNav } from './styles';

const Nav = ({ style, list }) => (
  <AniNav style={style}>
    <ul>{list}</ul>
  </AniNav>
);

export default Nav;
