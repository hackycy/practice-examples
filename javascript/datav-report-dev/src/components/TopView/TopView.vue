<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <total-sales />
      </el-col>
      <el-col :span="6">
        <total-orders />
      </el-col>
      <el-col :span="6">
        <today-users />
      </el-col>
      <el-col :span="6">
        <total-users />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalUsers from './TotalUsers/index.vue'
import TotalSales from './TotalSales/index.vue'
import TotalOrders from './TotalOrders/index.vue'
import TodayUsers from './TodayUsers/index.vue'

export default {
  name: 'TopView',
  components: {
    TotalUsers,
    TotalSales,
    TotalOrders,
    TodayUsers
  }
}
</script>

<style lang="scss" scoped>
</style>
