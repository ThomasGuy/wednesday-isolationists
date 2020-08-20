import React, {useState} from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {animated, useSpring} from 'react-spring'

import PictureBox from './PictureBox'
import Layout from './Layout'
import Modal from './Modal'

const GalleryLayout = styled(animated.div)`
  color: white;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`

const Title = styled.div`
  text-align: center;
  margin: 1rem;
  font-size: 2rem;
  font-weight: 900;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`

const Gallery = ({data, location}) => {
  const [on, toggle] = useState(false)
  const [index, setIndex] = useState(0)
  const fader = useSpring({
    opacity: on ? 0.3 : 1,
  })

  const imageData = data.allMarkdownRemark.edges.reduce((acc, bun) => {
    acc[bun.node.frontmatter.slug] = bun.node.frontmatter
    return acc
  }, {})

  const thisGallery = data.allFile.edges.map(({node}) => {
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

  const onModalClick = idx => {
    setIndex(idx)
    toggle(true)
  }

  const renderGallery = () => {
    return thisGallery.map((picture, idx) => {
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

      {!on && <GalleryLayout style={fader}>{renderGallery()}</GalleryLayout>}

      <Modal on={on} toggle={toggle} gallery={thisGallery} index={index} />
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
      filter: {relativePath: {in: $slugs}}
      sort: {fields: childImageSharp___fluid___aspectRatio, order: DESC}
    ) {
      edges {
        node {
          base
          relativePath
          childImageSharp {
            fluid(maxWidth: 350) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
          id
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {slug: {in: $slugs}}}) {
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
