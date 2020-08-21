import styled from 'styled-components'
import {animated} from 'react-spring'

export const ModalCard = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 150px;
  max-width: 600px;
  background: black;
  border-radius: 20px;

  button {
    position: fixed;
    top: 13px;
    right: 13px;
    z-index: 20;
    opacity: 0.5;
  }
`
