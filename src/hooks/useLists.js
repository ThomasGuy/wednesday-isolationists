import { useStaticQuery, graphql } from 'gatsby'

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
  allMarkdownRemark.edges.forEach(({ node }) => {
    let newArtist = node.frontmatter.artist
    let newSubject = node.frontmatter.subject
    if (newArtist) artists.add(newArtist)
    if (newSubject) subjects.add(newSubject)
  })

  return [[...artists], [...subjects].sort()]
}

export default useLists
