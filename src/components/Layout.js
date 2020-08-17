import React from 'react'

import Header from './Header'
import './layout.css'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1160,
          padding: `0 1.0875rem 1.45rem`,
          textAlign: 'center',
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
