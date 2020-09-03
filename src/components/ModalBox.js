import React from 'react'
import Img from 'gatsby-image'
import { ImageWrapper } from './styles'

const ModalBox = ({ fluid, alt }) => {
  return (
    <>
      <ImageWrapper>
        <Img
          fluid={fluid}
          alt={alt}
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
          }}
        />
      </ImageWrapper>
    </>
  )
}

export default ModalBox
