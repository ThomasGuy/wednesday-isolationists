import React, { useState } from 'react'
import { graphql } from 'gatsby'

import PictureBox from './PictureBox'
import ModalBox from './ModalBox'
import Layout from './Layout'
import Modal from './Modal'
import { GalleryLayout, Title } from './styles'

const Gallery = ({ data, location }) => {
  const [on, toggle] = useState(false)
  const [index, setIndex] = useState(0)

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
    return location.pathname.includes('artists') ? value.artist : value.subject
  }

  return (
    <Layout>
      <Title>{title()}</Title>

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
