import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import PictureBox from './PictureBox'
import Layout from './Layout'

const GalleryLayout = styled.div`
  display: grid;
  ${'' /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */}
  grid-template-columns: 1fr;
  grid-gap: 30px;
  ${'' /* grid-auto-rows: 15px; */}

  @media screen and (min-width: 320px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 538px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`

const Gallery = ({data, location}) => {
  const imageData = data.allMarkdownRemark.edges.reduce((acc, bun) => {
    acc[bun.node.frontmatter.slug] = bun.node.frontmatter
    return acc
  }, {})

  const renderGallery = () => {
    return data.allFile.edges.map(({node}) => {
      return (
        <div key={node.id}>
          <PictureBox
            fluid={node.childImageSharp.fluid}
            alt={node.relativePath.split('.')[0]}
            meta={imageData[node.relativePath]}
            location={location}
          />
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
      <h1>{title()}</h1>
      <GalleryLayout>{renderGallery()}</GalleryLayout>
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
      filter: {extension: {regex: "/(jpg)/"}, relativePath: {in: $slugs}}
    ) {
      edges {
        node {
          base
          relativePath
          childImageSharp {
            fluid(maxWidth: 280) {
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
            subject
            slug
          }
        }
      }
    }
  }
`
