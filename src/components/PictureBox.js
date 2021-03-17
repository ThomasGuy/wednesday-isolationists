import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { artistName } from '../utils/artists';
import { SoldTag } from './styles';

const PictureStyles = styled.div`
  position: relative;
  text-align: center;

  p {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

const PictureBox = ({ fluid, alt, meta, pathname }) => (
  <>
    <PictureStyles>
      <Img
        fluid={fluid}
        alt={alt}
        title={`${artistName[meta.artist]} - ${meta.subject} \n${
          meta.dimensions
        }`}
      />
      {pathname.includes('artists') ? (
        <p>{meta.subject}</p>
      ) : (
        <p>{`${artistName[meta.artist]}`}</p>
      )}
      {meta.sold && <SoldTag>SOLD</SoldTag>}
    </PictureStyles>
  </>
);

export default PictureBox;
