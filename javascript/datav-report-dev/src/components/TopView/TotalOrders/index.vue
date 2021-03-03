<template>
  <div>
    <common-card title="累计订单量" value="3,018,247">
      <template>
        <div id="total-orders-chart" :style="{ width: '100%', height: '100%' }"></div>
      </template>
      <template slot="footer">
        <div class="total">昨日订单量 <span class="emphasis">2,000,000</span></div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TotalOrders',
  mixins: [commonCardMixin],
  mounted: function () {
    const chatDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(chatDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 834, 690, 530, 220, 620],
        itemStyle: {
          opacity: 0
        },
        lineStyle: {
          width: 0
        },
        areaStyle: {
          color: 'purple'
        },
        smooth: true
      }],
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
    })
  }
}
</script>

<style>

</style>
