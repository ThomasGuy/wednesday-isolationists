import React, {useState, useCallback} from 'react'
import styled from 'styled-components'
import {useTransition, animated} from 'react-spring'

const ModalBase = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  height: 100vh;
`

const Card = styled(animated.div)`
  position: relative;
  background: black;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(fe, fe, fe, 0.5);
  width: 100%;
  height: 100%;
  max-width: 668px;
  z-index: 5;

  & > div > div {
    will-change: transform, opacity;
    position: absolute;
    margin: auto;
    top: 20px;
    left: 20px;
    bottom: 0;
    right: 20px;
  }

  button {
    position: fixed;
    top: 13px;
    right: 13px;
    z-index: 20;
    opacity: 0.5;
  }
`

const Modal = ({closeModal, animation, pointerEvents, gallery, index}) => {
  const [idx, setIdx] = useState(index)

  const onClick = useCallback(
    () => setIdx(state => (state + 1) % gallery.length),
    [gallery.length],
  )

  const pages = gallery.map(picture => ({style}) => (
    <animated.div style={{...style}}>{picture}</animated.div>
  ))

  const nextPicTansition = useTransition(idx, idx => idx, {
    from: {opacity: 0, transform: 'translate3d(-100%,0,0)'},
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: {opacity: 0, transform: 'translate3d(50%,0,0)'},
  })

  return (
    <ModalBase style={{pointerEvents}}>
      <Card style={animation}>
        <div onClick={onClick}>
          {nextPicTansition.map(({item, props: animationPage, key}) => {
            const Page = pages[item]
            return <Page key={key} style={animationPage} />
          })}
        </div>
        <button onClick={() => closeModal(false)}>X</button>
      </Card>
    </ModalBase>
  )
}

const ModalWrapper = ({on, toggle, gallery, index}) => {
  const transition = useTransition(on, null, {
    from: {opacity: 0, transform: `translate3d(0,-70px,0)`},
    enter: {opacity: 1, transform: `translate3d(0,0,0)`},
    leave: {opacity: 0, transform: `translate3d(0,-70px,0)`},
  })

  const pointerEvents = on ? 'all' : 'none'
  return (
    <div>
      {transition.map(
        ({item, key, props: animation}) =>
          item && (
            <Modal
              gallery={gallery}
              pointerEvents={pointerEvents}
              animation={animation}
              closeModal={toggle}
              key={key}
              index={index}
            />
          ),
      )}
    </div>
  )
}

export default ModalWrapper
