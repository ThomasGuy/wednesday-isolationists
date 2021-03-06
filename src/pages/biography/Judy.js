import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';
// import BackgroundSlider from 'gatsby-image-background-slider';

import Layout from '../../components/Layout';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const JudyQUERY = graphql`
  query bioJudy {
    bg: allFile(filter: { relativePath: { regex: "/biography/Judy/bg/" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    mug: file(relativePath: { eq: "biography/Judy/mug.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Biography() {
  const data = useStaticQuery(JudyQUERY);
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
    <Layout title="Judy Ney" description="artist painter fashion design">
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics.Judy.fluid} alt="Judy Ney" />
          </Image>
        </Row>
        <Row>
          <Image width="200px">
            <Img
              title="Judy Ney"
              fluid={data.mug.childImageSharp.fluid}
              alt="Judy Ney artist"
            />
          </Image>
          <Col>
            <Title>
              <div>Judy Ney</div>
              {/* <div id='cert'>Cert. RAS FGE CAS</div> */}
            </Title>
            <div className="bottom">
              <a title="email me" href="mailto:JudyNey41@gmail.com">
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>I have loved drawing and painting since my earliest years.</p>
            <p>
              I became a professional fashion designer following a course at
              Kingston College of Art, and designed and made jewellery while
              bringing up my children.
            </p>
            <p>
              In later life I retrained and worked as a counselling
              psychologist.
            </p>
            <p>Now retired I can once again immerse myself in art.</p>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
}

export default Biography;
