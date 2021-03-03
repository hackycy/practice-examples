<template>
  <div class="total-users">
    <common-card title="累计用户数" value="1,006,872">
      <template>
        <div
          id="total-users-chart"
          :style="{ height: '100%', width: '100%' }"
        ></div>
      </template>
      <template slot="footer">
        <div class="total">
          日同比 <span class="emphasis">83.54%</span>
          <div class="increase"></div>
          <span class="m-15">月同比</span> <span class="emphasis">129.42%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [100],
          stack: 'TotalUsers',
          barWidth: '20%',
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          type: 'bar',
          data: [250],
          stack: 'TotalUsers',
          itemStyle: {
            color: '#eee'
          }
        },
        {
          type: 'custom',
          data: [100],
          stack: 'TotalUsers',
          renderItem: (params, api) => {
            const value = api.value(0)
            const point = api.coord([value, 0])
            return {
              type: 'group',
              position: point,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M230.588 399.482h562.824l-281.412 337.514z',
                    width: 10,
                    height: 10,
                    x: 0 - 5,
                    y: 0 - 15
                  },
                  style: {
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  rotation: 3.14,
                  shape: {
                    d: 'M230.588 399.482h562.824l-281.412 337.514z',
                    width: 10,
                    height: 10,
                    x: 0 - 5,
                    y: 0 - 15
                  },
                  style: {
                    fill: '#45c946'
                  }
                }
              ]
            }
          }
        }
      ],
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.total-users {
  .total {
    display: flex;
    align-items: center;

    .m-15 {
      margin-left: 15px;
    }
  }
}
</style>
