import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaEnvelope } from 'react-icons/fa';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import { Grid, Row, Col, Image, Title } from '../../components/styles';

const GIL_QUERY = graphql`
  query bioGil {
    allFile(filter: { relativeDirectory: { regex: "/biography/Gil/" } }) {
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

function Sally() {
  const data = useStaticQuery(GIL_QUERY);
  const bioPics = data.allFile.edges.reduce((acc, { node }) => {
    let path = node.relativePath.split('.')[0];
    let idx = path.split('/').slice(-1).pop();
    acc[idx] = {
      fluid: node.childImageSharp.fluid,
      alt: idx,
    };
    return acc;
  }, {});

  console.log(bioPics['lockdown']);
  return (
    <Layout>
      <SEO
        title="Gilbert Whyman"
        description="Gilbert Whyman artist sculpter metal painter architect life drawing"
      />
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics['mug'].fluid} alt={bioPics['mug'].alt} />
          </Image>
        </Row>

        <Row className="center">
          <Image width={'200px'} size={1}>
            <Img fluid={bioPics['mug_steel'].fluid} alt={bioPics['mug_steel'].alt} />
          </Image>
          <Col>
            <Title>Gilbert Whyman</Title>
            <div>Cert. M.R.S.S.</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Gilbert qualified in Architecture at Manchester University, studied sculpture at
              Kensington & Chelsea and metal sculpture at Morley College and South Thames College.
              He teaches part time at RACC Richmond ,and Heatherley's School of Fine Art Chelsea.
            </p>

            <p>
              He works in clay, welded steel, terracotta and carved stone. Early retirement from
              architecture has enabled more time to be devoted to a lifelong and increasing passion
              for sculpture and life drawing. Gilbert is happy to discuss Portrait Head Commissions.
            </p>

            <p>
              He is a member of the Royal British Society of Sculptors, Chelsea Art Society, Surrey
              Sculpture Society Art Workers Guild
            </p>

            <p>
              He has exhibited at the Royal Academy Summer Exhibition, The Society of Portrait
              Sculptors, Cork Street, Borde Hill Sculptural Art in the Garden V&A (Inspired by
              exhibition), Chelsea Art Society, Park Walk Sculpture Studios, Chelsea, Orleans House
              Gallery, Twickenham, Art on the Hill, Royal Hospital Putney, Putney Open Studio and
              Wisley.
            </p>

            <p>Gilbert's work in private collections in UK, New York, and Australia</p>
            <p>
              Email:{' '}
              <a href="mailto:gilbertwhyman@hotmail.co.uk">
                <FaEnvelope />
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Sculptures can be seen on the following websites.</p>
            <ul>
              <li>
                <a href="http://www.gilbertwhyman.co.uk">Gilbert Whyman Sculptor</a>
              </li>
              <li>
                <a href="http://www.rbs.org.uk">Royal British Society of Sculptors</a>
              </li>
              <li>
                <a href="https://www.surreysculpture.org.uk/">Surrey Sculpture</a>
              </li>
              <li>
                <a href="https://www.artworkersguild.org">The Art workers Guild</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
}

export default Sally;