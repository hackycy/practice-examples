<template>
  <div class="common-card">
    <el-card shadow="hover">
      <div class="title">{{ title }}</div>
      <div class="value">{{ value }}</div>
      <div class="chart">
        <slot></slot>
      </div>
      <div class="line"></div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.common-card {
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart {
    height: 50px;
    width: 100%;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .line {
    margin: 10px 0;
    width: 100%;
    border-top: 1px solid #eee;
  }
  .footer {
    font-size: 12px;
    color: #666;
  }
}
</style>
<style>
.emphasis {
  color: #333;
  margin-left: 5px;
  font-weight: 700;
}
.decrease, .increase {
    width: 0;
    height: 0;
    border-width: 3px;
    border-style: solid;
}
.increase {
    border-color: transparent transparent red transparent;
    margin: 0 0 3px 5px;
}
.decrease {
    border-color: green transparent transparent transparent;
    margin: 3px 0 0 5px;
}
</style>
