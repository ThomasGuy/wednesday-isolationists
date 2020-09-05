import { useStaticQuery, graphql } from 'gatsby';

const ALL_FILES_QUERY = graphql`
  query files {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            artist
            subject
            week
          }
        }
      }
    }
  }
`;

const useLists = () => {
  let artists = new Set();
  let subjectObj = {};
  const { allMarkdownRemark } = useStaticQuery(ALL_FILES_QUERY);
  allMarkdownRemark.edges.forEach(({ node }) => {
    let newArtist = node.frontmatter.artist;
    let newSubject = node.frontmatter.subject;
    if (newArtist) artists.add(newArtist);
    if (newSubject) subjectObj[node.frontmatter.week] = newSubject;
  });

  return [[...artists], subjectObj];
};

export default useLists;
