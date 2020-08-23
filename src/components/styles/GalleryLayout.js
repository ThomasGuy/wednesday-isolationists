import styled from 'styled-components'
import { animated } from 'react-spring'

export const GalleryLayout = styled(animated.div)`
  margin: 0 auto;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2rem;

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
  }
`
