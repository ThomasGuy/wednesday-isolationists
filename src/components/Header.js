import React from "react"
import { Link } from "gatsby"

import useLists from "../hooks/useLists"

const Header = () => {
  const [artists, subjects] = useLists()
  const artistList = artists.map((artist, idx) => {
    return (
      <li key={`${idx}${artist}`}>
        <Link to={`/artists/${artist}`}>{artist}</Link>
      </li>
    )
  })
  const subjectList = subjects.map((subject, idx) => {
    return (
      <li key={`${idx}${subject}`}>
        <Link to={`/subjects/${subject}`}>{subject}</Link>
      </li>
    )
  })
  return (
    <>
      <Link to="/">Home</Link>
      <div>{artistList}</div>
      <div>{subjectList}</div>
    </>
  )
}

export default Header
