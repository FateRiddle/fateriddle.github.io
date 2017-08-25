import React from 'react'

const items = ['主页', '关于我']

const Sidebar = () =>
  <ul className="flex-none flex flex-column mb0 w4 f4 br">
    {items.map(i =>
      <li key={i} className="pv4 tc mb0">
        {i}
      </li>
    )}
  </ul>

export default Sidebar
