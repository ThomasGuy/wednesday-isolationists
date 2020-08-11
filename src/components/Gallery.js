import React from "react"
import { graphql } from "gatsby"

import PictureBox from "./PictureBox"
import Layout from "./Layout"

const GalleryArtist = ({ data }) => {
  const imageData = data.allMarkdownRemark.edges.reduce((acc, bun) => {
    acc[bun.node.frontmatter.slug] = bun.node.frontmatter
    return acc
  }, {})
  const renderGallery = () => {
    return data.allFile.edges.map(({ node }) => {
      return (
        <div key={node.id}>
          <PictureBox
            fluid={node.childImageSharp.fluid}
            alt={node.base.split(".")[0]}
            meta={imageData[node.relativePath]}
          />
        </div>
      )
    })
  }

  return (
    <Layout>
      <h4>Gallery</h4>
      <div>{renderGallery()}</div>
    </Layout>
  )
}

export default GalleryArtist
export const artistQuery = graphql`
  query galleryArtist($slugs: [String!]!) {
    allFile(
      filter: { extension: { regex: "/(jpg)/" }, relativePath: { in: $slugs } }
    ) {
      edges {
        node {
          base
          relativePath
          childImageSharp {
            fluid(maxWidth: 200) {
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
    allMarkdownRemark(filter: { frontmatter: { slug: { in: $slugs } } }) {
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

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `
