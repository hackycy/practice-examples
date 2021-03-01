<template>
  <div class="common-card">
    <div class="title">1</div>
    <div class="value">2</div>
    <div class="chart">3</div>
    <div class="line">4</div>
    <div class="footer">5</div>
  </div>
</template>

<script>
export default {
  name: 'CommonCard'
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
    font-weight: bold;
    color: black;
    margin-top: 5px;
  }
  .chart {
    height: 50px;
    width: 100%;
  }
}
</style>
