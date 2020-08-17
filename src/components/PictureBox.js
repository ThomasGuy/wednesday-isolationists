import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PictureStyles = styled.div`
  max-width: 280px;
  height: auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`

const PictureBox = ({fluid, alt, meta, location}) => {
  return (
    <>
      <p>{location.pathname}</p>
      <PictureStyles>
        <Img fluid={fluid} alt={alt} />
      </PictureStyles>
    </>
  )
}

export default PictureBox
