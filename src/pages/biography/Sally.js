import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'
import SEO from '../../components/seo'

const Title = styled.div`
  color: #b88f83;
  text-align: center;
  margin: 2rem;
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (min-width: 628px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 788px) {
    font-size: 3.2rem;
  }
`

const FrontPage = styled.article`
  margin: 1rem 2rem;
  font-family: Titilium Roboto Helvetica, sans-serif;

  h3 {
    color: inherit;
  }

  span {
    font-size: 1.3rem;
    color: #b88f83;
  }
`

const SALLY_QUERY = graphql`
  query bioSally {
    file(relativePath: { regex: "/lockdown/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Sally() {
  const data = useStaticQuery(SALLY_QUERY)
  return (
    <Layout>
      <SEO />
      <Title>Sally</Title>

      <Img fluid={data.file.childImageSharp.fluid} />

      <FrontPage>
        <p>
          Incididunt incididunt esse nulla minim sit mollit commodo nulla esse commodo. Ad et elit
          id ut. Ex reprehenderit ea ipsum adipisicing ad aute commodo adipisicing ad fugiat Lorem
          id. Aute deserunt mollit incididunt veniam. Id nisi eu do velit veniam enim amet laboris
          eu cupidatat sunt nisi tempor.
        </p>

        <p>
          Qui sunt nulla ullamco sit adipisicing. Mollit non commodo deserunt sunt tempor ullamco
          dolor aliqua sint fugiat exercitation exercitation eiusmod incididunt. Sit id labore
          mollit ea labore commodo tempor dolor laborum. Labore incididunt esse velit irure irure
          ipsum adipisicing nulla do. Eiusmod proident sit ad pariatur anim deserunt ut cillum.
          Incididunt dolore est ut ipsum.
        </p>

        <p>
          Culpa aliquip exercitation ad ut amet id. Eu occaecat sit deserunt proident laboris cillum
          do esse commodo irure consectetur. Fugiat officia qui ad minim incididunt culpa velit. Et
          dolore sunt eu non ad eu amet laborum duis non reprehenderit mollit. Nulla et in labore
          exercitation amet dolore mollit officia exercitation.
        </p>
      </FrontPage>
    </Layout>
  )
}
