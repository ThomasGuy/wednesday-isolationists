import { useStaticQuery, graphql } from 'gatsby';

export const artistNames = {
  Charles: 'Charles Penny',
  Gil: 'Gilbert Whyman',
  Jan: 'Janet Mays',
  Judy: 'Judy Ney',
  Margaret: 'Margaret Knott',
  Margot: 'Margot Graville',
  Sally: 'Sally Scott',
  Suzanne: 'Suzanne Ewart',
};

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

export const useLists = () => {
  let artists = new Set();
  let subjectObj = {};
  const { allMarkdownRemark } = useStaticQuery(ALL_FILES_QUERY);
  allMarkdownRemark.edges.forEach(({ node }) => {
    let newArtist = node.frontmatter.artist;
    let newSubject = node.frontmatter.subject;
    if (newArtist) artists.add(newArtist);
    if (newSubject) subjectObj[node.frontmatter.week] = newSubject;
  });

  return [[...artists].sort(), subjectObj];
};
