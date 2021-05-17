import React from 'react'

import ReactDOM from 'react-dom'

import { Decoration5, Decoration8 } from '@jiaminghi/data-view-react'

import './TopHeader.less'

import moment from 'moment'

function ticking() {
  const element = (
    <div id="top-header">
      <Decoration8 className="header-left-decoration" />
      <Decoration5 className="header-center-decoration" />
      <Decoration8 className="header-right-decoration" reverse={true} />
      <div class="center-title">JNRS柔性自动线</div>
      <span style={{ position: 'fixed', left: '90%', top: '4%' }}>
        {moment(new Date()).format('YYYY.MM.DD HH:mm:ss')}
      </span>
    </div>
  )
  ReactDOM.render(element, document.getElementById('top-header'))
}
setInterval(ticking, 1000)

export default () => {
  return (
    <div id="top-header">
      <Decoration8 className="header-left-decoration" />
      <Decoration5 className="header-center-decoration" />
      <Decoration8 className="header-right-decoration" reverse={true} />
      <div class="center-title">JNRS柔性自动线</div>
    </div>
  )
}
