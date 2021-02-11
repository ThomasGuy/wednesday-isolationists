import React from 'react';
import { Link } from 'gatsby';
import { Head } from './styles';

const Header = ({ setArt, setSub }) => {
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
  );
};

export default Header;
