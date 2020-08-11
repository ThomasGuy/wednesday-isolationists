const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    let artists = new Set()
    let subjects = new Set()
    let artNodes = []
    let subjectNodes = []
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                artist
                subject
                slug
                date
              }
            }
          }
        }
      }
    `).then(results => {
      // get alist of all Artists and all Subjects
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        artists.add(node.frontmatter.artist)
        subjects.add(node.frontmatter.subject)
      })

      // Create content for each Artist page
      const artistList = [...artists]
      artistList.forEach(artist => {
        // forach Artist get a list of all graphQL nodes
        artNodes = results.data.allMarkdownRemark.edges.filter(
          ({ node }) => node.frontmatter.artist === artist
        )

        createPage({
          path: `/artists/${artist}`,
          component: path.resolve("./src/components/GalleryArtist.js"),
          context: {
            artist: `${artist}`,
            slugs: artNodes.reduce(function (acc, current) {
              acc.push(current.node.frontmatter.slug)
              return acc
            }, []),
          },
        })
      })

      // Create content foreach Subject page
      const subjectList = [...subjects]
      subjectList.forEach(subject => {
        // foreach subject get a list of all graphQL nodes
        subjectNodes = results.data.allMarkdownRemark.edges.filter(
          ({ node }) => node.frontmatter.subject === subject
        )

        createPage({
          path: `/subjects/${subject}`,
          component: path.resolve("./src/components/GallerySubject.js"),
          context: {
            subject: `${subject}`,
            slugs: subjectNodes.reduce(function (acc, current) {
              acc.push(current.node.frontmatter.slug)
              return acc
            }, []),
          },
        })
      })

      resolve()
    })
  })
}
