import React, { useState, useEffect } from 'react'

import { DigitalFlop, Decoration10 } from '@jiaminghi/data-view-react'

import './DigitalFlop.less'

function getData() {
  return [
    {
      title: '运行',
      number: {
        number: [randomExtend(5, 15)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
        },
      },
      unit: '个',
    },
    {
      title: '暂停',
      number: {
        number: [randomExtend(20, 30)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#f46827',
          fontWeight: 'bold',
        },
      },
      unit: '个',
    },
    {
      title: '报警',
      number: {
        number: [randomExtend(20, 30)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#40faee',
          fontWeight: 'bold',
        },
      },
      unit: '个',
    },
    {
      title: '离线',
      number: {
        number: [randomExtend(10, 20)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
        },
      },
      unit: '个',
    },
  ]
}

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export default () => {
  const [digitalFlopData, setData] = useState([])

  useEffect(() => {
    createData()

    const timer = setInterval(createData, 30000)

    return () => clearInterval(timer)
  }, [])

  function createData() {
    setData(getData())
  }

  return (
    <div id="digital-flop">
      {digitalFlopData.map(item => (
        <div className="digital-flop-item" key={item.title}>
          <div className="digital-flop-title">{item.title}</div>
          <div className="digital-flop">
            <DigitalFlop config={item.number} style={{ width: '100px', height: '50px' }} />
            <div className="unit">{item.unit}</div>
          </div>
        </div>
      ))}

      <Decoration10 />
    </div>
  )
}
