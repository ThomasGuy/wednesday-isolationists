import { useStaticQuery, graphql } from "gatsby"

const ALL_FILES_QUERY = graphql`
  query files {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            artist
            subject
          }
        }
      }
    }
  }
`

const useLists = () => {
  let artists = new Set()
  let subjects = new Set()
  const { allMarkdownRemark } = useStaticQuery(ALL_FILES_QUERY)
  allMarkdownRemark.edges.forEach(edge => {
    artists.add(edge.node.frontmatter.artist)
    subjects.add(edge.node.frontmatter.subject)
  })

  return [[...artists], [...subjects]]
}

export default useLists
