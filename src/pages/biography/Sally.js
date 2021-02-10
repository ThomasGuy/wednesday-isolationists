import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';

import Layout from '../../components/Layout';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const Sally_QUERY = graphql`
  query bioSally {
    bg: allFile(filter: { relativePath: { regex: "/biography/Sally/bg/" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    mug: file(relativePath: { eq: "biography/Sally/mug.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function Biography() {
  const data = useStaticQuery(Sally_QUERY);
  const bioPics = data.bg.nodes.reduce((acc, node) => {
    let path = node.relativePath.split('.')[0];
    let key = path.split('/').slice(-1).pop();
    acc[key] = {
      fluid: node.childImageSharp.fluid,
      alt: key,
    };
    return acc;
  }, {});

  return (
    <Layout
      title='Sally Scott'
      description='artist painter architectural glass etching lithography'>
      <Grid>
        <Row>
          <Image>
            <Img
              title='Sally Scott Lockdown Painting oil on canvas'
              fluid={bioPics['lockdown'].fluid}
              alt={bioPics['lockdown'].alt}
            />
          </Image>
        </Row>

        <Row>
          <Image width={'200px'}>
            <Img
              title='Sally Scott'
              fluid={data.mug.childImageSharp.fluid}
              alt='Sally Scott artist'
            />
          </Image>
          <Col>
            <Title>
              <div>Sally Scott</div>
              <div id='cert'>Cert. RAS FGE CAS</div>
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
              collaboration on architectural glass projects. For details of her architectural glass
              work see her website.
            </p>
            <p> Her painting includes works in oil, watercolour and pastel.</p>
            <p>
              Sally lives in London, she exhibits paintings and lithographs regularly in mixed shows
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
                <a id='social' title='follow me on facebook' href='https://www.facebook.com/sallyscottartist'>
                  <img
                    style={{ marginBottom: '0' }}
                    alt='follow me on facebook'
                    src='https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png'
                    border={0}
                  />
                </a>

                <a id='social' title='follow me on Instagram' href='http://www.instagram.com/sallyscott.guy'>
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
