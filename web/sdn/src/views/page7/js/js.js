$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_21();
    echarts_22();
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));

        option1 = {

            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '0px',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {
                    type: 'line',
                    data: [5030, 8600, 3000, 7200, 7200, 5130, 10030, 8600, 13000, 7200, 9130, 4130],

                    itemStyle: {
                        normal: {
                            color: '#37a3ff',
                            opacity: 1,

                            BorderRadius: 3,
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize", function () {
            myChart.resize();
        });


    }
    function echarts_22() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart22'));

        option1 = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '0%',
                top: '5px',
                right: '0%',
                bottom: '0px',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{

                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {
                    type: 'line',
                    data: [7200, 9130, 5030, 8600, 3000, 7200, 4130, 5130, 10030, 8600, 13000, 7200],

                    itemStyle: {
                        normal: {
                            color: '#37a3ff',
                            opacity: 1,
                            barBorderRadius: 3,
                        }
                    }
                }

            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng01'));
        var gauge_value = 5;

        option = {
            title: {
                x: "center",
                bottom: 10,
                //text: '风向',
                subtext: 'sFlow Agents',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: "#fff"
                },
            },
            tooltip: {
                show: true,


            },
            series: [
                {
                    type: 'gauge',
                    radius: '60%',
                    center: ['50%', '55%'],
                    splitNumber: 7, //刻度数量
                    min: 0,
                    max: 70,
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#8f8f8f']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#8f8f8f',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 7
                    },
                    splitLine: {
                        show: true,
                        length: -5,
                        lineStyle: {
                            color: "rgba(255,255,255,.2)",
                        }
                    },
                    axisLabel: {
                        distance: -25,

                        formatter: function (e) {
                            switch (e + "") {
                                case "0":
                                    return "0";
                                case "10":
                                    return "2";

                                case "20":
                                    return "4";

                                case "30":
                                    return "6";

                                case "40":
                                    return "8";

                                case "50":
                                    return "10";

                                case "60":
                                    return "12";

                                case "70":
                                    return "14";

                                default:
                                    return e;
                            }
                        },
                        textStyle: {
                            fontSize: 10,
                            color: "rgba(255,255,255,.6)",
                        }

                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: 100
                    }]
                },

                {
                    name: 'sFlow Agents',
                    type: 'gauge',
                    startAngle: 225,
                    endAngle: -45,
                    radius: '56%',
                    center: ['50%', '55%'], // 默认全局居中  

                    min: 0,
                    max: 100,

                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 0,
                            color: [

                                [1, '#82b440']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        length: 20,

                    },

                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: true,
                        length: '65%',
                        width: 4
                    },
                    detail: {
                        show: false,
                        offsetCenter: [0, 0],
                        textStyle: {
                            fontSize: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#82b440",

                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(gauge_value)
                    }]
                }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng02'));
        var gauge_value = 15;
        option = {
            title: {
                x: "center",
                bottom: 0,

                subtext: 'sFlow Bytes',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: "#fff"
                },
            },
            tooltip: {
                show: true,


            },
            series: [
                {
                    type: 'gauge',
                    radius: '60%',
                    center: ['50%', '55%'],
                    splitNumber: 7, //刻度数量
                    min: 0,
                    max: 70,
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#8f8f8f']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#8f8f8f',
                            width: 1
                        },
                        length: -5,
                        splitNumber: 7
                    },
                    splitLine: {
                        show: true,
                        length: -5,
                        lineStyle: {
                            color: "rgba(255,255,255,.2)",
                        }
                    },
                    axisLabel: {
                        distance: -15,

                        textStyle: {
                            fontSize: 10,
                            color: "rgba(255,255,255,.6)",
                        }

                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: 100
                    }]
                },

                {
                    name: 'sFlow Bytes',
                    type: 'gauge',
                    startAngle: 225,
                    endAngle: -45,
                    radius: '56%',
                    center: ['50%', '55%'], // 默认全局居中  

                    min: 0,
                    max: 70,

                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 0,
                            color: [

                                [1, '#2ea7ff']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        length: 20,

                    },

                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: true,
                        length: '65%',
                        width: 4
                    },
                    detail: {
                        show: false,
                        offsetCenter: [0, 0],
                        textStyle: {
                            fontSize: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#2ea7ff",

                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(gauge_value)
                    }]
                }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng03'));
        var gauge_value = 17;

        option = {
            title: {
                x: "center",
                bottom: 0,
                subtext: 'sFlow Packets',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: "#fff"
                },
            },
            tooltip: {
                show: true,


            },
            series: [
                {
                    type: 'gauge',
                    radius: '60%',
                    center: ['50%', '55%'],
                    splitNumber: 10, //刻度数量
                    min: 0,
                    max: 100,
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            shadowBlur: 0,
                            color: [
                                [1, '#8f8f8f']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 1
                        },
                        length: -5,
                        splitNumber: 7
                    },
                    splitLine: {
                        show: true,
                        length: -5,
                        lineStyle: {
                            color: "rgba(255,255,255,.2)",
                        }
                    },
                    axisLabel: {
                        distance: -15,
                        textStyle: {
                            fontSize: 10,
                            color: "rgba(255,255,255,.6)",
                        }

                    },
                    pointer: { //仪表盘指针
                        show: 0
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        name: "",
                        value: 100
                    }]
                },

                {
                    name: 'sFlow Packets',
                    type: 'gauge',
                    startAngle: 225,
                    endAngle: -45,
                    radius: '56%',
                    center: ['50%', '55%'], // 默认全局居中  

                    min: 0,
                    max: 100,

                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            shadowBlur: 0,
                            color: [

                                [1, '#ff7109']
                            ]
                        }
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                        length: 20,

                    },

                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: true,
                        length: '65%',
                        width: 4
                    },
                    detail: {
                        show: false,
                        offsetCenter: [0, 0],
                        textStyle: {
                            fontSize: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#ff7109",

                        }
                    },
                    data: [{
                        name: "",
                        value: Math.floor(gauge_value)
                    }]
                }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        var lightBlue = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgba(41, 121, 255, 1)'
            }, {
                offset: 1,
                color: 'rgba(0, 192, 255, 1)'
            }],
            globalCoord: false
        }

        var option = {
            tooltip: {
                show: false
            },
            grid: {
                top: '0%',
                left: '60',
                right: '50',
                bottom: '0%',
            },
            xAxis: {
                min: 0,
                //max: 12000,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false

                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                data: ['交换机3', '交换机5', '交换机7', '交换机9', '交换机6'],
                //offset: 15,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 14,


                }
            },
            series: [{
                type: 'bar',
                label: {
                    show: true,
                    zlevel: 10000,
                    position: 'right',
                    padding: 6,
                    color: '#4e84a1',
                    fontSize: 14,
                    formatter: '{c}'

                },
                itemStyle: {
                    barBorderRadius: 25,
                    color: '#3facff'
                },
                barWidth: '15',

                data: [656464, 656465, 546456, 321311, 313236],
                z: 6
            }
            ],
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }





})


















