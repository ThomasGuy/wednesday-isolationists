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
  const artists = new Set();
  const subjectObj = {};
  const { allMarkdownRemark } = useStaticQuery(ALL_FILES_QUERY);
  allMarkdownRemark.edges.forEach(({ node }) => {
    const { week, artist, subject } = node.frontmatter;
    if (artist) artists.add(artist);
    if (subject) {
      const key = parseInt(week.substring(4));
      subjectObj[key] = subject;
    }
  });

  return [[...artists].sort(), subjectObj];
};

export default useLists;
