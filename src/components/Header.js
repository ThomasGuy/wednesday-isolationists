import React from "react"
import { Link } from "gatsby"

import useLists from "../hooks/useLists"

const Header = () => {
  const [artists] = useLists()
  const artistList = artists.map((artist, idx) => {
    return (
      <li key={idx}>
        <Link to={`/artists/${artist}`}>{artist}</Link>
      </li>
    )
  })
  return (
    <>
      <Link to="/">Home</Link>
      <div>{artistList}</div>
    </>
  )
}

export default Header
