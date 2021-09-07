import React from 'react';
import { Link } from 'gatsby';
import { Head } from './styles';

const Header = ({ setArt, setSub }) => (
  <Head>
    <button type="button" className="items">
      <Link to="/">Home</Link>
    </button>
    <button type="button" className="items" onClick={() => setArt(true)}>
      Artists
    </button>
    <button type="button" className="items" onClick={() => setSub(true)}>
      Subjects
    </button>
  </Head>
);

export default Header;
