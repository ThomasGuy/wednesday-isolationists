import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';
// import BackgroundSlider from 'gatsby-image-background-slider';

import Layout from '../../components/Layout';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const JanQUERY = graphql`
  query bioJan {
    bg: allFile(filter: { relativePath: { regex: "/biography/Jan/bg/" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    mug: file(relativePath: { eq: "biography/Jan/mug.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Biography() {
  const data = useStaticQuery(JanQUERY);
  const bioPics = data.bg.nodes.reduce((acc, node) => {
    const path = node.relativePath.split('.')[0];
    const key = path.split('/').slice(-1).pop();
    acc[key] = {
      fluid: node.childImageSharp.fluid,
      alt: key,
    };
    return acc;
  }, {});

  return (
    <Layout title="Janet Mays" description="artist painter fashion design">
      <Grid>
        <Row>
          <Image>
            <Img title="Trees" fluid={bioPics.Jan3.fluid} alt="Janet Mays" />
          </Image>
        </Row>

        <Row>
          <Image width="200px">
            <Img
              title="Janet Mays"
              fluid={data.mug.childImageSharp.fluid}
              alt="Janet Mays artist"
            />
          </Image>
          <Col>
            <Title>
              <div>Janet Mays</div>
              {/* <div id='cert'>Cert. RAS FGE CAS</div> */}
            </Title>
            <div className="bottom">
              <a title="email me" href="mailto:jandmays@gmail.com">
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Janet was originally a professional singer but after retiring took
              up art and attended Putney School of Art working in a variety of
              media including etching, lithography and painting in oils. She is
              most interested in painting in oils and developing her sketches
              and drawings for printmaking.
            </p>
            <p>
              She belongs to Richmond Printmakers and has exhibited with them
              for the past few years around South West London including in 2019
              at the Oxo Gallery, South Bank.
            </p>
            <p>
              Janet often takes part in Wandsworth Open Studios and some of her
              work may be found on Putney Artists website.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Janet's paintings & prints can be seen on the following websites
              and social media.
            </p>
            <ul>
              <li>
                <a href="https://www.richmondprintmakers.co.uk">
                  Richmond Printmakers
                </a>
              </li>
              <li>
                <a href="http://www.putneyartists.org/">Putney Artists</a>
              </li>
              <li>
                <a
                  id="social"
                  title="follow me on Instagram"
                  href="http://www.instagram.com/janjanmays">
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
