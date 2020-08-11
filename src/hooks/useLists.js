import { useStaticQuery, graphql } from "gatsby"

const ALL_FILES_QUERY = graphql`
  query files {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            artist
            title
          }
        }
      }
    }
  }
`

const useLists = () => {
  let artists = new Set()
  let titles = new Set()
  const { allMarkdownRemark } = useStaticQuery(ALL_FILES_QUERY)
  allMarkdownRemark.edges.forEach(edge => {
    artists.add(edge.node.frontmatter.artist)
    titles.add(edge.node.frontmatter.title)
  })

  return [[...artists], [...titles]]
}

export default useLists
