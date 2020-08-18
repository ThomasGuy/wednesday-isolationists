import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PictureStyles = styled.div`
  max-width: 280px;
  height: auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }

  p {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    opacity: 0.8;
  }
`

const PictureBox = ({fluid, alt, meta, pathname}) => {
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
