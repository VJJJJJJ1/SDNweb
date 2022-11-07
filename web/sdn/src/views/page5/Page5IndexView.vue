<template>   
    <!-- <ContenFiled>
        page3
    </ContenFiled> -->
    <div>
        <div class="row" id = "top">
          <div class="col-1"></div>
          <div class="col-3">Agent</div>
          <div class="col-3">度量标准</div>
          <div class="col-2">数据源</div>
          <div class="col-2">统计量</div>
        </div>


        <div class="row" id = "top">
          <div class="col-1"></div>
          <div class="col-3">
            <select class="form-select">
              <option>ALL</option>
            </select>
          </div>
          <div class="col-3">
            <select class="form-select">
              <option>app_conn_max</option>
              <option>app_conn_open</option>
              <option>app_fd_max</option>
              <option>app_fd_open</option>
              <option>app_mem_max</option>
            </select>
          </div>
          <div class="col-2">
            <select class="form-select">
              <option>ALL</option>
            </select>
          </div>
          <div class="col-2">
            <select class="form-select">
              <option>max</option>
              <option>min</option>
              <option>average</option>
            </select>
          </div>
        </div>

        <div class="Tab">
          <table class="table table-striped">
            <tbody>
              <tr>
                <th scope="col">value</th>
                <td >365.946</td>
              </tr>
              <tr>
                <th scope="col">N</th>
                <td>37</td>
              </tr>
              <tr>
                <th scope="col">Agent</th>
                <td>127.0.0.1</td>
              </tr>
              <tr>
                <th scope="col">统计量</th>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div ref="mychart" id = "myDiv"></div>
    </div>

</template>

<script>
import * as echarts from 'echarts';


export default{
    mounted(){
        let myChart = echarts.init(this.$refs.mychart);
        let option;
        option = {
            xAxis: {
                type: 'category',
                data: ['22:24:00', '22:25:00', '22:26:00', '22:27:00', '22:28:00', '22:29:00', '22:30:00']
            },
            yAxis: {
                nameTextStyle:{
                    fontSize:20
                },
                type: 'value',
                min:0,
                max:400
            },
            series: [
                {
                data: [0, 0, 0, 0, 0, 0, 0],
                type: 'line'
                }
            ]
            };
            option && myChart.setOption(option);
    }
}
// export default{
//     components:{
//     ContenFiled
// }
// }
</script>

<style scoped>
#top {
   margin-top: 20px;
   font-size: 25px;
}
.Tab{
  margin-top: 20px;
  margin-left: 8.33333%;
  margin-right: 8.33333%;
  text-align: center;
}
#myDiv{
    width: 100%;
    height: 500px;
    align-items: center;
    margin-top: 50px;
}
</style>