import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #282c34;
  width: 100%;
  padding-top: 1rem;

  & > div {
    text-align: center;
    font-size: ${({ isArtist }) => (isArtist ? '1.3rem' : '1.1rem')};

    @media screen and (min-width: 368px) {
      font-size: ${({ isArtist }) => (isArtist ? '1.6rem' : '1.3rem')};
      font-weight: 600;
    }

    @media screen and (min-width: 568px) {
      font-size: ${({ isArtist }) => (isArtist ? '2rem' : '1.7rem')};
    }

    @media screen and (min-width: 768px) {
      font-size: ${({ isArtist }) => (isArtist ? '2.5rem' : '2.2rem')};
      font-weight: 900;
    }

    @media screen and (min-width: 968px) {
      font-size: ${({ isArtist }) => (isArtist ? '3rem' : '2.8rem')};
    }
  }

  #bio {
    align-self: bottom;
    padding-left: 2rem;
    font-size: 0.7rem;
    text-decoration: none;
    color: lightgrey;

    @media screen and (min-width: 368px) {
      font-size: 0.8rem;
    }

    @media screen and (min-width: 768px) {
      padding-left: 4rem;
    }
  }

  #sale {
    color: #b88f83;
    font-size: 0.7rem;
    & > span { font-size: 0.6rem}

    @media screen and (min-width: 368px) {
      font-size: 1rem;
      & > span { font-size: 0.8rem}
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      & > span { font-size: 1rem}
    }
  }

`;

const StickyTitle = ({ title, isArtist }) => {
  return (

    <Title className='sticky-inner' isArtist={isArtist}>
      <div>
        {title} {isArtist && <Link id="bio" to={`/biography/${title.split(' ')[0]}`}>biography</Link>}
      </div>
      <p id="sale">All pictures for sale from £50 <span>email artist</span></p>
    </Title>
  );
};

export default StickyTitle;
