import React from 'react';

import { AniNav } from './styles';

const Nav = ({ style, list, ordered }) => {
  return <AniNav style={style}>{ordered ? <ol>{list}</ol> : <ul>{list}</ul>}</AniNav>;
};

export default Nav;
