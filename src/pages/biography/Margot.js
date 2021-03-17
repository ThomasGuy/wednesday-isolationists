import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';

import Layout from '../../components/Layout';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const MargotQUERY = graphql`
  query bioMargot {
    allFile(filter: { relativeDirectory: { regex: "/biography/Margot/" } }) {
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
  const data = useStaticQuery(MargotQUERY);
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
    <Layout title="Margot Graville" description="artist painter printmaker">
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics.Margot.fluid} alt={bioPics.mug.alt} />
          </Image>
        </Row>

        <Row>
          <Image width="200px">
            <Img
              title="Margot Graville"
              fluid={bioPics.mug.fluid}
              alt="Margot_portrait"
            />
          </Image>
          <Col>
            <Title>
              <div>Margot Graville</div>
              <div id="cert">Cert. NDD ATD</div>
            </Title>
            <div className="bottom">
              <a href="mailto:kandm30@talktalk.net">
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Margot studied drawing and painting at Ipswich Art School, moved
              onto St Martin’s School of Art to do Fashion. This was followed by
              taking an Art Teacher’s diploma at Goldsmiths College.
            </p>

            <p>
              Initially Margot worked in the fashion industry as a designer/
              pattern cutter, later becoming a freelance designer/fashion
              illustrator working for, among others, Conde Nast and Mothercare.
              She taught part time at Ealing School of Art, later becoming full
              time at London College of Fashion. On retirement Margot returned
              to painting and drawing. Also enjoys printmaking and is a member
              of Richmond Printmakers.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Margot's work can be seen on the following websites.</p>
            <ul>
              <li>
                <a href="https://www.richmondprintmakers.co.uk">
                  Richmond Printmakers
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
