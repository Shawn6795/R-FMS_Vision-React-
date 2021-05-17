import React, { useState, useEffect, Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Charts,
  Decoration3,
  Decoration2,
  Decoration10,
  Decoration7,
} from '@jiaminghi/data-view-react'

import './RoseChart.less'
import tsIcon from './img/ZZT.png'
import robo from './img/robo.png'
import jc from './img/jc.png'
import $ from 'jquery'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { move: false, count: 1 }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1500)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    if (this.state.count == 1) {
      this.setState({
        move: 'moveB',
        count: 3,
      })
    } else if (this.state.count == 2) {
      this.setState({
        move: 'moveC',
        count: 1,
      })
    } else if (this.state.count == 3) {
      this.setState({
        move: 'moveD',
        count: 4,
      })
    } else if (this.state.count == 4) {
      this.setState({
        move: 'moveE',
        count: 2,
      })
    } else if (this.state.count == 5) {
      this.setState({
        move: 'moveA',
        count: 5,
      })
    }
  }

  render() {
    return (
      <div id="rose-chart">
        <div className="rose-chart-title">
          <Decoration10 style={{ width: '40%', height: '30px' }} />
          <div style={{ width: '20%', textAlign: 'center' }}>
            <Decoration7 style={{ width: '150px', height: '30px' }}>
              &nbsp;&nbsp;布局图&nbsp;&nbsp;{' '}
            </Decoration7>
          </div>
          <Decoration10 style={{ width: '40%', height: '30px' }} />
        </div>
        <img src={jc} alt="" style={{ width: '12%', marginLeft: '5%' }} />
        <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
        <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
        <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
        <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
        {/* <img
          src={robo}
          alt=""
          ref={input => (this.input = input)}
          className={['moveA', this.state.focused && 'moveB'].join(' ')}
        /> */}
        <img src={robo} alt="" className={['moveA', this.state.move].join(' ')} />
        <div className="digui"></div>
      </div>
    )
  }
}

//ReactDOM.render(<Clock />, document.getElementById('rose-chart'))

// class App extends Component {
//   state = {
//     focused: false,
//     moveB: false,
//     moveC: false,
//   }
//   componentDidMount() {
//     this.img.addEventListener('click', this.focus)
//     this.img.addEventListener('blur', this.focus)
//   }
//   focus = () => {
//     this.setState(
//       {
//         moveB: 'moveB',
//       },
//       () => {
//         this.state.moveC = 'moveC'
//       }
//     )
//   }
//   render() {
//     return (
//       <div id="rose-chart">
//         <div className="rose-chart-title">
//           <Decoration2 style={{ width: '40%', height: '30px' }} />
//           <div style={{ width: '20%', textAlign: 'center' }}> 布局图</div>
//           <Decoration2 style={{ width: '40%', height: '30px' }} />
//         </div>
//         <img src={jc} alt="" style={{ width: '12%', marginLeft: '5%' }} />
//         <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
//         <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
//         <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
//         <img src={jc} alt="" style={{ width: '12%', marginLeft: '8%' }} />
//         {/* <img
//           src={robo}
//           alt=""
//           ref={input => (this.input = input)}
//           className={['moveA', this.state.focused && 'moveB'].join(' ')}
//         /> */}
//         <img
//           src={robo}
//           alt=""
//           ref={img => (this.img = img)}
//           className={['moveA', this.state.moveB, this.state.moveC].join(' ')}
//         />
//       </div>
//     )
//   }
// }

export default Clock
