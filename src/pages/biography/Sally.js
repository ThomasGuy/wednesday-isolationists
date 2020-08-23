import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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

function Sally() {
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

  console.log(bioPics['lockdown']);
  return (
    <Layout>
      <SEO
        title="Sally Scott"
        description="Sally Scott artist painter architectural glass etching lithography"
      />
      <Grid>
        <Row>
          <Image>
            <Img fluid={bioPics['lockdown'].fluid} alt={bioPics['lockdown'].alt} />
          </Image>
        </Row>

        <Row className="center">
          <Image width={'200px'} size={1}>
            <Img fluid={bioPics['mug'].fluid} alt={bioPics['mug'].alt} />
          </Image>
          <Col>
            <Title>Sally Scott</Title>
            <div>Cert. R.A.S. F.G.E. C.A.S.</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              Sally Scott studied painting at Croydon College of Art and the Royal Academy Schools.
              She taught at Birmingham School of Art, Hornsey College of Art and Middlesex
              Polytechnic, 1963-1991. She has been a working artist all her life, dividing her time
              between painting and architectural glasswork. From 1986 to 2000 she worked in
              partnership with David Peace, as Peace & Scott for collaboration on architectural
              glass projects. Since then she continued the glass work alone, sometimes in
              collaboration with other artists. For details of her architectural glass work see her
              website. Her painting includes works in oil, watercolour and pastel. Sally lives in
              London and France. Sally exhibits paintings and lithographs regularly in mixed shows:
              In 2019 She had a Retrospective Exhibition – exhibiting a lifetime of work, Glass,
              Painting and Print at The Menier Gallery, London.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Paintings and glasswork can be seen on the following websites.</p>
            <ul>
              <li>
                <a href="www.sallyscottartist.co.uk">Sally Scott artist</a>
              </li>
              <li>
                <a href="www.chelseaartsociety.org.uk">Chelsea Arts Society</a>
              </li>
              <li>
                <a href="www.richmondprintmakers.co.uk">Richmond Printmakers</a>
              </li>
              <li>
                <a href="www.grapevinegallery.co.uk">Grapevine Gallery</a>
              </li>
              <li>
                <a href="www.artworkersguild.org">Guild of Artwworkers</a>
              </li>
              <li>
                <a href="www.gge.org.uk">The Guild of Glass Engravers</a>
              </li>
            </ul>
            - Facebook@sallyscottartist Contact email sallyscott.guy@gmail.com
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
}

export default Sally;
