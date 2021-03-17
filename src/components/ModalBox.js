import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { artistName } from '../utils/artists';
import { SoldTagModal } from './styles';

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

const ModalBox = ({ fluid, alt, meta }) => (
  <>
    <ImageWrapper>
      <Img fluid={fluid} alt={alt} />
      <p>{`${artistName[meta.artist]} - ${meta.subject} ${'  '} ${
        meta.dimensions
      }`}</p>
      {meta.sold && <SoldTagModal>SOLD</SoldTagModal>}
    </ImageWrapper>
  </>
);

export default ModalBox;
