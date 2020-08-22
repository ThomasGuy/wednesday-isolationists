import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #282c34;
  width: 100%;
  padding-top: 1rem;

  & > div {
    font-size: 2rem;
    font-weight: 900;
    padding: 0 2rem;

    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }

  & > a {
    align-self: center;
    padding-left: 2rem;
    font-size: 0.8rem;
    text-decoration: none;
  }
`

const StickyTitle = ({ title, isArtist }) => {
  return (
    <Title className="sticky-inner">
      <div>{title}</div>

      {isArtist && <Link to={`/biography/${title}`}>biography</Link>}
    </Title>
  )
}

export default StickyTitle
