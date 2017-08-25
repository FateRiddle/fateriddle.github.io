import React from 'react'
import Link from 'gatsby-link'

const Head = ({ title }) =>
  <div className="flex-none f1-l f2-m f3 pa3 w-100 white bg-black bb b--yellow bw3">
    <Link
      className=""
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
      to={'/'}
    >
      Fate的博客
    </Link>
  </div>

export default Head
