import React, { useState, useEffect } from 'react'

import { Charts, DigitalFlop, ActiveRingChart, Decoration11 } from '@jiaminghi/data-view-react'

import './Cards.less'

function getData() {
  return new Array(1).fill(0).map((foo, i) => ({
    title: '运行状态',
    total: {
      number: [randomExtend(9000, 10000)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#ea6027',
        fontWeight: 'bold',
      },
    },
    num: {
      number: [randomExtend(30, 60)],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#26fcd8',
        fontWeight: 'bold',
      },
    },
    ring: {
      radius: '68%',
      activeRadius: '90%',
      activeTimeGap: 1000,
      color: ['#00FF00', '#FF0000', '#FFFF00', '#0000FF', '#BEBEBE'],
      data: [
        {
          name: '运行',
          value: 55,
        },
        {
          name: '报警',
          value: 120,
        },
        {
          name: '暂停',
          value: 78,
        },
        {
          name: '空闲',
          value: 66,
        },
        {
          name: '离线',
          value: 80,
        },
      ],
    },
  }))
}

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export default () => {
  const [cards, setData] = useState([])

  useEffect(() => {
    createData()

    setInterval(createData, 30000)
  }, [])

  function createData() {
    setData(getData())
  }

  return (
    <div id="cards">
      {cards.map((card, i) => (
        <div className="card-item" key={card.title}>
          <div className="card-header">
            <Decoration11 style={{ width: '70%', height: '50px', marginLeft: '15%' }}>
              {card.title}
            </Decoration11>

            {/* <div className="card-header-right">{'自动线'}</div> */}
          </div>
          <ActiveRingChart className="ring-charts" config={card.ring} />
          {/* <div className="card-footer">
            <div className="card-footer-item">
              <div className="footer-title">累计金额</div>
              <div className="footer-detail">
                <DigitalFlop config={card.total} style={{ width: '70%', height: '35px' }} />元
              </div>
            </div>
            <div className="card-footer-item">
              <div className="footer-title">巡查病害</div>
              <div className="footer-detail">
                <DigitalFlop config={card.num} style={{ width: '70%', height: '35px' }} />处
              </div>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  )
}
