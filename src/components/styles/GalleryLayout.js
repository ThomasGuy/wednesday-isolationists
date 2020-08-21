import styled from 'styled-components'
import {animated} from 'react-spring'

export const GalleryLayout = styled(animated.div)`
  color: white;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 40px;
  }
`

export const Title = styled.div`
  text-align: center;
  margin: 1rem;
  font-size: 2rem;
  font-weight: 900;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`
