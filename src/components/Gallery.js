/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { graphql } from 'gatsby';

import PictureBox from './PictureBox';
import ModalBox from './ModalBox';
import Layout from './Layout';
import Modal from './Modal';
import { GalleryLayout } from './styles';
import StickyTitle from './StickyTitle';
import { artistName } from '../utils/artists';

const Gallery = ({ data, location }) => {
  const [on, toggle] = useState(false);
  const [index, setIndex] = useState(0);
  const [isSticky, setSticky] = useState(false);
  const isArtistPage = location.pathname.includes('artists');
  const ref = useRef(null);

  // stick the Artist Title Bar to the top of the page
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // setSticky(isArtistPage && ref.current.getBoundingClientRect().top <= 0);
        setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [ref]);

  // Object for image metadata.. N.B. var 'bun' as in current bun
  const imageData = data.allMarkdownRemark.edges.reduce((acc, bun) => {
    acc[bun.node.frontmatter.slug] = bun.node.frontmatter;
    return acc;
  }, {});

  // imaage files with metadata for this Gallery
  const thisGalleryFluid = data.allFile.edges.map(({ node }) => (
    <PictureBox
      key={node.id}
      fluid={node.childImageSharp.fluid}
      alt={node.relativePath.split('.')[0]}
      pathname={location.pathname}
      meta={imageData[node.relativePath]}
    />
  ));

  // imaage files without metadata for this Gallery modal
  const thisGalleryModal = data.allFile.edges.map(({ node }) => (
    <ModalBox
      key={node.id}
      fluid={node.childImageSharp.fluid}
      alt={node.relativePath.split('.')[0]}
      meta={imageData[node.relativePath]}
    />
  ));

  // modal event handler
  const onModalClick = idx => {
    setIndex(idx);
    toggle(true);
  };

  // render gallery
  const renderGallery = () =>
    thisGalleryFluid.map((picture, idx) => (
      <div key={picture.key} onClick={() => onModalClick(idx)}>
        {picture}
      </div>
    ));

  // render title
  const title = () => {
    const value = Object.values(imageData)[0];
    return isArtistPage ? artistName[value.artist] : value.subject;
  };

  return (
    <Layout title={title()}>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <StickyTitle title={title()} isArtist={isArtistPage} />
      </div>

      {!on && <GalleryLayout>{renderGallery()}</GalleryLayout>}

      <Modal on={on} toggle={toggle} gallery={thisGalleryModal} index={index} />
    </Layout>
  );
};

// props
Gallery.defaultProps = {
  location: {},
};

export default Gallery;
// Note 'slugs' here is an array of 'relativePath'
export const artistQuery = graphql`
  query galleryQuery($slugs: [String!]!) {
    allFile(
      filter: { relativePath: { in: $slugs } }
      sort: { fields: childImageSharp___fluid___aspectRatio, order: DESC }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 350) {
              ...GatsbyImageSharpFluid
            }
          }
          id
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { slug: { in: $slugs } } }) {
      edges {
        node {
          frontmatter {
            artist
            dimensions
            subject
            slug
            date
            week
            sold
          }
        }
      }
    }
  }
`;
