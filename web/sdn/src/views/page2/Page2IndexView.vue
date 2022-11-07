<template>   
    <!-- <ContenFiled>
        page2
    </ContenFiled> -->

    <div>
      <div ref="mychart" id = "myDiv"></div>
    </div>

    

</template>

<script>

// import ContenFiled from '../../components/ContentFiled.vue'
import * as echarts from 'echarts';


export default{
    mounted(){
        let myChart = echarts.init(this.$refs.mychart);
        let option;
        function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        };
      }
      let data = [];
      let now = new Date(2000, 10, 5);
      let oneDay = 24 * 3600 * 1000;
      let value = Math.random() * 1000;
      for (var i = 0; i < 1000; i++) {
        data.push(randomData());
      }
      option = {
        title: {
          left: 'center',
          text: '协议',
          textStyle: {
                
                color: "black",
                fontSize: 30,
          },

        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          name:'Bits/s',
            nameTextStyle:{
                fontSize:20
            },
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ]
      };
      setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 1000);

      option && myChart.setOption(option);
    }
}



// export default{
//     components:{
//         ContenFiled
//     }
// }
</script>

<style scoped>
div{
    width:100%;
    height: 800px;
}

</style>
