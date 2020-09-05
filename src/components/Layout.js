import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { FaEnvelope } from 'react-icons/fa';
import { Link, graphql, useStaticQuery } from 'gatsby';

import GlobalStyles from './globalStyles';
import Nav from './Nav';
import useLists from '../hooks/useLists';
import SEO from './seo';
import Header from './Header';

const META_ISOLATIONISTS = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(META_ISOLATIONISTS);
  const [artists, subjectObj] = useLists();
  const [isArtListOpen, setArtListOpen] = useState(false);
  const [isSubListOpen, setSubListOpen] = useState(false);

  const artList = artists.map(artist => (
    <li key={artist} onClick={() => setArtListOpen(false)}>
      <Link to={`/artists/${artist}`}>{artist}</Link>
    </li>
  ));

  const weeks = Object.fromEntries(
    Object.entries(subjectObj).map(([key, value]) => [parseInt(key.substring(4)), value]),
  );

  const subList = Object.values(weeks).map(subject => (
    <li key={subject} onClick={() => setSubListOpen(false)}>
      <Link to={`/subjects/${subject}`}>{subject}</Link>
    </li>
  ));

  const showArtList = useSpring({
    transform: isArtListOpen ? `translate3d(0,0,0) scale(1)` : `translate3d(-100%,0,0) scale(0.6)`,
  });

  const showSubList = useSpring({
    transform: isSubListOpen ? `translate3d(0,0,0) scale(1)` : `translate3d(-100%,0,0) scale(0.6)`,
  });

  return (
    <>
      <GlobalStyles />
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />

      <div>
        <Header setArt={setArtListOpen} setSub={setSubListOpen} />
        <Nav style={showArtList} list={artList} ordered={false} />
        <Nav style={showSubList} list={subList} ordered={true} />
        <main>{children}</main>
        <footer>
          <a href='mailto:twguy.webdev@gmail.com'>
            TWGuy web development <FaEnvelope />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
