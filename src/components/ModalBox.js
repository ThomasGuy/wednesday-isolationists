import React from 'react'
import Img from 'gatsby-image'
import {ImageWrapper} from './styles'

const ModalBox = ({fixed, alt, meta, pathname}) => {
  return (
    <>
      <ImageWrapper>
        <Img fixed={fixed} alt={alt} meta={meta} />
      </ImageWrapper>
    </>
  )
}

export default ModalBox
