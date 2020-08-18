// N.B. from Sporty in reducer variable 'bun' is current as in 'current bun'

const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  return new Promise((resolve, reject) => {
    let artists = new Set() // all Artists
    let subjects = new Set() // all Subjects
    let artNodes = [] // graphQL nodes
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
                dimensions
                slug
                date
              }
            }
          }
        }
      }
    `).then(results => {
      // get alist of all Artists and all Subjects
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        artists.add(node.frontmatter.artist)
        subjects.add(node.frontmatter.subject)
      })

      // Create content for each Artist page
      const artistList = [...artists]
      artistList.forEach(artist => {
        // forach Artist get a list of all graphQL nodes
        artNodes = results.data.allMarkdownRemark.edges.filter(
          ({node}) => node.frontmatter.artist === artist,
        )

        createPage({
          path: `/artists/${artist}`,
          component: path.resolve('./src/components/Gallery.js'),
          context: {
            title: `${artist}`,
            slugs: artNodes.reduce(function (acc, bun) {
              acc.push(bun.node.frontmatter.slug)
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
          ({node}) => node.frontmatter.subject === subject,
        )

        createPage({
          path: `/subjects/${subject}`,
          component: path.resolve('./src/components/Gallery.js'),
          context: {
            title: `${subject}`,
            slugs: subjectNodes.reduce(function (acc, bun) {
              acc.push(bun.node.frontmatter.slug)
              return acc
            }, []),
          },
        })
      })

      resolve()
    })
  })
}
