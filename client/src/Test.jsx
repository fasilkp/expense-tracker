import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './test.css'

function Test() {
    const state={
          
      series: [{
        name: 'Spent',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66,45,56, 89]
      }, {
        name: 'Limit',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 65, 34, 98]
      }, {
        name: 'Balance',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 91, 56, 72]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
    
    
    };
      return (
        <div id="charts">
            <div className="chart-container">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={295} width={500} />
            </div>
        </div>
      )
    }

export default Test
