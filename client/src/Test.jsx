import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './test.css'

function Test() {
    const state={
          
      series: [{
        name: 'Spent',
        data: [0,0,0,0,0,0,0,45,56, 89]
      }, {
        name: 'Limit',
        data: [0,0,0,0,0,0,0, 65, 34, 98]
      }, {
        name: 'Balance',
        data: [0,0,0,0,0,0,0, 91, 56, 72]
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
          categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
            <ReactApexChart options={state.options} series={state.series} type="bar" height={230} width={400} />
            </div>
        </div>
      )
    }

export default Test
