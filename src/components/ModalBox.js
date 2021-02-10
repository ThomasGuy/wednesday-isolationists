import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { animated } from 'react-spring';
import artistNames from '../utils/artistName';
import { SoldTagModal } from './styles'

const ImageWrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;

  p {
    margin-top: 0.4rem;
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

const ModalBox = ({ fluid, alt, meta }) => {
  return (
    <>
      <ImageWrapper>
        <Img fluid={fluid} alt={alt} />
        <p>{`${artistNames[meta.artist]} - ${meta.subject} ${'  '} ${meta.dimensions}`}</p>
        { meta.sold && <SoldTagModal>SOLD</SoldTagModal> }
      </ImageWrapper>
    </>
  );
};

export default ModalBox;
