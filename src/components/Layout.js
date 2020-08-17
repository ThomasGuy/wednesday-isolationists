import React, {useState} from 'react'
import {animated, useSpring} from 'react-spring'
import styled from 'styled-components'
import {Link} from 'gatsby'

import useLists from '../hooks/useLists'
import Nav from './Nav'
import GlobalStyle from './globalStyles'

const Layout = ({children}) => {
  const [artistOpen, setArtistOpen] = useState(false)
  const [subjectOpen, setSubjectOpen] = useState(false)
  const [artists, subjects] = useLists()

  const artistList = artists.map((artist, idx) => {
    return (
      <li key={`${idx}${artist}`} onClick={() => setArtistOpen(false)}>
        <Link to={`/artists/${artist}`}>{artist}</Link>
      </li>
    )
  })
  const subjectList = subjects.map((subject, idx) => {
    return (
      <li key={`${idx}${subject}`} onClick={() => setSubjectOpen(false)}>
        <Link to={`/subjects/${subject}`}>{subject}</Link>
      </li>
    )
  })

  const openArtList = useSpring({
    transform: artistOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(-100%,0,0) scale(0.6)`,
  })

  const openSubjectList = useSpring({
    transform: subjectOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(-100%,0,0) scale(0.6)`,
  })

  const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap;

    button {
      height: 40px;
    }

    .nav-item {
      max-width: 200px;
      flex: 1 1 auto;
      background-color: #7f15c5;
      border-radius: 20px;
      box-shadow: 2px 4px #b9b3b3cc;
      margin: 3px 5px;
    }
  `

  return (
    <>
      <GlobalStyle />
      <Header>
        <button className="nav-item">
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
            Home
          </Link>
        </button>
        <button className="nav-item" onClick={() => setArtistOpen(true)}>
          Artists
        </button>
        <button className="nav-item" onClick={() => setSubjectOpen(true)}>
          Subjects
        </button>
      </Header>

      <Nav style={openArtList} list={artistList} />
      <Nav style={openSubjectList} list={subjectList} />
      <main>{children}</main>
    </>
  )
}

export default Layout
