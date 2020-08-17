import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PictureStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: auto;
  text-align: center;
  margin: 1rem auto;

  p {
    padding-top: 0.2rem;
    font-size: 0.8rem;
    color: lightgrey;
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
