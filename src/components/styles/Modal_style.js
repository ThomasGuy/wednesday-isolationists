import styled from 'styled-components'
import {animated} from 'react-spring'

export const ModalCard = styled(animated.div)`
  padding: 20px;
  padding-top: 60px;
  max-width: 668px;
  width: 100%;
  height: 100%;
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

export const ModalBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #282c34;
`
