import React from "react"
import { graphql } from "gatsby"

import PictureBox from "./PictureBox"
import Layout from "./Layout"

const GallerySubject = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  const renderGallery = () => {
    return edges.map(edge => {
      const { id, frontmatter } = edge.node
      return (
        <div key={id}>
          <PictureBox data={frontmatter} />
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

export default GallerySubject
export const query = graphql`
  query gallerySubject($subject: String!) {
    allMarkdownRemark(filter: { frontmatter: { artist: { eq: $subject } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            artist
            date
          }
        }
      }
    }
  }
`
