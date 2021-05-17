import React from 'react'

import { ScrollBoard } from '@jiaminghi/data-view-react'

import './ScrollBoard.less'

const config = {
  header: ['时间', '设备', '报警内容'],
  data: [
    ['2021-05-01 19:25:00', '机器人', '报警1'],
    ['2021-05-02 17:25:00', '机器人', '报警2'],
    ['2021-05-03 16:25:00', '机器人', '报警3'],
    ['2021-05-04 15:25:00', 'OP10', '报警4'],
    ['2021-05-05 14:25:00', 'OP10', '报警5'],
    ['2021-05-06 13:25:00', 'OP10', '报警6'],
    ['2021-05-07 12:25:00', 'OP20', '报警7'],
    ['2021-05-08 11:25:00', 'OP20', '报警8'],
    ['2021-05-09 10:25:00', 'OP30', '报警9'],
    ['2021-05-10 09:25:00', 'OP30', '报警10'],
  ],
  index: true,
  columnWidth: [50, 160, 100],
  align: ['center'],
  rowNum: 7,
  headerBGC: '#1981f6',
  headerHeight: 45,
  oddRowBGC: 'rgba(0, 44, 81, 0.8)',
  evenRowBGC: 'rgba(10, 29, 50, 0.8)',
  waitTime: 1000,
}

export default () => {
  return (
    <div id="scroll-board">
      <ScrollBoard config={config} />
    </div>
  )
}
