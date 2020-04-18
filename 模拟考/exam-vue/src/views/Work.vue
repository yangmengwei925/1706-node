<template>
  <div class="work">
        <div id="myChart" class="mycharts"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  mounted(){
    let options = {
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
    }
    echarts.init(document.getElementById('myChart')).setOption(options);
  }
}
</script>
<style scoped>
.mycharts{
  width: 600px;
  height: 300px;
}
</style>
