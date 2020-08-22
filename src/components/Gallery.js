import React, { useState, useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
// import { useSpring } from 'react-spring'

import PictureBox from './PictureBox'
import ModalBox from './ModalBox'
import Layout from './Layout'
import Modal from './Modal'
import { GalleryLayout } from './styles'
import StickyTitle from './StickyTitle'

const Gallery = ({ data, location }) => {
  const [on, toggle] = useState(false)
  const [index, setIndex] = useState(0)
  const [isArtistPage] = useState(location.pathname.includes('artists'))
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)

  const handleScroll = () => {
    if (ref.current) {
      setSticky(isArtistPage && ref.current.getBoundingClientRect().top <= 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const imageData = data.allMarkdownRemark.edges.reduce((acc, bun) => {
    acc[bun.node.frontmatter.slug] = bun.node.frontmatter
    return acc
  }, {})

  const thisGalleryFluid = data.allFile.edges.map(({ node }) => {
    return (
      <PictureBox
        key={node.id}
        fluid={node.childImageSharp.fluid}
        alt={node.relativePath.split('.')[0]}
        meta={imageData[node.relativePath]}
        pathname={location.pathname}
      />
    )
  })

  const thisGalleryModal = data.allFile.edges.map(({ node }) => {
    return (
      <ModalBox
        key={node.id}
        fluid={node.childImageSharp.fluid}
        alt={node.relativePath.split('.')[0]}
      />
    )
  })

  const onModalClick = idx => {
    setIndex(idx)
    toggle(true)
  }

  const renderGallery = () => {
    return thisGalleryFluid.map((picture, idx) => {
      return (
        <div key={picture.key} onClick={() => onModalClick(idx)}>
          {picture}
        </div>
      )
    })
  }

  const title = () => {
    const value = Object.values(imageData)[0]
    return isArtistPage ? value.artist : value.subject
  }

  return (
    <Layout>
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <StickyTitle title={title()} isArtist={isArtistPage} />
      </div>

      {!on && <GalleryLayout>{renderGallery()}</GalleryLayout>}

      <Modal on={on} toggle={toggle} gallery={thisGalleryModal} index={index} />
    </Layout>
  )
}

Gallery.defaultProps = {
  location: {},
}

export default Gallery
export const artistQuery = graphql`
  query galleryQuery($slugs: [String!]!) {
    allFile(
      filter: { relativePath: { in: $slugs } }
      sort: { fields: childImageSharp___fluid___aspectRatio, order: DESC }
    ) {
      edges {
        node {
          base
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
          }
        }
      }
    }
  }
`
