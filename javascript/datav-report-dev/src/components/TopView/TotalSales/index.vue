<template>
  <div class="total-sales">
    <common-card title="累计销售额" value="¥ 48,241,478">
      <template>
        <div class="total-sales-changes">
          日同比 <span class="emphasis">60.80%</span>
          <div class="increase"></div>
        </div>
        <div class="total-sales-changes">
          月同比 <span class="emphasis">107.94%</span>
          <div class="decrease"></div>
        </div>
      </template>
      <template slot="footer">
        <div class="total">
          昨日销售额 <span class="emphasis">¥ 30,000,000</span>
        </div>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TotalSales',
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.total-sales {
  .total-sales-changes {
    color: #666;
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    box-align: center;
    -webkit-box-align: center;
  }
  .total {
    color: #666;
  }
}
</style>
