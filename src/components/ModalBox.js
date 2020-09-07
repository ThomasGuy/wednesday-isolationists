import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { animated } from 'react-spring';

const ImageWrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const ModalBox = ({ fluid, alt }) => {
  return (
    <>
      <ImageWrapper>
        <Img fluid={fluid} alt={alt} />
      </ImageWrapper>
    </>
  );
};

export default ModalBox;
