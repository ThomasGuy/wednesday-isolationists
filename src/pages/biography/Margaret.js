import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';

import Layout from '../../components/Layout';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const MargaretQUERY = graphql`
  query bioMargaret {
    bg: allFile(
      filter: { relativePath: { regex: "/biography/Margaret/bg/" } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    mug: file(relativePath: { eq: "biography/Margaret/mug.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Biography() {
  const data = useStaticQuery(MargaretQUERY);
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
    <Layout
      title="Margaret Knott"
      description="artist painter ceramics monoprint">
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics.Margaret2.fluid} alt="Margaret Knott" />
          </Image>
        </Row>

        <Row>
          <Image width="200px">
            <Img
              title="Margaret Knott"
              fluid={data.mug.childImageSharp.fluid}
              alt="Margaret Knott artist"
            />
          </Image>
          <Col>
            <Title>
              <div>Margaret Knott</div>
              {/* <div id='cert'>Cert. RAS FGE CAS</div> */}
            </Title>
            <div className="bottom">
              <a title="email me" href="mailto:info@wills-art.com">
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Margaret studied at St. Martin’s School of Art in the fifties. She
              worked in advertising for some years on many accounts including
              British Lion Films, Fortnum & Mason and the Edinburgh  Festival,
              and her work was published in Designers in Britain.
            </p>
            <p>
              She studied Ceramics in Adult Education classes, taught at Putney
              Adult education institute and at the John Lewis Partnership
              pottery club.
            </p>
            <p>
              Margaret started etching at Putney School of Art, where she had a
              solo exhibition. She then discovered the silk screen class where
              she started monoprinting.   She became a member of Printmakers
              Council, and her work was regularly  exhibited.  Shows included
              were the RA Summer Exhibition, Originals 04 and the Discerning Eye
              at the Mall Galleries.
            </p>
            <p>
              Her etchings cover the walls of the restaurant ‘Artisans of
              Sardinia’ in Lacy Road, Putney, London SW15, where there is a
              Margaret Knott room, with etchings and paintings of Putney and
              Putney Bridge.
            </p>
            <p>
              Margaret has exhibited with Will’s Art Warehouse since they began,
              and shows there now. Working as a printmaker as well as a painter,
              her work has been published in 'Printmaking Today' and 'Artist
              Magazine’.
            </p>
            <p>
              She works mainly in Gouache, Graphite and sometimes Linseed oil,
              and prefers to use a decorators 1” brush!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Margaret's paintings & prints can be seen on the following website
              and social media.
            </p>
            <ul>
              <li>
                <a href="https://www.wills-art.com">Will's Art Warehouse</a>
              </li>
              <li>
                <a
                  id="social"
                  title="follow me on Instagram"
                  href="http://www.instagram.com/margaret_g_knott">
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
