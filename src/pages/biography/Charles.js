import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';

import Layout from '../../components/Layout';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const CharlesQUERY = graphql`
  query bioCharles {
    allFile(filter: { relativeDirectory: { regex: "/biography/Charles/" } }) {
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
  const data = useStaticQuery(CharlesQUERY);
  const bioPics = data.allFile.edges.reduce((acc, { node }) => {
    const path = node.relativePath.split('.')[0];
    const idx = path.split('/').slice(-1).pop();
    acc[idx] = {
      fluid: node.childImageSharp.fluid,
      alt: idx,
    };
    return acc;
  }, {});

  return (
    <Layout title="Charles Penny" description="artist painter teacher">
      <Grid>
        <Row>
          <Image>
            <Img
              title="Charles Penny"
              fluid={bioPics.Charles.fluid}
              alt={bioPics.Charles.alt}
            />
          </Image>
        </Row>

        <Row>
          <Image width="200px">
            <Img fluid={bioPics.mug.fluid} alt="Charles_portrait" />
          </Image>
          <Col>
            <Title>
              <div>Charles Penny</div>
            </Title>
            <div className="bottom">
              <a href="mailto:charles.penny@gmail.com">
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Charles Penny is well known for his cheerful and sun filled works.
              He has exhibited widely in the UK, America, Japan and Morrocco.
              His work is in many public and private collections worldwide.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Charles' paintings & prints can be seen on social media.</p>
            <ul>
              <li>
                <a
                  id="social"
                  title="follow me on Instagram"
                  href="http://www.instagram.com/charles.penny">
                  <img
                    style={{ marginBottom: '0' }}
                    alt="follow me on instagram"
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
