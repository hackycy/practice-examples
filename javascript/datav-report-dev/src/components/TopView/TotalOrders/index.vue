<template>
  <div>
    <common-card title="累计订单量" value="3,018,247">
      <template>
        <div id="total-orders-chart" style="height=100%;width=100%;"></div>
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
  mounted: () => {
    console.log('mounted')
  }
}
</script>

<style>

</style>
