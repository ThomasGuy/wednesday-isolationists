import React from "react"
import Img from "gatsby-image"

const PictureBox = ({ fluid, alt, meta }) => {
  return (
    <div>
      <h3>
        {meta.subject} {meta.slug}
      </h3>
      <Img fluid={fluid} alt={alt} />
    </div>
  )
}

export default PictureBox
