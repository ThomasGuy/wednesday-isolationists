import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import artistNames from '../utils/artistName';
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

const PictureBox = ({ fluid, alt, meta, pathname }) => {
  return (
    <>
      <PictureStyles>
        <Img
          fluid={fluid}
          alt={alt}
          title={`${artistNames[meta.artist]} - ${meta.subject} \n${meta.dimensions}`}
        />
        {pathname.includes('artists') ? (
          <p>{meta.subject}</p>
        ) : (
          <p>{`${artistNames[meta.artist]}`}</p>
        )}
        { meta.sold && <SoldTag>SOLD</SoldTag> }
      </PictureStyles>
    </>
  );
};

export default PictureBox;
