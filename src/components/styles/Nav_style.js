import styled from 'styled-components';
import { animated } from 'react-spring';

export const AniNav = styled(animated.div)`
  position: fixed;
  overflow-y: scroll;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 10px;
  background: #524763;
  z-index: 10;

  ul {
    list-style: none;
  }

  a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
  }

  a:hover {
    transition: 0.3s ease border;
    border-bottom: solid 4px transparent;
  }

  nav {
    list-style: none;
  }
`;
