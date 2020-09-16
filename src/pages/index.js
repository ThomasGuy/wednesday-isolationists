import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { PageTitle, FrontPage } from '../components/styles';

const STUDIO_QUERY = graphql`
  query myStudio {
    file(relativePath: { regex: "/studio/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default function Home() {
  const data = useStaticQuery(STUDIO_QUERY);
  return (
    <Layout>
      <SEO title='Wednesday Isolationists' />
      <PageTitle>Wednesday Isolationists</PageTitle>

      <Img title='Sallt Scott Studio' fluid={data.file.childImageSharp.fluid} />

      <FrontPage>
        <p>
          Prior to the Lockdown of 2020 a small group of friends in Putney met regularly on
          Wednesdays in each other's houses, or weather permitting in Richmond Park or on the Thames
          tow path to paint, and subsequently go for a pub lunch.  This had been working fine for
          years.
        </p>
        <p>Lockdown put a stop to this.</p>
        <p>
          They decided the way to continue was for one member to choose a subject each week and they
          all should post their results on Wednesdays.  They had no collective name before Lockdown,
          but with this new way of working from home they became the...
          <br />
          <span>Wednesday Isolationists</span>
        </p>
        <br />
        <h3>List of Isolationists</h3>
        <ul>
          <li>
            <Link to='/biography/Janet'>Janet Mays</Link>
          </li>
          <li>
            <Link to='/biography/Margot'>Margot Graville</Link>
          </li>
          <li>
            <Link to='/biography/Margaret'>Margaret Knott</Link>
          </li>
          <li>
            <Link to='/biography/Charles'>Charles Penny</Link>
          </li>
          <li>
            <Link to='/biography/Sally'>Sally Scott</Link>
          </li>
          <li>
            <Link to='/biography/Gilbert'>Gilbert Whyman</Link>
          </li>
          <li>
            <Link to='/biography/Judy'>Judy Ney</Link>
          </li>
          <li>
            <Link to='/biography/Suzanne'>Suzanne Ewart</Link>
          </li>
        </ul>
      </FrontPage>
    </Layout>
  );
}
