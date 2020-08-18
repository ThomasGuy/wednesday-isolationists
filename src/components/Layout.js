import React, {useState} from 'react'
import {useSpring} from 'react-spring'
import styled from 'styled-components'
import {Link} from 'gatsby'

import GlobalStyles from './globalStyles'
import Nav from './Nav'
import useLists from '../hooks/useLists'
import SEO from './seo'

const Layout = ({children}) => {
  const [artists, subjects] = useLists()
  const [isArtListOpen, setArtListOpen] = useState(false)
  const [isSubListOpen, setSubListOpen] = useState(false)

  const artList = artists.map(artist => (
    <li key={artist} onClick={() => setArtListOpen(false)}>
      <Link to={`/artists/${artist}`}>{artist}</Link>
    </li>
  ))

  const subList = subjects.map(subject => (
    <li key={subject} onClick={() => setSubListOpen(false)}>
      <Link to={`/subjects/${subject}`}>{subject}</Link>
    </li>
  ))

  const showArtList = useSpring({
    transform: isArtListOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(-100%,0,0) scale(0.6)`,
  })

  const showSubList = useSpring({
    transform: isSubListOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(-100%,0,0) scale(0.6)`,
  })

  const Header = styled.header`
    display: flex;
    justify-content: center;
    flex-flow: wrap;

    .items {
      min-width: 100px;
      max-width: 180px;
      margin: 5px;
      background-color: purple;
      border-radius: 20px;
      flex: 1 1 auto;
      box-shadow: 2px 4px #b9b3b3aa;
      color: lightgrey;

      a {
        text-decoration: none;
        color: lightgrey;
      }
    }
  `

  return (
    <>
      <GlobalStyles />
      <SEO title={'Wednesday Isolationists'} />
      <Header>
        <button className="items">
          <Link to="/">Home</Link>
        </button>
        <button className="items" onClick={() => setArtListOpen(true)}>
          Artists
        </button>
        <button className="items" onClick={() => setSubListOpen(true)}>
          Subjects
        </button>
      </Header>

      <div>
        <Nav style={showArtList} list={artList} />
        <Nav style={showSubList} list={subList} />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
