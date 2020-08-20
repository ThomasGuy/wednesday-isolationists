import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

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

const STUDIO_QUERY = graphql`
  query myStudio {
    file(relativePath: {regex: "/studio/"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function Home() {
  const data = useStaticQuery(STUDIO_QUERY)
  return (
    <Layout>
      <Title>Wednesday Isolationists</Title>

      <Img fluid={data.file.childImageSharp.fluid} />

      <FrontPage>
        <p>
          Prior to the Lockdown of 2020 a small group of friends in Putney met
          regularly on Wednesdays in each other's houses, or weather permitting
          in Richmond Park or on the Thames tow path to paint, and subsequently
          go for a pub lunch.  This had been working fine for years.
        </p>
        <p>Lockdown put a stop to this.</p>
        <p>
          They decided the way to continue was for one member to choose a
          subject each week and they all should post their results on Whatsapp
          on Wednesdays.  They had no collective name before Lockdown, but with
          this new way of working from home they became the{' '}
          <span>Wednesday Isolationists.</span>
        </p>
        <br />
        <h3>List of Isolationists</h3>
        <ol>
          <li>Janet Mays</li>
          <li>Margot Graville</li>
          <li>Margaret Knott</li>
          <li>Charles Penny</li>
          <li>Sally Scott</li>
          <li>Gilbert Whyman</li>
          <li>Judy Ney</li>
          <li>Suzanne Ewart</li>
        </ol>
      </FrontPage>
    </Layout>
  )
}
