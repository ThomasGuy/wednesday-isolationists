import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';
// import BackgroundSlider from 'gatsby-image-background-slider';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const Margaret_QUERY = graphql`
  query bioMargaret {
    bg: allFile(filter: { relativePath: { regex: "/biography/Margaret/bg/" } }) {
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
  const data = useStaticQuery(Margaret_QUERY);
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
    <Layout>
      <SEO title='Margaret Knott' description='artist painter ceramics monoprint' />
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics['Margaret2'].fluid} alt='Margaret Knott' />
          </Image>
        </Row>

        <Row>
          <Image width={'200px'}>
            <Img
              title='Margaret Knott'
              fluid={data.mug.childImageSharp.fluid}
              alt='Margaret Knott artist'
            />
          </Image>
          <Col>
            <Title>
              <div>Margaret Knott</div>
              {/* <div id='cert'>Cert. RAS FGE CAS</div> */}
            </Title>
            <div className='bottom'>
              <a title='email me' href='mailto:info@wills-art.com'>
                Email&nbsp;&nbsp;&nbsp;
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Margaret studied at St. Martin’s School of Art in the fifties. She worked in
              advertising for some years on many accounts including British Lion Films, Fortnum &
              Mason and the Edinburgh  Festival, and her work was published in Designers in Britain.
            </p>
            <p>
              She learnt Ceramics in Adult Education classes, taught it there and for the John Lewis
              Partnership pottery club.
            </p>
            <p>
              She started etching at Putney School of Art, where she had a solo exhibition. She then
              discovered the silk screen class where she started monoprinting.   She became a member
              of Printmakers Council, and her work was regularly  exhibited.  Shows included were
              the RA Summer Show, Originals 04 and the  Discerning Eye at the Mall Galleries.
            </p>
            <p>
              She has always been with Will’s Art Warehouse, and shows there now. Working as a
              printmaker as well as a painter, her work has been published in  'Printmaking Today'
              and 'Artist Magazine’.
            </p>
            <p>
              Her etchings are covering the walls of the restaurant ‘Artisans of Sardinia’ in Lacy
              Road, Putney, London SW15, where she also has a Margaret Knott room, with etchings and
              paintings of Putney and Putney Bridge.
            </p>
            <p>
              Today she works mainly in Gouache and Graphite and sometimes Linseed oil, and prefers
              a decorators 1” brush! She has always been with Will’s Art Warehouse, and shows there
              now. Working as a printmaker as well as a painter, her work has been published in 
              'Printmaking Today' and 'Artist Magazine’.
            </p>
            <p>
              Her etchings are covering the walls of the restaurant ‘Artisans of Sardinia’ in Lacy
              Road, Putney, London SW15, where she also has a Margaret Knott room, with etchings and
              paintings of Putney and Putney Bridge.
            </p>
            <p>
              Today she works mainly in Gouache and Graphite and sometimes Linseed oil, and prefers
              a decorators 1” brush!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Paintings & prints can be seen on the following website</p>
            <ul>
              <li>
                <a href='https://www.wills-art.com'>Wills art wharehouse</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
}

export default Biography;
