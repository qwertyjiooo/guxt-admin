export const cardList = [
    {
        id: 1,
        title: '今日新增用户',
        count: 100,
        icon: '/src/assets/svg/QQ.svg',
        // color: '#737373',
        background: 'linear-gradient(to right, rgba(255, 182, 193, 0.7), rgba(230, 192, 255, 0.7))', // 渐变色1
        allTitle: '总用户数',
        allCount: 1000
    }, {
        id: 2,
        title: '今日活跃用户',
        count: 100,
        icon: '/src/assets/svg/weixin.svg',
        // color: '#737373',
        background: 'linear-gradient(to right, rgba(173, 216, 230, 0.6), rgba(255, 182, 193, 0.6))', // 渐变色2
        allTitle: '总活跃用户',
        allCount: 33
    }, {
        id: 3,
        title: '今日新增内容',
        count: 100,
        icon: '/src/assets/svg/weibo.svg',
        // color: '#737373',
        background: 'linear-gradient(to right, rgba(255, 218, 185, 0.6), rgba(255, 240, 245, 0.6))', // 渐变色3
        allTitle: '总内容数',
        allCount: 1000
    }, {
        id: 4,
        title: '今日新增评论',
        count: 100,
        icon: '/src/assets/svg/QQ.svg',
        // color: '#737373',
        background: 'linear-gradient(to right, rgba(230, 192, 255, 0.5), rgba(173, 216, 230, 0.5))', // 渐变色4
        allTitle: '总评论量',
        allCount: 1000
    }
]

export const option = {
    option1: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ],
        grid: { // 让图表占满容器
            top: "20px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            containLabel: true
        },
    },
    option2: {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '0%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    // { value: 484, name: 'Union Ads' },
                    // { value: 300, name: 'Video Ads' }
                ]

            }
        ],
        grid: { // 让图表占满容器
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            containLabel: true
        },
    },
    option3: {
        title: {
            text: 'Stacked Area Chart'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ],
    },
}