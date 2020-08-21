import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

import { ModalCard, ModalBase } from './styles'

const Modal = ({ closeModal, animation, pointerEvents, gallery, index }) => {
  const [idx, setIdx] = useState(index)

  const onClick = useCallback(() => setIdx(state => (state + 1) % gallery.length), [gallery.length])

  const pages = gallery.map(picture => ({ style }) => (
    <animated.div style={{ ...style, background: 'blue' }}>{picture}</animated.div>
  ))

  const nextPicTansition = useTransition(idx, idx => idx, {
    from: { opacity: 0, transform: 'translate3d(-200%,0,0) scale(0.3)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0) scale(1)' },
    leave: { opacity: 0, transform: 'translate3d(50%,0,0) scale(0.5)' },
  })

  return (
    <ModalBase style={{ pointerEvents }}>
      <ModalCard style={animation}>
        <div onClick={onClick}>
          {nextPicTansition.map(({ item, props: animationPage, key }) => {
            const Page = pages[item]
            return <Page key={key} style={{ ...animationPage }} />
          })}
        </div>
        <button onClick={() => closeModal(false)}>X</button>
      </ModalCard>
    </ModalBase>
  )
}

const ModalWrapper = ({ on, toggle, gallery, index }) => {
  const transition = useTransition(on, null, {
    from: { opacity: 0, transform: `translate3d(0,-120px,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0,0)` },
    leave: { opacity: 0, transform: `translate3d(0,120px,0)` },
  })

  const pointerEvents = on ? 'all' : 'none'
  return (
    <div>
      {transition.map(
        ({ item, key, props: animation }) =>
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
