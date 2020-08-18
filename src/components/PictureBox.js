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
      <PictureStyles>
        <Img fluid={fluid} alt={alt} />
        {pathname.includes('artists') ? (
          <p>{meta.subject}</p>
        ) : (
          <p>{meta.artist}</p>
        )}
      </PictureStyles>
    </>
  )
}

export default PictureBox
