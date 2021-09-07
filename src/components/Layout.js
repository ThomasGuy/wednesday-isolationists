/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { FaEnvelope } from 'react-icons/fa';
import { Link, graphql, useStaticQuery } from 'gatsby';

import GlobalStyles from './globalStyles';
import Nav from './Nav';
import useLists from '../hooks/useLists';
import { artistName } from '../utils/artists';
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

const Layout = ({ children, title = '', description = '' }) => {
  const data = useStaticQuery(META_ISOLATIONISTS);
  const [artists, subjectObj] = useLists();
  const [isArtListOpen, setArtListOpen] = useState(false);
  const [isSubListOpen, setSubListOpen] = useState(false);

  const artList = artists.map(artist => (
    <li key={artist} onClick={() => setArtListOpen(false)}>
      <Link to={`/artists/${artist}`}>{artistName[artist]}</Link>
    </li>
  ));

  const subList = Object.entries(subjectObj).map(([week, subject]) => (
    <li key={subject} onClick={() => setSubListOpen(false)}>
      <Link to={`/subjects/${subject}`}>{`${week} - ${subject}`}</Link>
    </li>
  ));

  const showArtList = useSpring({
    transform: isArtListOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(-100%,0,0) scale(0.6)`,
  });

  const showSubList = useSpring({
    transform: isSubListOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(-100%,0,0) scale(0.6)`,
  });

  return (
    <>
      <GlobalStyles />
      <SEO
        title={title || data.site.siteMetadata.title}
        description={description || data.site.siteMetadata.description}
      />

      <Header setArt={setArtListOpen} setSub={setSubListOpen} />
      <Nav style={showArtList} list={artList} />
      <Nav style={showSubList} list={[...subList].reverse()} />
      <main>{children}</main>
      <footer>
        <a href="mailto:twguy.webdev@gmail.com">
          TWGuy web development <FaEnvelope />
        </a>
      </footer>
    </>
  );
};

export default Layout;
