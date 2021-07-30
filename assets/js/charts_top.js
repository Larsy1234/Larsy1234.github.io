// import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option =  {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        data: ['IDO', 'ADD LP', 'MAKETING', 'DEV WALLET', 'AIRDORP']
    },
    grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
		 splitLine:{show: false},
		 scale: false
    },
    yAxis: {
        type: 'category',
        data: ['Distribution'],
		splitLine:{show: false},
		scale: false
    },
    series: [
        {
            name: 'IDO',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [50]
        },
        {
            name: 'ADD LP',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [40]
        },
        {
            name: 'MAKETING',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [5]
        },
        {
            name: 'DEV WALLET',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [3]
        },
        {
            name: 'AIRDORP',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [2]
        }
    ]
};

option && myChart.setOption(option);
