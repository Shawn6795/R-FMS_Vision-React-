import React, { Component } from 'react'

import { WaterLevelPond, Decoration1 } from '@jiaminghi/data-view-react'

import './WaterLevelChart.less'

import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/custom'
import { TooltipComponent } from 'echarts/components'
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'

import moment from 'moment'

import axios from 'axios'
import { render } from 'less'
echarts.use([BarChart])
echarts.use([GridComponent])
echarts.use([TooltipComponent])

const config = {
  data: [45],
  shape: 'round',
  waveHeight: 25,
  waveNum: 2,
}

class App extends Component {
  componentDidMount() {
    var count = 0
    var chart = document.getElementById('main')

    var myChart = echarts.getInstanceByDom(chart)
    //var myChart = echarts.init(document.getElementById('main'))
    axios({
      method: 'get',
      url: '/api/services/app/vision/GetRunStateChart',
    }).then(function(res) {
      if (myChart == undefined) {
        myChart = echarts.init(chart)
      }
      var colors = ['#008000', '#FF0000', '#FFA500', '#0000FF', '#888888']
      var state = ['运行', '报警', '暂停', '空闲', '关机']
      var xdata = [
        res.data.result.machine[0],
        res.data.result.machine[1],
        res.data.result.machine[2],
      ]
      var ydata = res.data.result.chartData
      // var xdata2 = [data.machine[3], data.machine[4], data.machine[5]]
      // var ydata2 = data.chartData2
      // var xdata = null
      // var ydata = null
      // if (count % 2 == 0) {
      //   xdata = xdata2
      //   ydata = ydata2
      //   count++
      // } else {
      //   xdata = xdata1
      //   ydata = ydata1
      //   count++
      // }

      var option = {
        color: colors,
        tooltip: {
          formatter: function(params) {
            return (
              params.name +
              ' : ' +
              params.value[1] +
              '~' +
              moment(params.value[2]).format('HH:mm:ss') +
              '<br/>' +
              '持续时间：' +
              ((new Date(params.value[2]) - new Date(params.value[1])) / (60 * 1000)).toFixed(0) +
              '分钟'
            )
          },
        },

        grid: {
          left: '3%',
          right: '3%',
          top: '1%',
          bottom: '1%',
          containLabel: true,
        },
        xAxis: {
          type: 'time',
          interval: 3600 * 2 * 1000,
          axisLabel: {
            formatter: function(value) {
              var date = new Date(value)
              return getzf(date.getHours()) + ':' + getzf(date.getMinutes())
              function getzf(num) {
                if (parseInt(num) < 10) {
                  num = '0' + num
                }
                return num
              }
            },
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize: '12',
            },
          },
          splitLine: {
            //网格线
            lineStyle: {
              type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true, //隐藏或显示
          },
        },
        //xAxis: {
        //    min: 0 // x轴零刻度对应的实际值
        //},
        yAxis: {
          data: xdata,
          axisLabel: {
            interval: 0,
            // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
              color: 'rgba(255,255,255,.6)',
              fontSize: '12',
            },
          },
        },
        series: [
          // 用空bar来显示四个图例
          { name: state[0], type: 'bar', data: [] },
          { name: state[1], type: 'bar', data: [] },
          { name: state[2], type: 'bar', data: [] },
          { name: state[3], type: 'bar', data: [] },
          { name: state[4], type: 'bar', data: [] },
          {
            type: 'custom',
            renderItem: function(params, api) {
              var categoryIndex = api.value(0)
              var start = api.coord([api.value(1), categoryIndex])
              var end = api.coord([api.value(2), categoryIndex])
              var height = 20

              return {
                type: 'rect',
                shape: echarts.graphic.clipRectByRect(
                  {
                    x: start[0],
                    y: start[1] - height / 2,
                    width: end[0] - start[0],
                    height: height,
                  },
                  {
                    x: params.coordSys.x,
                    y: params.coordSys.y,
                    width: params.coordSys.width,
                    height: params.coordSys.height,
                  }
                ),
                style: api.style(),
              }
            },
            encode: {
              x: [1, 2],
              y: 0,
            },
            data: ydata,
          },
        ],
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.clear()
      myChart.setOption(option)
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    })
  }
  render() {
    return (
      <div id="water-level-chart">
        <div className="water-level-chart-title">
          <Decoration1 style={{ width: '200px', height: '50px' }} />
          24H运行状态
          <Decoration1 style={{ width: '200px', height: '50px' }} />
        </div>

        {/* <div className="water-level-chart-details">
    累计完成<span>235,680</span>元
  </div> */}

        <div className="chart-container">
          <div id="main" style={{ width: '95%', height: '95%' }}>
            {' '}
          </div>
          {/* <WaterLevelPond config={config} /> */}
        </div>
      </div>
    )
  }
}

//var chart = document.getElementById('main')

//var myChart = echarts.getInstanceByDom(chart)

// export default () => {
//   return (

//   )
// }
export default App
