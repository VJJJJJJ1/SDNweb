<template>   
    <!-- <ContenFiled>
        page3
    </ContenFiled> -->
    <div>
        <div ref="mychart1" id = "myDiv1"></div>
        <div ref="mychart2" id = "myDiv2"></div>
        <div ref="mychart3" id = "myDiv3"></div>
    </div>
</template>

<script>
// import ContenFiled from '../../components/ContentFiled.vue'
import * as echarts from 'echarts';

export default{
    mounted(){
        let myChart = echarts.init(this.$refs.mychart1, 'light');
        let myChart2 = echarts.init(this.$refs.mychart2, 'light');
        let myChart3 = echarts.init(this.$refs.mychart3, 'light');
        var option;
        var option2;
        var option3;

        let base = +new Date(1988, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let data = [[base, Math.random() * 300]];
        for (let i = 1; i < 20000; i++) {
        let now = new Date((base += oneDay));
        data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
        }
        option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
            return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: 'Flows 流',
            textStyle: {
                color: "black",
                fontSize: 30,
          },
        },
        toolbox: {
            feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
            }
        },
        xAxis: {
            type: 'time',
            boundaryGap: false
        },
        yAxis: {
            name:'Bits/s',
            nameTextStyle:{
                fontSize:20
            },
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [
            {
            type: 'inside',
            start: 0,
            end: 20
            },
            {
            start: 0,
            end: 20
            }
        ],
        series: [
            {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data: data
            }
        ]
        };
        option && myChart.setOption(option);


        let base2 = +new Date(1968, 9, 3);
        let oneDay2 = 24 * 3600 * 1000;
        let date = [];
        let data2 = [Math.random() * 300];
        for (let i = 1; i < 20000; i++) {
        var now2 = new Date((base2 += oneDay2));
        date.push([now2.getFullYear(), now2.getMonth() + 1, now2.getDate()].join('/'));
        data2.push(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]));
        }
        option2 = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
            return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: 'Port 端',
            textStyle: {
                color: "black",
                fontSize: 30,
          },
        },
        toolbox: {
            feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            name:'Bits/s',
            nameTextStyle:{
                fontSize:20
            },
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [
            {
            type: 'inside',
            start: 0,
            end: 10
            },
            {
            start: 0,
            end: 10
            }
        ],
        series: [
            {
            name: 'Fake Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                },
                {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }
                ])
            },
            data: data2
            }
        ]
        };

        option2 && myChart2.setOption(option2);


        option3 = {
            title: {
            left: 'center',
            text: '拓扑',
            textStyle: {
                color: "black",
                fontSize: 30,
          },
        },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                name:'Diameter',
                nameTextStyle:{
                    fontSize:20
                },
                type: 'value'
            },
            series: [
                {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
                }
            ]
            };
            option3 && myChart3.setOption(option3);




    }
}
// export default{
//     components:{
//     ContenFiled
// }
// }
</script>

<style scoped>
#myDiv1{
    width: 100%;
    height: 500px;
    align-items: center;
    margin-top: 100px;
}
#myDiv2{
    width: 100%;
    height: 500px;
    align-items: center;
    margin-top: 150px;
}
#myDiv3{
    width: 100%;
    height: 500px;
    align-items: center;
    margin-top: 150px;
}

</style>