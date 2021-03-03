<template>
  <div>
    <common-card title="今日交易用户数" value="509,951">
      <template>
        <div
          id="today-users-chart"
          :style="{ width: '100%', height: '100%' }"
        ></div>
      </template>
      <template slot="footer">
        <div class="total">退货率 <span class="emphasis">5.71%</span></div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('today-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        data: ['00:00', '01:00', '02:00', '03:00', '04:00',
          '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00']
      },
      yAxis: {
        show: false
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          return `<div>${params[0].name}</div><div>${params[0].marker} 直接访问：${params[0].value}</div>`
        }
      },
      series: [
        {
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
          itemStyle: {
            color: '#3498db'
          },
          barWidth: '60%'
        }
      ],
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    })
  }
}
</script>

<style>
</style>
