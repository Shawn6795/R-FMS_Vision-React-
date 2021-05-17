import React from 'react'

import {
  ScrollRankingBoard,
  Decoration6,
  Decoration7,
  Decoration11,
  Decoration9,
} from '@jiaminghi/data-view-react'

import './RankingBoard.less'

const config = {
  data: [
    {
      name: 'A产品',
      value: 55,
    },
    {
      name: 'B产品',
      value: 120,
    },
    {
      name: 'C产品',
      value: 78,
    },
    {
      name: 'D产品',
      value: 66,
    },
    {
      name: 'E产品',
      value: 80,
    },
    {
      name: 'F产品',
      value: 45,
    },
    {
      name: 'G产品',
      value: 29,
    },
    {
      name: 'H产品',
      value: 29,
    },
    {
      name: 'K产品',
      value: 29,
    },
  ],
  rowNum: 9,
}

export default () => {
  return (
    <div id="ranking-board">
      <div className="ranking-board-title">
        {/* <Decoration7 style={{ width: '100%', height: '50px' }}>产品产量</Decoration7> */}
        <Decoration9 style={{ width: '39px', height: '39px', marginLeft: '10%' }}></Decoration9>
        <div style={{ marginLeft: '10%' }}>产品产量</div>
      </div>
      <ScrollRankingBoard config={config} />
    </div>
  )
}
