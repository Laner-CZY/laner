setTimeout(()=>{
    echart_1()
    echart_2()
    echart_3()
    echart_4()
    echart_5()
}, 50)    

function echart_1 () {
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('main'));

     // 指定图表的配置项和数据
     var option = {
       title: {
         text: '已建水电站'
         },
       tooltip: {},
       legend: {
         data: ['已建水电站']
       },
       xAxis: {
         data: ['岷江流域', '雅砻江流域', '嘉陵江流域', '金沙江流域', '大渡河流域']
       },
       yAxis: {},
       series: [
         {
           name: '销量',
           type: 'bar',
           data: [59, 49, 52, 29, 103]
         }
       ]
     };
 
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}

function echart_2 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_b'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            
        text: '总装机（万/千瓦）'
        },
      tooltip: {},
      legend: {
        data: ['总装机']
      },
      xAxis: {
        data: ['岷江流域', '雅砻江流域', '嘉陵江流域', '金沙江流域', '大渡河流域']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [573,2070, 523, 1963, 246.3]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function echart_3 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_c'));

    // 指定图表的配置项和数据
    option = {
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 196,
                name: '太阳能装机(1.17%)'
              },
              {
                value: 527,
                name: '风电装机(4.16%)'
              },
              {
                value: 8887,
                name: '水电装机(77.72%)'
                },
                {
                    value: 1829,
                    name: '其他(15.96%)'
                  }
            ]
          }
        ]
    };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}

function echart_4 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_q'));

    // 指定图表的配置项和数据
    option = {
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 2212,
                name: '水电发电量:2212亿千瓦'
              },
              {
                value: 188.89,
                name: '火电发电量:182.89亿千瓦'
              },
              {
                value: 0.96,
                name: '外购电量:0.96亿千瓦'
              },
              {
                value: 978.16,
                name: '外送电量:978.16亿千瓦'
              }
            ],
            roseType: 'area'
          }
        ]
      };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}
function echart_5 () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_w'));

    // 指定图表的配置项和数据
    option = {
        xAxis: {
          data: ['水电发电量', '火电发电量', '外购电量', '外送电量']
        },
        yAxis: {},
        series: [
          {
            type: 'scatter',
            data: [1129,422.43,64.32,341.98]
          }
        ]
      };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
}