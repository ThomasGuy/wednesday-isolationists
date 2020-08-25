import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const SALLY_QUERY = graphql`
  query bioSally {
    allFile(filter: { relativeDirectory: { regex: "/biography/Sally/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

function Biography() {
  const data = useStaticQuery(SALLY_QUERY);
  const bioPics = data.allFile.edges.reduce((acc, { node }) => {
    let path = node.relativePath.split('.')[0];
    let idx = path.split('/').slice(-1).pop();
    acc[idx] = {
      fluid: node.childImageSharp.fluid,
      alt: idx,
    };
    return acc;
  }, {});

  return (
    <Layout>
      <SEO
        title='Sally Scott'
        description='Sally Scott artist painter architectural glass etching lithography'
      />
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics['lockdown'].fluid} alt={bioPics['lockdown'].alt} />
          </Image>
        </Row>

        <Row className='center'>
          <Image width={'200px'} size={1}>
            <Img title='Sally Scott artist' fluid={bioPics['mug'].fluid} alt='Sally Scott artist' />
          </Image>
          <Col>
            <Title>
              <div>Sally Scott</div>
              <div id='cert'>Cert. R.A.S. F.G.E. C.A.S.</div>
            </Title>
            <div className='bottom'>
              <a title='email me' href='mailto:sallyscott.guy@gmail.com'>
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Sally Scott studied painting at Croydon College of Art and the Royal Academy Schools.
              She taught at Birmingham School of Art, Hornsey College of Art and Middlesex
              Polytechnic, 1963-1991.
            </p>
            <p>
              She has been a working artist all her life, dividing her time between painting and
              architectural glasswork.
            </p>
            <p>
              From 1986 to 2000 she worked in partnership with David Peace, as Peace & Scott for
              collaboration on architectural glass projects. Since then she continued the glass work
              alone, sometimes in collaboration with other artists. For details of her architectural
              glass work see her website.
            </p>
            <p> Her painting includes works in oil, watercolour and pastel.</p>
            <p>
              Sally lives in London, where she exhibits paintings and lithographs regularly in mixed
              shows
            </p>
            <p>
              In 2019 She had a Retrospective Exhibition – exhibiting a lifetime of work, Glass,
              Painting and Print at The Menier Gallery, London.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Paintings, glasswork and prints can be seen on the following websites.</p>
            <ul>
              <li>
                <a href='https://www.sallyscottartist.co.uk'>Sally Scott artist</a>
              </li>
              <li>
                <a href='https://www.chelseaartsociety.org.uk'>Chelsea Arts Society</a>
              </li>
              <li>
                <a href='https://www.richmondprintmakers.co.uk'>Richmond Printmakers</a>
              </li>
              <li>
                <a href='https://www.grapevinegallery.co.uk'>Grapevine Gallery</a>
              </li>
              <li>
                <a href='https://www.artworkersguild.org'>The Art workers Guild</a>
              </li>
              <li>
                <a href='https://www.gge.org.uk'>The Guild of Glass Engravers</a>
              </li>
              <li>
                <a title='follow me on facebook' href='https://www.facebook.com/sallyscottartist'>
                  <img
                    style={{ marginBottom: '0' }}
                    alt='follow me on facebook'
                    src='https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png'
                    border={0}
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
}

export default Biography;
