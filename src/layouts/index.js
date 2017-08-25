import React from 'react'
import Link from 'gatsby-link'
import { rhythm, scale } from '../utils/typography'
import 'tachyons'
import './index.css'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div className="flex flex-column vh-100 w-100">
        <Head />
        <div className="flex flex-auto">
          <Sidebar />
          {children()}
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
