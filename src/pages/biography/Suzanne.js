import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';

import Layout from '../../components/Layout';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const Suzanne_QUERY = graphql`
  query bioSuzanne {
    allFile(filter: { relativeDirectory: { regex: "/biography/Suzanne/" } }) {
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
  const data = useStaticQuery(Suzanne_QUERY);
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
    <Layout title='Suzanne Ewart' description='artist painter graphic design illustrator'>
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics['Suzanne'].fluid} alt={bioPics['Suzanne'].alt} />
          </Image>
        </Row>

        <Row>
          <Image width={'200px'}>
            <Img title='Suzanne Ewart' fluid={bioPics['mug'].fluid} alt='Suzanne_portrait' />
          </Image>
          <Col>
            <Title>
              <div>Suzanne Ewart</div>
            </Title>
            <div className='bottom'>
              <a href='http://www.suzanneewart.com/contact.html'>Please contact Suzanne here through her website</a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              After studying Art and Graphic Design at Ealing Art College Suzanne worked as a
              graphic designer in both London and Bermuda. She then developed a freelance career
              as an illustrator working for major advertising agencies, design studios and
              publishers...
            </p>
            <p>
              Suzanne taught Illustration, painting and drawing at RACC Richmond, North Kingston
              College and the Landmark Art Centre in West London, Art groups in Barnes, the Royal
              Botanic Gardens Kew, France and South Africa.
            </p>
            <p>
              Suzanne has exhibited in a number of galleries including: The Royal Watercolour
              Society Bankside, The Mall Gallery London, Llewellyn Alexander Gallery Waterloo, Kirby
              Gallery Barbados, Century Gallery Henley Upon Thames, Riverside Gallery Barnes and the
              Century Gallery Cambridge.
            </p>
            <p>She paints in oil, acrylic and watercolour</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Suzanne's work can be seen on her website and through social media.</p>
            <ul>
              <li>
                <a href='http://www.suzanneewart.com'>Suzanne Ewart's website</a>
              </li>
              <li>
                <a id='social' title='follow me on Instagram' href='http://www.instagram.com/suzanne.ewart'>
                  <img
                    style={{ marginBottom: '0' }}
                    alt='follow me on instagram'
                    src="https://img.icons8.com/office/30/000000/instagram-new.png"
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
